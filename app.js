const container = document.getElementById("assignmentsContainer");
const nav = document.getElementById("sectionsNav");
const allCards = [];
let revealAllMode = false;

function renderMath(el) {
  if (window.MathJax) {
    MathJax.typesetPromise([el]);
  }
}

// Use sessionStorage instead of localStorage so answers persist only during session
// Clear on refresh by checking for page reload
if (performance.navigation.type === 1 || performance.getEntriesByType("navigation")[0]?.type === "reload") {
  // Clear sessionStorage on refresh
  assignments.forEach(a => {
    a.questions.forEach(q => {
      sessionStorage.removeItem(`a${a.id}q${q.id}`);
    });
  });
}

// Create navigation buttons
assignments.forEach((a, index) => {
  const btn = document.createElement("button");
  btn.textContent = a.title;
  if(index === 0) btn.classList.add("active");
  btn.onclick = () => {
    document.getElementById(`a${a.id}`).scrollIntoView({ behavior: 'smooth' });
    // Update active state
    nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };
  nav.appendChild(btn);
});

// Create assignment sections
assignments.forEach(a => {
  const section = document.createElement("section");
  section.className = "assignment";
  section.id = `a${a.id}`;

  section.innerHTML = `
    <div class="assignment-title">${a.title}</div>
    <div class="cards"></div>
  `;

  const cards = section.querySelector(".cards");

  a.questions.forEach(q => {
    const saved = sessionStorage.getItem(`a${a.id}q${q.id}`);
    const isAnswered = saved !== null;
    const isCorrect = saved !== null && +saved === q.correct;

    const card = document.createElement("div");
    card.className = "card";
    if(isAnswered) card.classList.add("answered");
    if(isCorrect) card.classList.add("correct-answer");

    card.innerHTML = `
      <div class="card-header">
        <div class="question-label-wrapper">
          <span class="question-label">Q${q.id}</span>
          <div class="progress-indicator">
            <div class="progress-bar" style="width: ${isAnswered ? '100%' : '0%'}"></div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="question">${q.text}</p>
        <div class="options">
          ${q.options.map((o,i)=>`
            <button data-i="${i}" class="option-btn">${o}</button>
          `).join("")}
        </div>
      </div>
      <div class="card-footer">
        <div class="actions">
          <button class="translate">Translate</button>
          <button class="explain">Explain</button>
        </div>
        ${isAnswered ? `
          <div class="answer-status">
            <span class="status-icon ${isCorrect ? 'correct-icon' : 'wrong-icon'}">
              ${isCorrect ? '✓' : '✗'}
            </span>
            <span class="status-text">${isCorrect ? 'Correct Answer' : 'Wrong Answer'}</span>
          </div>
        ` : ''}
      </div>
    `;

    const btns = card.querySelectorAll(".options button");
    const questionEl = card.querySelector(".question");
    const progressBar = card.querySelector(".progress-bar");
    const cardFooter = card.querySelector(".card-footer");
    let selectedAnswer = saved !== null ? +saved : null;

    // Function to show answer results
    const showAnswerResult = (selectedIndex) => {
      const isCorrectAnswer = selectedIndex === q.correct;
      
      // Disable all buttons
      btns.forEach(btn => btn.disabled = true);
      
      // Mark selected answer
      btns.forEach(btn => {
        const btnIndex = +btn.dataset.i;
        
        if(btnIndex === selectedIndex) {
          // User's selected answer
          if(isCorrectAnswer) {
            btn.classList.add("correct");
            card.classList.add("correct-answer");
          } else {
            btn.classList.add("wrong");
          }
        }
        
        // Show correct answer if wrong was selected
        if(!isCorrectAnswer && btnIndex === q.correct) {
          btn.classList.add("show-correct");
        }
      });
      
      // Update progress bar
      if(progressBar) {
        progressBar.style.width = '100%';
      }
      
      // Update card classes
      card.classList.add("answered");
      
      // Show answer status
      const statusHTML = `
        <div class="answer-status">
          <span class="status-icon ${isCorrectAnswer ? 'correct-icon' : 'wrong-icon'}">
            ${isCorrectAnswer ? '✓' : '✗'}
          </span>
          <span class="status-text">${isCorrectAnswer ? 'Correct Answer' : 'Wrong Answer'}</span>
        </div>
      `;
      
      // Remove existing status if any and add new one
      const existingStatus = cardFooter.querySelector(".answer-status");
      if(existingStatus) {
        existingStatus.remove();
      }
      cardFooter.insertAdjacentHTML('beforeend', statusHTML);
    };

    // Show saved answer if exists
    if(isAnswered) {
      showAnswerResult(+saved);
    }

    // Handle button clicks
    btns.forEach(b=>{
      b.onclick = ()=>{
        if (revealAllMode) return;
        // Don't allow selection if already answered
        if(b.disabled) return;
        
        const selectedIndex = +b.dataset.i;
        selectedAnswer = selectedIndex;
        
        // Save to sessionStorage
        sessionStorage.setItem(`a${a.id}q${q.id}`, selectedIndex);
        
        // Show result immediately
        showAnswerResult(selectedIndex);
      };
    });

    let isTranslated = false;
    card.querySelector(".translate").onclick = ()=>{
      isTranslated = !isTranslated;
      
      if(isTranslated) {
        // Show Arabic text
        questionEl.innerHTML = q.translate;
renderMath(questionEl);

        questionEl.dir = "rtl";
        questionEl.classList.add("arabic");
        
        btns.forEach((b,i)=>{
          const originalOption = q.options[i];
          const translatedOption = q.translateOptions?.[i] || q.options[i];
         b.innerHTML = isTranslated ? translatedOption : originalOption;
renderMath(b);

          // Check if the option contains Arabic characters
          if(/[\u0600-\u06FF]/.test(translatedOption)) {
            b.dir = "rtl";
            b.classList.add("arabic");
          } else {
            b.dir = "ltr";
            b.classList.remove("arabic");
          }
        });
      } else {
        // Show English text
     questionEl.innerHTML = q.text;
renderMath(questionEl);

        questionEl.dir = "ltr";
        questionEl.classList.remove("arabic");
        
        btns.forEach((b,i)=>{
          b.textContent = q.options[i];
          b.dir = "ltr";
          b.classList.remove("arabic");
        });
      }
    };

    card.querySelector(".explain").onclick = ()=>{
      const explainTextEl = document.getElementById("explainText");
     explainTextEl.innerHTML = q.explain;
renderMath(explainTextEl);

      // Check if explanation contains Arabic characters
      if(/[\u0600-\u06FF]/.test(q.explain)) {
        explainTextEl.dir = "rtl";
        explainTextEl.classList.add("arabic");
      } else {
        explainTextEl.dir = "ltr";
        explainTextEl.classList.remove("arabic");
      }
      document.getElementById("explainModal").style.display = "flex";
    };

    allCards.push({
      card,
      btns,
      q,
      assignment: a,
      progressBar,
      cardFooter,
      showAnswerResult
    });

    cards.appendChild(card);
    renderMath(card);

  });

  container.appendChild(section);
});

function isCorrectOption(index, correct) {
  return Array.isArray(correct) ? correct.includes(index) : index === correct;
}

function revealCardAnswer({ card, btns, q, progressBar, cardFooter }) {
  btns.forEach(btn => {
    btn.disabled = true;
    btn.classList.remove("correct", "wrong", "show-correct");
    if (isCorrectOption(+btn.dataset.i, q.correct)) {
      btn.classList.add("correct");
    }
  });
  if (progressBar) progressBar.style.width = "100%";
  card.classList.add("answered", "correct-answer");
  const existing = cardFooter.querySelector(".answer-status");
  if (existing) existing.remove();
  cardFooter.insertAdjacentHTML("beforeend", `
    <div class="answer-status answer-status--reveal">
      <span class="status-icon correct-icon">✓</span>
      <span class="status-text">الإجابة الصح</span>
    </div>
  `);
}

function restoreCardVisual({ card, btns, q, assignment: a, progressBar, cardFooter, showAnswerResult }) {
  btns.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong", "show-correct");
  });
  card.classList.remove("answered", "correct-answer");
  const status = cardFooter.querySelector(".answer-status");
  if (status) status.remove();
  const saved = sessionStorage.getItem(`a${a.id}q${q.id}`);
  if (saved !== null) {
    showAnswerResult(+saved);
  } else if (progressBar) {
    progressBar.style.width = "0%";
  }
}

function setRevealAll(active) {
  revealAllMode = active;
  allCards.forEach(entry => {
    if (active) revealCardAnswer(entry);
    else restoreCardVisual(entry);
  });
  const asmeeBtn = document.getElementById("asmeeToggle");
  if (asmeeBtn) asmeeBtn.classList.toggle("active", active);
}

const asmeeToggle = document.getElementById("asmeeToggle");
if (asmeeToggle) {
  asmeeToggle.onclick = () => setRevealAll(!revealAllMode);
}

const floatingIntro = document.getElementById("floatingIntro");
const floatingStartBtn = document.getElementById("floatingStartBtn");
const studyTopBtn = document.getElementById("studyTopBtn");
const INTRO_SEEN_KEY = "oopIntroSeenOnce";

function openStudyTopButton() {
  if (studyTopBtn) {
    studyTopBtn.classList.add("visible");
  }
}

function closeFloatingIntro() {
  if (floatingIntro) {
    floatingIntro.classList.add("hidden");
  }
  localStorage.setItem(INTRO_SEEN_KEY, "1");
  openStudyTopButton();
}

if (localStorage.getItem(INTRO_SEEN_KEY) === "1") {
  if (floatingIntro) floatingIntro.classList.add("hidden");
  openStudyTopButton();
}

if (floatingStartBtn) {
  floatingStartBtn.onclick = () => {
    closeFloatingIntro();
    if (!assignments.length) return;
    const firstSection = document.getElementById(`a${assignments[0].id}`);
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      const firstNavBtn = nav.querySelector("button");
      if (firstNavBtn) firstNavBtn.classList.add("active");
    }
  };
}

// Close modal
document.getElementById("closeModal").onclick = ()=>{
  document.getElementById("explainModal").style.display = "none";
};

// Close modal when clicking outside
document.getElementById("explainModal").onclick = (e)=>{
  if(e.target.id === "explainModal"){
    document.getElementById("explainModal").style.display = "none";
  }
};

// Reset/Review button functionality - Clear all answers
const resetBtn = document.querySelector(".btn-review");
if (resetBtn) resetBtn.onclick = ()=> {
  assignments.forEach(a => {
    a.questions.forEach(q => {
      sessionStorage.removeItem(`a${a.id}q${q.id}`);
    });
  });

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong", "show-correct");
  });

  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("answered", "correct-answer");
  });

  document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.style.width = "0%";
  });
};


// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
if(savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeIcon.textContent = "☀️";
} else {
  themeIcon.textContent = "🌙";
}

themeToggle.onclick = () => {
  const isLight = document.body.classList.contains("light-theme");
  
  if(isLight) {
    // Switch to dark
    document.body.classList.remove("light-theme");
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    // Switch to light
    document.body.classList.add("light-theme");
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
};

/* Egyptian motivational messages — 5 min, 10 min, then every 10 min (20 total) */
const EGYPT_MESSAGES = [
[
  { emoji: "💍", text: "يلا يا نجم حل شوية... ولا ناوي تفضل سنجل لحد 2050؟" },

  { emoji: "💵", text: "يسطا السؤال ده ممكن يبقى أول خطوة ناحية القبض بالدولار." },

  { emoji: "✈️", text: "حل ومتركزش في الحر ده... ركز في المطار اللي هتسافر منه." },

  { emoji: "🌍", text: "كمّل يا معلم... أوروبا مش هتيجي تاخدك من البيت." },

  { emoji: "🔥", text: "بطل فرك وكمّل... الحلم مش بيتحقق بالسرسجة." },

  { emoji: "🛫", text: "يسطا الـ OOP دي لو خلصتها ممكن تلاقي نفسك في بلد تانية." },

  { emoji: "💒", text: "حل السؤال ده... الشبكة مش هتتدفع بالدعاء." },

  { emoji: "💲", text: "كل إجابة صح بتقربك من مرتب يخليك تبطل تبص على الأسعار." },

  { emoji: "🖥️", text: "يلا يا وحش... اللابتوب ده المفروض يجيب فلوس مش ألعاب." },

  { emoji: "📈", text: "كمّل يا بطل... المرتب الكبير بيحب الناس اللي بتكمل." },

  { emoji: "🎫", text: "كل Class تفهمها = نص خطوة ناحية تذكرة السفر." },

  { emoji: "💪", text: "شد حيلك يا نجم... السؤال مش هيحل نفسه." },

  { emoji: "🌅", text: "ذاكر النهارده... واشكر نفسك بعد كام سنة." },

  { emoji: "🏠", text: "حل يا كبير... الشقة دي مش هتجيب نفسها." },

  { emoji: "🎮", text: "سيب اللعبة شوية... الوحش الحقيقي هو الفقر." },

  { emoji: "💶", text: "كمّل يا أسطورة... الجنيه تعبان ومستنيك تنقذه." },

  { emoji: "🧭", text: "بص للسؤال مش للسقف... مستقبلك مش هناك." },

  { emoji: "🦁", text: "إيه يا وحش؟ سؤال صغير هيوقفك يعني؟" },

  { emoji: "🚪", text: "كل سؤال بتخلصه بيفتح باب جديد قدامك." },

  { emoji: "🎯", text: "آخر شوية يا نجم... متضيعش تعبك عالفاضي." },

  { emoji: "🚀", text: "كمّل يا معلم... النسخة الغنية منك مستنياك قدام." },

  { emoji: "☕", text: "اشرب رشفة قهوة وكمل... الباشمهندس مش بيكسل." },

  { emoji: "😎", text: "يلا يا برنس... خلي الناس تقول الواد ده عرف يعملها." },

  { emoji: "💰", text: "السؤال ده أرخص من كورس التنمية البشرية وأفيد." },

  { emoji: "🏆", text: "متقفش هنا... الأبطال بيكملوا للآخر." },

  { emoji: "🚗", text: "كمّل... العربية اللي نفسك فيها مش هتيجي بالحظ." },

  { emoji: "📚", text: "افتح مخك شوية... المستقبل بيترتب من دلوقتي." },

  { emoji: "👑", text: "يلا يا ملك... مينفعش الملك يسيب التاسك ويروح ينام." },

  { emoji: "⚡", text: "حل بسرعة قبل ما الحماس يهرب منك." },

  { emoji: "🎉", text: "خلص الجزء ده وخدلك لفة احتفال محترمة." }
]
];

function getMessageDelaysMs() {
  const minutes = [5, 10];
  for (let i = 2; i < EGYPT_MESSAGES.length; i++) {
    minutes.push(minutes[i - 1] + 10);
  }
  return minutes.map(m => m * 60 * 1000);
}

function showEgyptToast({ emoji, text }) {
  const host = document.getElementById("egyptToastHost");
  if (!host) return;

  const toast = document.createElement("div");
  toast.className = "egypt-toast";
  toast.innerHTML = `<span class="egypt-toast-emoji">${emoji}</span>${text}`;
  host.appendChild(toast);

  const dismiss = () => {
    if (!toast.parentNode) return;
    toast.classList.add("hiding");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  };

  const autoTimer = setTimeout(dismiss, 8000);
  toast.addEventListener("click", () => {
    clearTimeout(autoTimer);
    dismiss();
  });
}

function scheduleEgyptMessages() {
  const delays = getMessageDelaysMs();
  EGYPT_MESSAGES.forEach((msg, i) => {
    setTimeout(() => showEgyptToast(msg), delays[i]);
  });
}

scheduleEgyptMessages();
