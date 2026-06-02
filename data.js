const assignments = [
  {
    id: 0,
    title: "📘 Final Exam 2025 | Comprehensive",
    questions: [
      { id:1, text:"A program in execution is called a/an _______?", options:["method","variable","operating system","process"], correct:3, translate:"البرنامج أثناء التنفيذ يُسمى _______؟", explain:"Process (العملية) هو البرنامج أثناء التنفيذ." },
      { id:2, text:"Static fields are stored in the _______ section in memory while the program is running?", options:["increment","prompt","text","data"], correct:3, translate:"الحقول الثابتة (static) تُخزن في قسم _______ في الذاكرة أثناء تشغيل البرنامج؟", explain:"Data section تخزن المتغيرات الثابتة والعالمية." },
      { id:3, text:"A _______ class member is accessible to all classes?", options:["public","private","protected","dynamic"], correct:0, translate:"عضو كلاس _______ يمكن الوصول إليه من جميع الكلاسات؟", explain:"public يسمح بالوصول من أي مكان." },
      { id:4, text:"_______ fields serve as global variables that are always in memory while the program is running?", options:["local","int","Static","double"], correct:2, translate:"الحقول _______ تعمل كمتغيرات عامة تكون دائمًا في الذاكرة أثناء تشغيل البرنامج؟", explain:"Static fields تبقى في الذاكرة طوال عمر البرنامج." },
      { id:5, text:"A _______ is a special method that is called when an object is created.", options:["class","constructor","variable","namespace"], correct:1, translate:"_______ هو دالة خاصة يتم استدعاؤها عند إنشاء كائن.", explain:"Constructor يتم استدعاؤه تلقائيًا عند إنشاء الكائن." },
      { id:6, text:"In C#, you can call the garbage collector manually using the _______ method.", options:["GC.Collect()","GC.Garbage()","GC.Auto()","GC.Manual()"], correct:0, translate:"في C#، يمكنك استدعاء garbage collector يدويًا باستخدام الدالة _______", explain:"GC.Collect() تطلب تنظيف الذاكرة يدويًا." },
      { id:7, text:"Create a method that takes unlimited arguments using the _______ modifier.", options:["params","in","open","arb"], correct:0, translate:"إنشاء دالة تأخذ عدد غير محدود من المعاملات باستخدام modifier _______", explain:"params يسمح بعدد متغير من المعاملات." },
      { id:8, text:"An array of a reference-type holds a set of _______", options:["references","strings","characters","booleans"], correct:0, translate:"المصفوفة من نوع reference تحتوي على مجموعة من _______", explain:"المراجع (references) لعناوين الكائنات في Heap." },
      { id:9, text:"_______ makes sure that 'sensitive' data is hidden within the class.", options:["Paging","parsing","Encapsulation","paraphrasing"], correct:2, translate:"_______ يضمن إخفاء البيانات الحساسة داخل الكلاس.", explain:"Encapsulation = تغليف البيانات وإخفائها." },
      { id:10, text:"A property can be made write-only by providing only the _______ accessor?", options:["set","get","have","is"], correct:0, translate:"يمكن جعل property للكتابة فقط عن طريق توفير accessor _______ فقط؟", explain:"set فقط (أو get private)." },
      { id:11, text:"Which of the following is a (binary) operator?", options:["/","++","--","?:"], correct:0, translate:"أي من التالي هو عامل (ثنائي)؟", explain:"/ (قسمة) يحتاج معاملين (binary). ++ و -- أحاديان." },
      { id:12, text:"The conditional logical operators _______ cannot be overloaded directly.", options:["+","!=","*","&&"], correct:3, translate:"المؤثرات المنطقية الشرطية _______ لا يمكن عمل overloading لها مباشرة.", explain:"&& و || لا يمكن overloading مباشر." },
      { id:13, text:"To inherit from a class, use the _______ symbol before the parent class name?", options:["+",":","§","%"], correct:1, translate:"للتوريث من كلاس، استخدم الرمز _______ قبل اسم الكلاس الأب؟", explain:"النقطتان (:) للتوريث في C#." },
      { id:14, text:"Use the keyword _______ to call another constructor in the parent class.", options:["this","that","base","basic"], correct:2, translate:"استخدم keyword _______ لاستدعاء Constructor آخر في الكلاس الأب.", explain:"base لاستدعاء Constructor الكلاس الأب." },
      { id:15, text:"The _______ access modifier allows access only in the same class or derived class.", options:["public","protected","private","insider"], correct:1, translate:"access modifier _______ يسمح بالوصول فقط في نفس الكلاس أو الكلاس المشتق.", explain:"protected" },
      { id:16, text:"Class A inherits from B and implements interfaces X, Y, Z. Correct order?", options:["class A: X, B, Y, Z { }","class A: B, X, Y, Z { }","class A: X, Y, Z, B { }","class A: X, Y, B, Z { }"], correct:1, translate:"كلاس A يرث من B ويطبق X, Y, Z. الترتيب الصحيح؟", explain:"class A: BaseClass, Interfaces (القاعدة أولاً ثم الواجهات)." },
      { id:17, text:"_______ is ability of different object types to provide unique interface for methods.", options:["publicity","Polymorphism","encapsulation","data definition"], correct:1, translate:"_______ هي قدرة أنواع مختلفة من الكائنات على توفير واجهة فريدة للدوال.", explain:"Polymorphism = تعدد الأشكال." },
      { id:18, text:"All members of an interface are _______ by default.", options:["public","private","protected","internal"], correct:0, translate:"كل أعضاء الـ interface هم _______ افتراضيًا.", explain:"public (بدون تنفيذ)." },
      { id:19, text:"A/An _______ type is a data type consisting of a set of named values?", options:["enum","class","struct","variable"], correct:0, translate:"نوع _______ هو نوع بيانات يتكون من مجموعة من القيم المسماة؟", explain:"enum (Enumeration)." },
      { id:20, text:"The minimum number of parameters for a (struct) constructor is _______ parameter(s).", options:["zero","one","two at least","three at least"], correct:0, translate:"العدد الأدنى من المعاملات لـ Constructor الـ struct هو _______ معامل(ات).", explain:"Zero (struct constructor يمكن أن يكون بدون معاملات في C#)." },
      { id:21, text:"A/An _______ is a type that represents references to methods with particular signature.", options:["delegate","char","hidden class","overloading"], correct:0, translate:"_______ هو نوع يمثل مراجع لدوال بتوقيع معين.", explain:"Delegate" },
      { id:22, text:"A reference can be removed from a delegate using _______ operator.", options:["&&","&=","-=","+="], correct:2, translate:"يمكن إزالة مرجع من delegate باستخدام مؤثر _______", explain:"-=" },
      { id:23, text:"Raising an event with no event handler (null) will result in a _______", options:["run-time exception","creating new delegate","creating new event","making new loop"], correct:0, translate:"استدعاء حدث ليس له معالج (null) سينتج _______", explain:"استثناء وقت التشغيل (NullReferenceException)." },
      { id:24, text:"A _______ delegate holds more than one method reference at the same time.", options:["outcast","casting","multicast","multimedia"], correct:2, translate:"delegate _______ يحمل أكثر من مرجع دالة في نفس الوقت.", explain:"Multicast delegate" },
      { id:25, text:"Which keyword prevents a class from being inherited?", options:["override","abstract","sealed","virtual"], correct:2, translate:"أي keyword يمنع الكلاس من أن يكون موروثًا؟", explain:"sealed" },
      { id:26, text:"What is the purpose of the 'this' keyword in C#?", options:["Declares new class member","Refers to current instance","Defines static method","Specifies access modifiers"], correct:1, translate:"ما هو الغرض من keyword 'this' في C#؟", explain:"يشير إلى الكائن الحالي (current instance)." },
      { id:27, text:"If a class has 1 static field and 2 instance fields, total fields when 5 objects are created?", options:["5","11","15","10"], correct:1, translate:"كلاس به 1 static و 2 instance، إجمالي الحقول عند إنشاء 5 كائنات؟", explain:"Static = 1 (مرة واحدة) + Instance (2 × 5 = 10) = 11" },
      { id:28, text:"To define a class in C#, the keyword _______ is used.", options:["class","objects","struct","Define_Class"], correct:0, translate:"لتعريف كلاس في C#، يتم استخدام keyword _______", explain:"class" }
    ]
  },
  {
    id: 1,
    title: "Chapter 1 | Classes & Objects",
    questions: [
      { id:1, text:"A ______ is a template (blueprint) for objects.", options:["Object","Class","Method","Fields"], correct:1, translate:"______ هو قالب (مخطط) للكائنات.", explain:"الـ Class هو المخطط أو القالب الذي يتم من خلاله إنشاء الكائنات." },
      { id:2, text:"The set of operations that the object can perform.", options:["Class","Fields","Data","Behavior"], correct:3, translate:"مجموعة العمليات التي يمكن للكائن تنفيذها.", explain:"Behavior = السلوك = العمليات التي يمكن للكائن تنفيذها." },
      { id:3, text:"Which of the following represents attributes?", options:["Properties","Methods","Actions","Functions"], correct:0, translate:"أي مما يلي يمثل السمات؟", explain:"السمات تمثل حالة الكائن، وتُعرف بالـ Properties أو Fields." },
      { id:4, text:"Is this code Correct?<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='keyword'>class</span> <span class='type'>Game</span> () { }</div></div></div></div>", options:["Yes","No"], correct:1, translate:"هل هذا الكود صحيح؟", explain:"خطأ؛ لا توضع أقواس بعد اسم الكلاس. الصحيح: class Game { }" },
      { id:5, text:"OOP organizes a program as a collection of", options:["set of objects and their interactions","set of modules or functions","set actions and operations","set of data and attributes"], correct:0, translate:"OOP تنظم البرنامج كمجموعة من", explain:"OOP = مجموعة كائنات متفاعلة." },
      { id:6, text:"In OOP, any entity that has both a state and a behavior is called a(n)", options:["class","object","function","method"], correct:1, translate:"في OOP، أي كيان له حالة وسلوك يسمى", explain:"الكائن (Object) هو الكيان الذي له حالة وسلوك." },
      { id:7, text:"The behavior of an object refers to", options:["current values stored in fields","set of operations it can perform","class from which it was created","amount of memory it occupies"], correct:1, translate:"سلوك الكائن يشير إلى", explain:"السلوك = مجموعة العمليات التي يمكن للكائن تنفيذها." },
      { id:8, text:"In OOP, a class serves as a ______ from which objects are created.", options:["method","variable","blueprint (template)","function"], correct:2, translate:"الكلاس يعمل كـ ______ يتم من خلاله إنشاء الكائنات.", explain:"الكلاس = مخطط (Blueprint) لإنشاء الكائنات." },
      { id:9, text:"Data members describing characteristics are called ______, functions defining actions are called ______.", options:["methods, fields","fields, methods","classes, objects","properties, indexes"], correct:1, translate:"أعضاء البيانات تسمى ______، والدوال التي تحدد الأفعال تسمى ______.", explain:"Fields = بيانات، Methods = سلوك." },
      { id:10, text:"To create a class we use keyword", options:["class","new","create","object"], correct:0, translate:"لإنشاء كلاس نستخدم", explain:"class" },
      { id:11, text:"To create a new object we use keyword", options:["class","new","create","object"], correct:1, translate:"لإنشاء كائن جديد نستخدم", explain:"new" },
      { id:12, text:"In memory layout, ______ section holds compiled instructions.", options:["Data","Text","Stack","Heap"], correct:1, translate:"قسم ______ يحمل التعليمات المجمعة (الكود القابل للتنفيذ).", explain:"Text section (أو Code) يخزن تعليمات البرنامج." },
      { id:13, text:"Global and static variables are stored in ______ section.", options:["Data","Text","Stack","Heap"], correct:0, translate:"المتغيرات العامة والثابتة تُخزن في قسم", explain:"Data section" },
      { id:14, text:"Local variables and function call info are stored in ______.", options:["Data","Text","Stack","Heap"], correct:2, translate:"المتغيرات المحلية ومعلومات استدعاء الدوال تُخزن في", explain:"Stack" },
      { id:15, text:"Dynamically allocated memory (objects, arrays) is drawn from ______.", options:["Data","Text","Stack","Heap"], correct:3, translate:"الذاكرة المخصصة ديناميكيًا (كائنات، مصفوفات) تؤخذ من", explain:"Heap" },
      { id:16, text:"Entity which holds actual data is called", options:["Class","Object","Blueprint","Method"], correct:1, translate:"الكيان الذي يحمل البيانات الفعلية يسمى", explain:"Object" },
      { id:17, text:"Multiple classes can be created from a single object.", options:["True","False"], correct:1, translate:"يمكن إنشاء عدة كلاسات من كائن واحد.", explain:"العكس: يمكن إنشاء عدة كائنات من كلاس واحد." },
      { id:18, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='keyword'>static</span> <span class='type'>int</span>[] arr = <span class='keyword'>new</span> <span class='type'>int</span>[10];</div></div></div></div> Where is arr stored?", options:["Stack","Heap","Text","Data"], correct:3, translate:"أين تُخزن arr؟", explain:"Static variables تُخزن في Data section." },
      { id:19, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>int</span>[] arr = <span class='keyword'>new</span> <span class='type'>int</span>[10];</div></div></div></div> Where is arr stored?", options:["Stack","Heap","Text","Data"], correct:0, translate:"أين تُخزن arr؟", explain:"Local variable arr (reference) stored in Stack." },
      { id:20, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>Car</span> c1 = <span class='keyword'>new</span> Car;</div></div></div></div> Correct?", options:["True","False"], correct:1, translate:"هل الكود صحيح؟", explain:"خطأ، الصحيح: Car c1 = new Car();" },
      { id:21, text:"You can create only one object from a given class.", options:["True","False"], correct:1, translate:"يمكن إنشاء كائن واحد فقط من كلاس معين.", explain:"يمكن إنشاء عدد غير محدود من الكائنات." },
      { id:22, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>int</span>[] arr = {5,6,7,8};</div></div></div></div> What does arr contain?", options:["Address of array","5,6,7,8","null","empty"], correct:0, translate:"ماذا يحتوي arr؟", explain:"arr يحتوي على عنوان (مرجع) المصفوفة في Heap." }
    ]
  },
  {
    id: 2,
    title: "Chapter 2 | Class Members",
    questions: [
      { id:1, text:"What is output?<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='keyword'>static</span> <span class='keyword'>class</span> <span class='type'>student</span> {</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'>    <span class='keyword'>public</span> <span class='keyword'>static</span> <span class='type'>int</span> counter = 1;</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>    <span class='keyword'>public</span> student() { counter++; }</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>}</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'><span class='keyword'>static</span> <span class='keyword'>void</span> <span class='function'>Main</span>() {</div></div><div class='code-line'><span class='line-number'>6</span><div class='code'>    Console.WriteLine(student.counter);</div></div><div class='code-line'><span class='line-number'>7</span><div class='code'>}</div></div></div></div>", options:["0","1","2","error"], correct:3, translate:"ما هو الناتج؟", explain:"خطأ: الكلاس الـ static لا يمكن أن يحتوي على Constructor غير static." },
      { id:2, text:"To access the members of a class through an object, you use the ______ syntax", options:[".",":",":","~"], correct:0, translate:"للوصول إلى أعضاء الكلاس عن طريق الكائن، نستخدم علامة ______", explain:"Dot operator (.) تستخدم للوصول إلى الأعضاء." },
      { id:3, text:"The default access level for members of a class is", options:["public","private","internal","protected"], correct:1, translate:"مستوى الوصول الافتراضي لأعضاء الكلاس هو", explain:"private هو المستوى الافتراضي." },
      { id:4, text:"To allow controlled access to private fields from outside, the class typically provides", options:["base class access","protected scope","public accessor methods (getters/setters)","static accessors"], correct:2, translate:"للسماح بالوصول المتحكم به للحقول الخاصة من خارج الكلاس، يوفر الكلاس عادةً", explain:"Getters and setters (Properties) تسمح بالوصول المتحكم." },
      { id:5, text:"Which keyword controls the visibility of a class member?", options:["static","public","visible","base"], correct:1, translate:"أي keyword يتحكم في رؤية عضو الكلاس؟", explain:"public, private, protected, internal" },
      { id:6, text:"The values of fields of a given object represent its", options:["behavior","methods","state","function"], correct:2, translate:"قيم الحقول لكائن معين تمثل", explain:"State = حالة الكائن." },
      { id:7, text:"The methods of a class define how an object of that class", options:["is created","behaves","is destroyed","is stored in memory"], correct:1, translate:"دوال الكلاس تحدد كيف أن الكائن", explain:"Methods = السلوك." },
      { id:8, text:"Which keyword declares a member that belongs to the class itself rather than to any instance?", options:["public","private","static","protected"], correct:2, translate:"أي keyword يصرح بعضو يتبع الكلاس نفسه بدلاً من أي instance؟", explain:"static" },
      { id:9, text:"Which correctly describes a static class?", options:["It can contain non-static members","It contains only static members and cannot be instantiated","It can be instantiated using new","It must inherit from a base class"], correct:1, translate:"أي عبارة تصف static class بشكل صحيح؟", explain:"Static class: all members static, cannot be instantiated." },
      { id:10, text:"Unlike an instance method, a static method belongs to the ______ rather than to any object.", options:["program","class","object","process"], correct:1, translate:"على عكس instance method، الـ static method ينتمي إلى ______ بدلاً من أي كائن.", explain:"الكلاس نفسه." },
      { id:11, text:"A static field exists as", options:["a single shared copy regardless of objects created","a fresh copy for every new object","requires new to initialize","used only in static class"], correct:0, translate:"الحقل الثابت (static field) يوجد كـ", explain:"نسخة واحدة مشتركة بين جميع الكائنات." },
      { id:12, text:"A static method is invoked through the ______ itself.", options:["class name","object name","access modifier","base name"], correct:0, translate:"الـ static method يتم استدعاؤه من خلال ______ نفسه.", explain:"ClassName.MethodName()" },
      { id:13, text:"A static class can be instantiated", options:["True","False"], correct:1, translate:"الـ static class يمكن إنشاء instance منه", explain:"False" },
      { id:14, text:"A non-static class can have static and non-static members", options:["True","False"], correct:0, translate:"الـ non-static class يمكن أن يحتوي على أعضاء static وغير static", explain:"True" },
      { id:15, text:"A private member can be accessed only", options:["by all classes","within the class it is defined","by derived classes","from main method only"], correct:1, translate:"العضو private يمكن الوصول إليه فقط", explain:"داخل الكلاس نفسه." },
      { id:16, text:"If no access modifier is specified, class members are ______ by default.", options:["Public","Private","Protected","Internal"], correct:1, translate:"إذا لم يتم تحديد access modifier، الأعضاء يكونون ______ افتراضيًا.", explain:"private" },
      { id:17, text:"Encapsulation is primarily used to shield fields from having", options:["invalid data","big values","small values","valid data"], correct:0, translate:"التغليف (Encapsulation) يستخدم بشكل أساسي لحماية الحقول من", explain:"منع البيانات غير الصالحة." },
      { id:18, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='keyword'>public</span> <span class='type'>int</span> x = 5;</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='keyword'>static</span> <span class='keyword'>void</span> <span class='function'>Main</span>(<span class='type'>string</span>[] args) {</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>    <span class='type'>int</span> y = x + 10;</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>    Console.WriteLine(y);</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'>}</div></div></div></div>", options:["5","10","15","error"], correct:3, translate:"ما الناتج؟", explain:"خطأ: لا يمكن الوصول إلى non-static member من static method." },
      { id:19, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>Car</span> c1 = <span class='keyword'>new</span> <span class='type'>Car</span>();</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'>c1.speed = 1000;</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'><span class='type'>Car</span> c2 = c1;</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>c2.speed = 2000;</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'><span class='keyword'>class</span> <span class='type'>Car</span> { <span class='keyword'>public</span> <span class='type'>int</span> speed; }</div></div><div class='code-line'><span class='line-number'>6</span><div class='code'>Console.WriteLine(c1.speed);</div></div></div></div>", options:["1000","2000","0","error"], correct:1, translate:"ما قيمة c1.speed؟", explain:"c1 و c2 يشيران لنفس الكائن، تغيير speed يؤثر على الكائن نفسه." },
      { id:20, text:"If a class has 5 static data members and we create 3 objects, the system creates ______ static data values.", options:["5","3","15","0"], correct:0, translate:"إذا كان كلاس يحتوي على 5 أعضاء static وأنشأنا 3 كائنات، النظام ينشئ ______ قيمة static.", explain:"Static members توجد مرة واحدة فقط بغض النظر عن عدد الكائنات." },
      { id:21, text:"If a class has 2 instance data members and we create 3 objects, the system creates ______ data values.", options:["2","3","6","0"], correct:2, translate:"إذا كان كلاس يحتوي على 2 instance members وأنشأنا 3 كائنات، النظام ينشئ ______ قيمة.", explain:"2 × 3 = 6 قيم (كل كائن له نسخته الخاصة)." },
      { id:22, text:"If a class has 2 static fields and 3 instance fields, and you create 2 objects, total variables in memory?", options:["2","3","6","8"], correct:3, translate:"كلاس به 2 static و 3 instance، ننشئ 2 كائن، إجمالي المتغيرات في الذاكرة؟", explain:"Static = 2 (مرة واحدة) + Instance (3 × 2 = 6) = 8" }
    ]
  },
  {
    id: 3,
    title: "Chapter 3 | Constructors & Destructors",
    questions: [
      { id:1, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>student</span> s1 = <span class='keyword'>new</span> <span class='type'>student</span>();</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'>Console.WriteLine(s1.id);</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'><span class='keyword'>class</span> <span class='type'>student</span> {</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>    <span class='keyword'>public</span> <span class='type'>int</span> id = 50;</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'>    <span class='keyword'>public</span> <span class='type'>int</span> number = 30;</div></div><div class='code-line'><span class='line-number'>6</span><div class='code'>    <span class='keyword'>public</span> student(<span class='type'>int</span> id, <span class='type'>int</span> number) {</div></div><div class='code-line'><span class='line-number'>7</span><div class='code'>        id = 10;</div></div><div class='code-line'><span class='line-number'>8</span><div class='code'>        number = 100;</div></div><div class='code-line'><span class='line-number'>9</span><div class='code'>    }</div></div><div class='code-line'><span class='line-number'>10</span><div class='code'>}</div></div></div></div>", options:["50","10","null","error"], correct:3, translate:"ما الناتج؟", explain:"خطأ: لا يوجد Constructor بدون parameters." },
      { id:2, text:"If a class defines no constructor, the compiler automatically creates a", options:["default","static","parameterized","copy"], correct:0, translate:"إذا لم يعرف الكلاس Constructor، فالمترجم ينشئ تلقائيًا", explain:"Default constructor (parameter-less)." },
      { id:3, text:"A constructor in C# has no return type", options:["True","False"], correct:0, translate:"الـ Constructor في C# ليس له نوع إرجاع", explain:"True" },
      { id:4, text:"Static class cannot have a constructor", options:["True","False"], correct:0, translate:"الـ static class لا يمكن أن يحتوي على Constructor", explain:"True (لا يمكن أن يكون له instances)" },
      { id:5, text:"Constructors are called when an object is", options:["destroyed","created","inherited","removed"], correct:1, translate:"الـ Constructor يُستدعى عندما يتم", explain:"عند إنشاء الكائن." },
      { id:6, text:"Which keyword refers to the current object?", options:["this","self","current","my"], correct:0, translate:"أي keyword يشير إلى الكائن الحالي؟", explain:"this" },
      { id:7, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>student</span> s1 = <span class='keyword'>new</span> <span class='type'>student</span>(100);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'>Console.WriteLine(s1.id);</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'><span class='keyword'>class</span> <span class='type'>student</span> {</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>    <span class='keyword'>public</span> <span class='type'>int</span> id = 50;</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'>    <span class='keyword'>public</span> student(<span class='type'>int</span> id) { id = id; }</div></div><div class='code-line'><span class='line-number'>6</span><div class='code'>}</div></div></div></div>", options:["50","100","null","error"], correct:0, translate:"ما الناتج؟", explain:"المتغير المحلي id يخفي الحقل id، لم نستخدم this، فالحقل لم يتغير ويبقى 50." },
      { id:8, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='keyword'>public</span> student(<span class='type'>int</span> id) { <span class='keyword'>this</span>.id = id; }</div></div></div></div>", options:["50","100","null","error"], correct:1, translate:"ما الناتج؟", explain:"this.id يشير للحقل، فتتغير قيمته إلى 100." },
      { id:9, text:"To access the class field when a parameter has the same name we use", options:["self",".","this",":"], correct:2, translate:"للوصول إلى حقل الكلاس عندما يكون الـ parameter بنفس الاسم نستخدم", explain:"this" },
      { id:10, text:"Constructors cannot be overloaded", options:["True","False"], correct:1, translate:"الـ Constructors لا يمكن عمل overloading لهم", explain:"False (يمكن overloading)" },
      { id:11, text:"Objects that are no longer used are removed from memory by", options:["delete operator","garbage collector","destructor","Amr Essam"], correct:1, translate:"الكائنات التي لم تعد مستخدمة تُحذف من الذاكرة بواسطة", explain:"Garbage Collector" },
      { id:12, text:"A destructor in C# begins with the symbol", options:[".","~","this",":"], correct:1, translate:"الـ Destructor في C# يبدأ بالرمز", explain:"~" },
      { id:13, text:"A class can have ______ constructors and ______ destructor.", options:["one, multi","multi, one","one, one","multi, multi"], correct:1, translate:"الكلاس يمكن أن يحتوي على ______ Constructor و ______ Destructor.", explain:"Multi constructors, one destructor" },
      { id:14, text:"When constructor parameter has the same name as a field, this is called", options:["overridden","shadowed","overloaded","none"], correct:1, translate:"عندما يكون اسم Parameter Constructor مطابقًا لاسم حقل، هذا يسمى", explain:"Shadowed (مخفي)" },
      { id:15, text:"A parameterised constructor is useful because it allows you to", options:["set initial values","enable multiple inheritance","call another constructor","delete memory"], correct:0, translate:"الـ Parameterised Constructor مفيد لأنه يسمح لك بـ", explain:"تعيين القيم الأولية." },
      { id:16, text:"Constructor overloading gives a class the flexibility to", options:["initialize objects in several ways","delete objects automatically","grant direct access to static fields","create only one type of object"], correct:0, translate:"Constructor Overloading يعطي الكلاس المرونة لـ", explain:"تهيئة الكائنات بعدة طرق." },
      { id:17, text:"A constructor is always given the same name as", options:["class","object","method","function"], correct:0, translate:"الـ Constructor دائمًا يُعطى نفس اسم", explain:"الكلاس" },
      { id:18, text:"Unlike regular methods, a constructor cannot declare (select 2)", options:["void","return","access modifier","static"], correct:[0,1], translate:"على عكس الدوال العادية، الـ Constructor لا يمكن أن يصرح بـ (اختر 2)", explain:"لا يمكن أن يكون له return type (ولا void) ولا return." },
      { id:19, text:"A constructor can call another constructor using", options:["this","call","new","~"], correct:0, translate:"الـ Constructor يمكنه استدعاء Constructor آخر باستخدام", explain:"this()" }
    ]
  },
  {
    id: 4,
    title: "Chapter 4 | Objects, Methods, Arrays",
    questions: [
      { id:1, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>student</span> x = <span class='keyword'>new</span> <span class='type'>student</span>(<span class='string'>\"aa\"</span>);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='keyword'>ref</span> <span class='type'>student</span> y = <span class='keyword'>ref</span> x;</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>y = <span class='keyword'>new</span> <span class='type'>student</span>(<span class='string'>\"qq\"</span>);</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>Console.WriteLine(x.courses);</div></div></div></div>", options:["aa","qq","null","error"], correct:1, translate:"ما الناتج؟", explain:"ref يمرر المرجع نفسه، تغيير y يغير x." },
      { id:2, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>student</span> x = <span class='keyword'>new</span> <span class='type'>student</span>(<span class='string'>\"aa\"</span>);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='type'>student</span> y = x;</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>y = <span class='keyword'>new</span> <span class='type'>student</span>(<span class='string'>\"qq\"</span>);</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>Console.WriteLine(x.courses);</div></div></div></div>", options:["aa","qq","null","error"], correct:0, translate:"ما الناتج؟", explain:"y نسخة من المرجع، تغيير y لا يؤثر على x." },
      { id:3, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>Student</span> x = <span class='keyword'>new</span> <span class='type'>Student</span>(<span class='string'>\"Adam\"</span>, 60);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='type'>Student</span> y = x;</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>y.score = 100;</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>Console.WriteLine(x.score);</div></div></div></div>", options:["60","100","null","error"], correct:1, translate:"ما الناتج؟", explain:"y و x يشيران لنفس الكائن، تغيير score يظهر في كليهما." },
      { id:4, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>Student</span> x = <span class='keyword'>new</span> <span class='type'>Student</span>(<span class='string'>\"A\"</span>, 10);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='type'>Student</span> y = <span class='keyword'>new</span> <span class='type'>Student</span>(<span class='string'>\"B\"</span>, 20);</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>y = x;</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>y.score = 99;</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'>Console.WriteLine(x.score);</div></div></div></div>", options:["10","20","99","error"], correct:2, translate:"ما الناتج؟", explain:"بعد y = x، يشيران لنفس الكائن، تغيير score = 99 يؤثر على x." },
      { id:5, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>Student</span> x = <span class='keyword'>new</span> <span class='type'>Student</span>(<span class='string'>\"A\"</span>, 10);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'>Modify(x);</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>Console.WriteLine(x.score);</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'><span class='keyword'>void</span> <span class='function'>Modify</span>(<span class='type'>Student</span> s) {</div></div><div class='code-line'><span class='line-number'>5</span><div class='code'>    s = <span class='keyword'>new</span> <span class='type'>Student</span>(<span class='string'>\"B\"</span>, 50);</div></div><div class='code-line'><span class='line-number'>6</span><div class='code'>}</div></div></div></div>", options:["10","50","0","error"], correct:0, translate:"ما الناتج؟", explain:"تمرير reference by value (النسخة) تغيير s لا يؤثر على x." },
      { id:6, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'>Modify(<span class='keyword'>ref</span> x);</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='keyword'>void</span> <span class='function'>Modify</span>(<span class='keyword'>ref</span> <span class='type'>Student</span> s) {</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>    s = <span class='keyword'>new</span> <span class='type'>Student</span>(<span class='string'>\"B\"</span>, 50);</div></div><div class='code-line'><span class='line-number'>4</span><div class='code'>}</div></div></div></div>", options:["10","50","0","error"], correct:1, translate:"ما الناتج؟", explain:"ref يمرر المرجع نفسه، تغيير s يغير x." },
      { id:7, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='keyword'>class</span> <span class='type'>student</span> { <span class='keyword'>public</span> <span class='type'>string</span> name; <span class='keyword'>public</span> <span class='type'>int</span> id; <span class='keyword'>public</span> <span class='type'>double</span> GPA; }</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'><span class='type'>student</span>[] std = <span class='keyword'>new</span> <span class='type'>student</span>[3];</div></div><div class='code-line'><span class='line-number'>3</span><div class='code'>Console.WriteLine(std[1]);</div></div></div></div>", options:["object address","0","null","error"], correct:2, translate:"ما الناتج؟", explain:"مصفوفة من reference types، العناصر لم تنشأ بعد فالقيمة null." },
      { id:8, text:"<div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'>std[1].name = <span class='string'>\"Adam\"</span>;</div></div><div class='code-line'><span class='line-number'>2</span><div class='code'>Console.WriteLine(std[1].name);</div></div></div></div>", options:["Adam","Amr","null","error"], correct:3, translate:"ما الناتج؟", explain:"std[1] = null، لا يمكن الوصول لـ name." },
      { id:9, text:"How many Student objects exist after: <div class='code-editor'><div class='editor-header'><div class='window-buttons'><span class='close'></span><span class='minimize'></span><span class='maximize'></span></div><div class='editor-info'>C#</div></div><div class='editor-content'><div class='code-line'><span class='line-number'>1</span><div class='code'><span class='type'>Student</span>[] students = <span class='keyword'>new</span> <span class='type'>Student</span>[3];</div></div></div></div>", options:["3","0","1","error"], correct:1, translate:"كم عدد كائنات Student الموجودة؟", explain:"0، تم إنشاء المصفوفة فقط، لا توجد كائنات Student." },
      { id:10, text:"In C#, passing parameters by value means", options:["original variable is modified","a copy of the variable is passed","memory is duplicated","reference is destroyed"], correct:1, translate:"تمرير المعاملات by value في C# يعني", explain:"يتم تمرير نسخة من المتغير." },
      { id:11, text:"When passing a reference-type variable to a method by value,", options:["object is copied","nothing is copied","both object & ref are copied","reference is copied"], correct:3, translate:"عند تمرير متغير reference-type إلى method by value،", explain:"يتم نسخ المرجع (العنوان) وليس الكائن نفسه." },
      { id:12, text:"What does the ref keyword do when used with a reference-type parameter?", options:["makes a copy of object","passes the ref variable itself","works same as passing without ref","prevents modification"], correct:1, translate:"ماذا يفعل ref مع parameter من type reference؟", explain:"يمرر المتغير المرجع نفسه (الموقع في الذاكرة)." },
      { id:13, text:"How many params can a single method have?", options:["Unlimited","0","1","2"], correct:2, translate:"كم عدد params التي يمكن أن تحتويها دالة واحدة؟", explain:"يمكن أن يكون هناك params واحد فقط في التوقيع." },
      { id:14, text:"Which modifier allows a method to accept a variable number of arguments?", options:["class","array","params","var"], correct:2, translate:"أي modifier يسمح للدالة باستقبال عدد متغير من المعاملات؟", explain:"params" },
      { id:15, text:"When you create an array of value type (e.g., int), each slot stores", options:["references to heap objects","actual data","object itself","money"], correct:1, translate:"عند إنشاء مصفوفة من value type، كل خانة تخزن", explain:"البيانات الفعلية (actual data)." },
      { id:16, text:"An array whose element type is a reference type stores in each slot", options:["actual values","set of references","set of nulls","set of drags"], correct:1, translate:"المصفوفة التي عناصرها reference type تخزن في كل خانة", explain:"مراجع (references) للكائنات في Heap." }
    ]
  },
  {
    id: 5,
    title: "Chapter 5 | Properties & Indexers",
    questions: [
      { id:1, text:"A property is a class member that offers a controlled way to read or write a", options:["public field","private field","static field","base field"], correct:1, translate:"الـ property هو عضو في الكلاس يوفر طريقة محكمة لقراءة أو كتابة", explain:"الـ property يتحكم في الوصول إلى private field." },
      { id:2, text:"How many accessors can a property have?", options:["0","1","2","3"], correct:2, translate:"كم accessor يمكن أن يملك الـ property؟", explain:"get و set فقط." },
      { id:3, text:"Which accessor is responsible for reading and returning the current value?", options:["get","set","value","return"], correct:0, translate:"أي accessor مسؤول عن قراءة وإرجاع القيمة الحالية؟", explain:"get" },
      { id:4, text:"Which accessor is used to assign a new value to the underlying private field?", options:["get","set","value","return"], correct:1, translate:"أي accessor يستخدم لتعيين قيمة جديدة للحقل الخاص؟", explain:"set" },
      { id:5, text:"Inside set accessor, which keyword holds the value being assigned?", options:["get","set","value","return"], correct:2, translate:"داخل set accessor، أي keyword يحمل القيمة المعينة؟", explain:"value" },
      { id:6, text:"To make a property read-only, you should include only the accessor", options:["get","set","value","return"], correct:0, translate:"لجعل property للقراءة فقط، يجب تضمين accessor فقط", explain:"get فقط." },
      { id:7, text:"A write-only property is characterized by having", options:["get only","set only (or private get)","both","none"], correct:1, translate:"الـ write-only property يتميز بوجود", explain:"set فقط (أو get خاص)." },
      { id:8, text:"Which feature allows objects to be accessed like an array?", options:["properties","indexer","methods","fields"], correct:1, translate:"أي ميزة تسمح بالوصول إلى الكائنات مثل المصفوفة؟", explain:"indexer" },
      { id:9, text:"The primary purpose of an indexer is to enable", options:["deleting fields","overloading class definitions","array-like access","overriding objects"], correct:2, translate:"الغرض الأساسي من indexer هو تمكين", explain:"الوصول الشبيه بالمصفوفة." },
      { id:10, text:"Indexers are similar to properties but their accessors", options:["take parameters","take no parameters","return value","do not return value"], correct:0, translate:"Indexers تشبه properties لكن accessors الخاصة بها", explain:"تأخذ parameters (مفتاح الوصول)." },
      { id:11, text:"Indexers can take zero or more parameters", options:["True","False"], correct:1, translate:"Indexers يمكن أن تأخذ صفر أو أكثر من parameters", explain:"False، يجب أن تأخذ parameter واحد على الأقل." },
      { id:12, text:"In automatic property, you don't create a private field because the compiler creates a", options:["hidden backing field","auto static field","public field","koshary"], correct:0, translate:"في automatic property، لا تنشئ private field لأن المترجم ينشئ", explain:"hidden backing field." },
      { id:13, text:"Indexers can be", options:["overloaded","named","fly","overqualified"], correct:0, translate:"Indexers يمكن أن تكون", explain:"overloaded (محملة بشكل زائد)." },
      { id:14, text:"Indexers use what keyword in their name?", options:["class name","this","object name","any name"], correct:1, translate:"Indexers تستخدم أي keyword في اسمها؟", explain:"this" }
    ]
  },
  {
    id: 6,
    title: "Chapter 6 | Operator Overloading",
    questions: [
      {
        id: 1,
        text: "What is Operator Overloading?",
        options: [
          "Creating multiple classes",
          "Redefining the behavior of operators for user-defined types",
          "Creating multiple constructors",
          "Using operators with primitive types only"
        ],
        correct: 1,
        translate: "ما هو التحميل الزائد للعوامل (Operator Overloading)؟",
        explain: "التحميل الزائد للعوامل يعني إعادة تعريف سلوك المؤثرات (مثل + أو -) لتعمل مع الأنواع التي يحددها المستخدم (الكلاسات والستركت)."
      },
      {
        id: 2,
        text: "Which keyword is used to overload an operator?",
        options: ["overload", "override", "operator", "redefine"],
        correct: 2,
        translate: "أي الكلمات المفتاحية تُستخدم لعمل overload لمؤثر؟",
        explain: "تُستخدم الكلمة المفتاحية 'operator' متبوعة بالرمز المراد تحميله زائدًا لتحديد دالة المؤثر."
      },
      {
        id: 3,
        text: "An overloaded operator method must be:",
        options: ["virtual", "abstract", "protected", "static"],
        correct: 3,
        translate: "يجب أن تكون دالة المؤثر المحمل زائدًا:",
        explain: "في لغة C#، يجب أن تكون جميع دوال الـ Operator Overloading معرفة كـ public static دائمًا."
      },
      {
        id: 4,
        text: "Which operator is unary?",
        options: ["+", "*", ">", "/"],
        correct: 0,
        translate: "أي من العوامل التالية يُعد أحاديًا (Unary)؟",
        explain: "المؤثر '+' يمكن استخدامه كمؤثر أحادي (مثل +x) لتحديد الإشارة، بينما البقية ثنائية دائمًا."
      },
      {
        id: 5,
        text: "A unary operator receives:",
        options: ["1 parameter", "2 parameters", "3 parameters", "0 parameters"],
        correct: 0,
        translate: "يستقبل المؤثر الأحادي (Unary Operator):",
        explain: "المؤثر الأحادي يتعامل مع معامل واحد فقط، وبالتالي تستقبل الدالة معاملًا واحدًا."
      },
      {
        id: 6,
        text: "Which of the following is a comparison operator?",
        options: ["++", "==", "--", "&&"],
        correct: 1,
        translate: "أي مما يلي يُعد مؤثر مقارنة؟",
        explain: "المؤثر '==' (يساوي) يُستخدم للمقارنة بين قيمتين وإرجاع قيمة منطقية (bool)."
      },
      {
        id: 7,
        text: "Which operator cannot be overloaded?",
        options: ["/", "=", "*", "+"],
        correct: 1,
        translate: "أي من المؤثرات التالية لا يمكن عمل overload له؟",
        explain: "مؤثر التخصيص '=' (Assignment operator) لا يمكن عمل تحميل زائد له مباشرة في C#."
      },
      {
        id: 8,
        text: "Which operator cannot be overloaded directly?",
        options: ["++", "&&", "==", "/"],
        correct: 1,
        translate: "أي من المؤثرات التالية لا يمكن تحميله زائدًا بشكل مباشر؟",
        explain: "المؤثرات المنطقية الشرطية مثل '&&' و '||' لا تُحمل مباشرة، بل يتم تقييمها تلقائيًا عند تحميل '&' و '|' مع مؤثرات الحقيقة."
      },
      {
        id: 9,
        text: "Which pair must be overloaded together?",
        options: ["+ and -", "* and /", "> and <", "++ and --"],
        correct: 2,
        translate: "أي من الأزواج التالية يجب تحميلهما زائدًا معًا؟",
        explain: "مؤثرات المقارنة وعلاقات الحجم مثل '<' و '>' يجب تحميلهما في أزواج متكاملة."
      },
      {
        id: 10,
        text: "Which pair must also be overloaded together?",
        options: ["== and !=", "+ and *", "> and ==", "++ and +"],
        correct: 0,
        translate: "أي من الأزواج التالية يجب أيضًا تحميلهما زائدًا معًا؟",
        explain: "المؤثر '==' والمؤثر '!=' متلازمان؛ إذا قمت بتحميل أحدهما، فيجب عليك تحميل الآخر."
      },
      {
        id: 11,
        text: "public Battery operator +(Battery b1, Battery b2) -> Is this code Correct?",
        options: ["True", "False"],
        correct: 1,
        translate: "هل هذا الكود صحيح؟",
        explain: "خطأ؛ الدالة تفتقد للكلمات المفتاحية الإلزامية 'public static'."
      },
      {
        id: 12,
        text: "Operator can have zero or more parameters.",
        options: ["True", "False"],
        correct: 1,
        translate: "يمكن للمؤثر المحمل زائدًا أن يمتلك صفر أو أكثر من المعاملات.",
        explain: "خطأ؛ يجب أن يمتلك المؤثر إما معاملًا واحدًا (أحادي) أو معاملين (ثنائي)."
      },
      {
        id: 13,
        text: "The Overloaded operator cannot have a return type and a parameter list.",
        options: ["True", "False"],
        correct: 1,
        translate: "المؤثر المحمل زائدًا لا يمكن أن يمتلك نوع إرجاع وقائمة معاملات.",
        explain: "خطأ؛ المؤثر المحمل زائدًا يجب أن يمتلك نوع إرجاع وقائمة معاملات محددة."
      },
      {
        id: 14,
        text: "Conditional operators > or < could exist in a single format like + and -.",
        options: ["True", "False"],
        correct: 1,
        translate: "يمكن لمؤثرات الشروط مثل > أو < أن توجد بشكل منفرد مثل + و -.",
        explain: "خطأ؛ المؤثرات الشرطية وعلاقات التباين يجب أن تُعرف دائمًا كأزواج متلازمة ولا تتوفر بشكل منفرد."
      },
      {
        id: 15,
        text: "?: , -> , new , is , sizeof , typeof -> all of them could be overloaded.",
        options: ["True", "False"],
        correct: 1,
        translate: "كل من ?: و -> و new و is و sizeof و typeof يمكن تحميلهم زائدًا.",
        explain: "خطأ؛ هذه المؤثرات خاصة ومحجوزة للنظام ولا يمكن عمل تحميل زائد (Overloading) لأي منها."
      },
      {
        id: 16,
        text: "+, -, *, /, %= -> all of them could be overloaded.",
        options: ["True", "False"],
        correct: 1,
        translate: "كل من +، -، *، /، %= يمكن تحميلهم زائدًا.",
        explain: "خطأ؛ المؤثرات الحسابية الأساسية (+, -, *, /) يمكن تحميلها، بينما مؤثرات التخصيص المركبة مثل '%=' لا يمكن تحميلها مباشرة بل تعتمد على تحميل المؤثر الأساسي."
      },
      {
        id: 17,
        text: "The return type of a comparison operator (like ==) must be:",
        options: ["int", "void", "bool", "any type"],
        correct: 2,
        translate: "نوع الإرجاع لمؤثرات المقارنة (مثل ==) يجب أن يكون:",
        explain: "مؤثرات المقارنة تُرجع دائمًا قيمة منطقية (bool) تعبر عن الصحة (true) أو الخطأ (false)."
      }
    ]
  },
  {
    id: 7,
    title: "Chapter 7 | Inheritance",
    questions: [
      {
        id: 1,
        text: "The class being inherited from is called:",
        options: ["Child Class", "Derived Class", "Parent/Base Class", "Abstract Class"],
        correct: 2,
        translate: "الكلاس الذي يتم الوراثة منه يُسمى:",
        explain: "الكلاس الأساسي الذي يوفر الأعضاء للكلاسات الأخرى يُسمى الكلاس الأب (Parent Class) أو الأساسي (Base Class)."
      },
      {
        id: 2,
        text: "The class that inherits from another class is called:",
        options: ["Parent Class", "Base Class", "Derived Class", "Sealed Class"],
        correct: 2,
        translate: "الكلاس الذي يرث من كلاس آخر يُسمى:",
        explain: "الكلاس الذي يستقبل الخصائص والدوال يُسمى الكلاس المشتق (Derived Class) أو الابن (Child Class)."
      },
      {
        id: 3,
        text: "Which symbol is used for inheritance in C#?",
        options: [".", "+", ":", "->"],
        correct: 2,
        translate: "أي الرموز التالية يُستخدم للوراثة في لغة C#؟",
        explain: "تُستخدم النقطتان الرأسيتان (:) للإشارة إلى الوراثة وتطبيق الواجهات في C#."
      },
      {
        id: 4,
        text: "Given class Person { string name; int maxSpeed; } and class Player: Person { int maxForce; void Shoot() {} }. How many members are directly defined in Player?",
        options: ["1", "2", "3", "5"],
        correct: 1,
        translate: "كم عدد الأعضاء المعرفين بشكل مباشر داخل الكلاس Player؟",
        explain: "الأعضاء المعرفون مباشرة داخل Player هما المتغير maxForce والدالة Shoot فقط (عددهم 2)."
      },
      {
        id: 5,
        text: "Based on the previous code, how many total members does a Player object have?",
        options: ["1", "2", "3", "5"],
        correct: 3,
        translate: "بناءً على الكود السابق، كم إجمالي عدد الأعضاء الذين يمتلكهم كائن من Player؟",
        explain: "يمتلك 3 أعضاء موروثين من Person (الاسم، والسرعة، ودالة الجري المعرفة في الكلاس الأب) بالإضافة إلى العضوين الخاصين به، ليصبح المجموع 5."
      },
      {
        id: 6,
        text: "The main benefit of inheritance is:",
        options: ["Faster execution", "Reduced memory usage", "Smaller objects", "Code reusability"],
        correct: 3,
        translate: "الفائدة الأساسية من الوراثة هي:",
        explain: "إعادة استخدام الكود (Code reusability) وتجنب التكرار من خلال كتابة الكود المشترك في مكان واحد."
      },
      {
        id: 7,
        text: "An abstract class:",
        options: ["Must contain abstract methods", "Cannot be inherited", "Cannot be instantiated", "Cannot contain fields"],
        correct: 2,
        translate: "الكلاس المجرد (Abstract Class):",
        explain: "الكلاس المجرد مصمم ليكون قاعدة فقط للوراثة، ولا يمكن إنشاء كائن (Instance) منه بشكل مباشر باستخدام new."
      },
      {
        id: 8,
        text: "A sealed class:",
        options: ["Must contain abstract methods", "Cannot be inherited", "Cannot be instantiated", "Cannot contain fields"],
        correct: 1,
        translate: "الكلاس المختوم (Sealed Class):",
        explain: "الكلمة المفتاحية sealed تمنع الكلاسات الأخرى من الوراثة منه."
      },
      {
        id: 9,
        text: "When a child object is created:",
        options: ["Child constructor executes first", "Parent constructor executes first", "Both execute simultaneously", "Random order"],
        correct: 1,
        translate: "عند إنشاء كائن من الكلاس الابن:",
        explain: "يتم استدعاء وتنفيذ مشيد الكلاس الأب (Parent Constructor) أولاً لتهيئة الجزء الموروث، ثم ينفذ مشيد الابن."
      },
      {
        id: 10,
        text: "Parent object exists before child object is created.",
        options: ["True", "False"],
        correct: 1,
        translate: "كائن الأب يكون موجودًا ومستقلاً قبل إنشاء كائن الابن.",
        explain: "خطأ؛ لا يتم إنشاء كائن منفصل للأب، بل يتم تهيئة ميزات الأب داخل بنية كائن الابن نفسه أثناء إنشائه."
      },
      {
        id: 11,
        text: "_______ keyword calls a constructor in the same class, _______ keyword calls a constructor in the parent class.",
        options: ["this, base", "base, this", "same, parent", "self, base"],
        correct: 0,
        translate: "الكلمة المفتاحية ___ تستدعي مشيدًا في نفس الكلاس، والكلمة ___ تستدعي مشيدًا في الكلاس الأب.",
        explain: "نستخدم 'this' للربط بين مشيدات نفس الكلاس، ونستخدم 'base' لتوجيه الاستدعاء لمشيد الكلاس الأب."
      },
      {
        id: 12,
        text: "class A { public int x; } class B: A { public int y; } class C: B { public int z; } How many members does B have in total?",
        options: ["1", "2", "3", "0"],
        correct: 1,
        translate: "كم عدد الأعضاء الإجمالي المتوفرة في الكلاس B؟",
        explain: "يحتوي الكلاس B على المتغير الخاص به 'y' بالإضافة إلى المتغير الموروث 'x' من الكلاس A، ليصبح المجموع 2."
      }
    ]
  },
  {
    id: 8,
    title: "Chapter 8 | Polymorphism & Interfaces",
    questions: [
      {
        id: 1,
        text: "Polymorphism allows a child class to:",
        options: ["Inherit fields only", "Introduce a different implementation of an inherited method", "Create constructors automatically", "Prevent method access"],
        correct: 1,
        translate: "تعدد الأشكال (Polymorphism) يسمح للكلاس الابن بـ:",
        explain: "تعديل سلوك الدالة الموروثة وتقديم تنفيذ مخصص وجديد يتناسب مع طبيعة الابن."
      },
      {
        id: 2,
        text: "Which keyword makes a method polymorphic (can be overridden)?",
        options: ["override", "virtual", "static", "sealed"],
        correct: 1,
        translate: "أي الكلمات المفتاحية تجعل الدالة قابلة لإعادة الكتابة وتدعم تعدد الأشكال؟",
        explain: "الكلمة المفتاحية 'virtual' في الكلاس الأب تعطي الإذن للكلاسات الابنة بتعديل الدالة."
      },
      {
        id: 3,
        text: "Which keyword is used in the child class to override a polymorphic method?",
        options: ["override", "virtual", "static", "sealed"],
        correct: 0,
        translate: "أي الكلمات المفتاحية تُستخدم في الكلاس الابن لإعادة كتابة الدالة؟",
        explain: "تُستخدم الكلمة المفتاحية 'override' لإيضاح أننا نعيد كتابة دالة افتراضية موروثة."
      },
      {
        id: 4,
        text: "A method declared as virtual:",
        options: ["Must be private", "Cannot be inherited", "Can be overridden in child classes", "Must be abstract"],
        correct: 2,
        translate: "الدالة المعرفة كـ virtual:",
        explain: "تحتوي على تنفيذ افتراضي في الكلاس الأساسي ويمكن للكلاسات المشتقة استبدال هذا التنفيذ أو الإبقاء عليه."
      },
      {
        id: 5,
        text: "For polymorphism to work correctly:",
        options: ["Parent method must be virtual", "Child method must be override", "Both of them", "Any one of them"],
        correct: 2,
        translate: "لكي يعمل تعدد الأشكال الديناميكي بشكل صحيح:",
        explain: "يجب أن تكون دالة الأب 'virtual' (أو abstract) ودالة الابن تستخدم الكلمة المفتاحية 'override'."
      },
      {
        id: 6,
        text: "An interface is:",
        options: ["A class", "A constructor", "A method", "A blueprint of a class"],
        correct: 3,
        translate: "الواجهة (Interface) هي:",
        explain: "الواجهة بمثابة عقد أو مخطط للكلاس (Blueprint of a class) يحدد الدوال والخصائص التي يجب الالتزام بتنفيذها."
      },
      {
        id: 7,
        text: "Can an interface be instantiated directly?",
        options: ["True", "False"],
        correct: 1,
        translate: "هل يمكن إنشاء كائن (Instance) مباشر من الـ interface؟",
        explain: "لا يمكن إنشاء كائن من الواجهة بشكل مباشر لأنها لا تحتوي على تنفيذ كامل للأعضاء."
      },
      {
        id: 8,
        text: "Interface members (traditionally):",
        options: ["Must have implementation", "Cannot have implementation", "Must be private", "Must be static"],
        correct: 1,
        translate: "أعضاء الـ Interface في وضعها الافتراضي التقليدي:",
        explain: "توضع كمجرد توقيع (Declaration) بدون أي كود تنفيذي داخل الواجهة."
      },
      {
        id: 9,
        text: "Interface members are by default:",
        options: ["Private", "Protected", "Public", "Internal"],
        correct: 2,
        translate: "تكون صلاحيات الوصول لأعضاء الواجهة افتراضيًا:",
        explain: "جميع أعضاء الواجهات تكون 'public' بشكل تلقائي لتتمكن الكلاسات من رؤيتها وتطبيقها."
      },
      {
        id: 10,
        text: "Does C# support multiple inheritance between classes?",
        options: ["True", "False"],
        correct: 1,
        translate: "هل تدعم لغة C# الوراثة المتعددة بين الكلاسات؟",
        explain: "لا تدعم C# الوراثة من أكثر من كلاس أب واحد لمنع التعارض والمشاكل البنيوية."
      },
      {
        id: 11,
        text: "A class may:",
        options: ["Inherit from multiple classes", "Implement multiple interfaces", "Implement only one interface", "Inherit from 2 classes only"],
        correct: 1,
        translate: "الكلاس يمكنه أن:",
        explain: "يمكن للكلاس تطبيق عدد غير محدود من الواجهات (Multiple interfaces) لتعويض غياب الوراثة المتعددة."
      },
      {
        id: 12,
        text: "Multiple inheritance between classes is a feature of some OOP languages.",
        options: ["True", "False"],
        correct: 0,
        translate: "الوراثة المتعددة بين الكلاسات هي ميزة مدعومة في بعض لغات OOP الأخرى.",
        explain: "نعم، هناك لغات تدعم الوراثة المتعددة بين الكلاسات مثل لغة C++."
      },
      {
        id: 13,
        text: "Where must the inherited base class exist if the class inherits from a class and multiple interfaces?",
        options: ["at First", "at End", "Any place", "at bin"],
        correct: 0,
        translate: "أين يجب كتابة اسم كلاس الأب الموروث إذا كان الكلاس يرث كلاس وواجهات متعددة؟",
        explain: "يجب كتابة اسم كلاس الأب أولاً مباشرة بعد علامة (:)، ثم تتبعها أسماء الواجهات المفصولة بفاصلة."
      },
      {
        id: 14,
        text: "The method defined within an interface should be without implementation nor an access modifier.",
        options: ["True", "False"],
        correct: 0,
        translate: "الدالة المعرفة داخل الـ interface تكتب بدون أقواس التنفيذ وبدون تحديد access modifier.",
        explain: "صحيح؛ لا نضع صلاحيات وصول لأنها public تلقائيًا، ولا نضع كودًا تنفيذيًا بل تنتهي بفاصلة منقوطة."
      },
      {
        id: 15,
        text: "Polymorphism allows different objects from the same inheritance hierarchy to have ______ implementations.",
        options: ["multiple", "same", "single", "no"],
        correct: 0,
        translate: "تعدد الأشكال يسمح لكائنات مختلفة تتبع نفس شجرة الوراثة بامتلاك تنفيذات ___.",
        explain: "يسمح بامتلاك تنفيذات متعددة ومختلفة لنفس اسم الدالة بناءً على نوع الكائن الفعلي."
      },
      {
        id: 16,
        text: "Given: Animal a = new Cat(); (where Speak() is virtual in Animal but defined without override keyword in Cat). What does a.Speak() print?",
        options: ["Animal speaks", "Meow Meow", "Null", "Error"],
        correct: 0,
        translate: "ماذا يطبع استدعاء a.Speak() في هذه الحالة؟",
        explain: "بما أن كلاس Cat لم يستخدم الكلمة المفتاحية 'override'، فإن الدالة لم ترتبط برابط ديناميكي، وسيتم استدعاء دالة المؤشر (Animal)."
      },
      {
        id: 17,
        text: "Given: Animal a = new Cat(); (where Speak() is virtual in Animal and overridden in Cat). What does a.Speak() print?",
        options: ["Animal speaks", "Meow Meow", "Null", "Error"],
        correct: 1,
        translate: "ماذا يطبع استدعاء a.Speak() عند وجود الكلمة override؟",
        explain: "عند استخدام 'override'، يعمل تعدد الأشكال بشكل سليم ويتم التوجه لتنفيذ الدالة الخاصة بالكائن الفعلي وهو القطة (Meow Meow)."
      }
    ]
  },
  {
    id: 9,
    title: "Chapter 9 | UML Modeling & Relationships",
    questions: [
      {
        id: 1,
        text: "UML stands for:",
        options: ["Universal Machine Language", "Unified Modeling Language", "Unified Machine Logic", "User Modeling Language"],
        correct: 1,
        translate: "إلى ماذا يرمز الاختصار UML؟",
        explain: "يرمز إلى لغة النمذجة الموحدة (Unified Modeling Language) المُستخدمة لتصميم وتوثيق برمجيات OOP."
      },
      {
        id: 2,
        text: "Which of the following is NOT part of a standard UML class box?",
        options: ["Class name", "Attributes", "Methods", "Constructor body"],
        correct: 3,
        translate: "أي مما يلي لا يُعتبر جزءًا رئيسيًا من صندوق الكلاس في مخطط UML؟",
        explain: "مربع الكلاس يحتوي على ثلاثة أقسام: الاسم، والسمات، والدوال. لا يتم كتابة تفاصيل أو متن المشيد (Constructor body) داخله."
      },
      {
        id: 3,
        text: "In UML, which symbol represents a private member?",
        options: ["+", "-", "/", "#"],
        correct: 1,
        translate: "في مخطط UML، أي رمز يمثل العضو الخاص (private)؟",
        explain: "تُستخدم علامة الناقص '-' للدلالة على أن العضو خاص (private)."
      },
      {
        id: 4,
        text: "In UML, which symbol represents a protected member?",
        options: ["+", "-", "/", "#"],
        correct: 3,
        translate: "في مخطط UML، أي رمز يمثل العضو المحمي (protected)؟",
        explain: "تُستخدم علامة الهاشتاج '#' للدلالة على أن العضو محمي (protected)."
      },
      {
        id: 5,
        text: "Association represents:",
        options: ["is-a relationship", "whole-part relationship", "Objects interacting with each other", "inheritance only"],
        correct: 2,
        translate: "علاقة الارتباط (Association) تمثل:",
        explain: "تمثل علاقة عامة تعبر عن تفاعل الكائنات مع بعضها البعض واستخدام ميزاتها (مفهوم التشارك)."
      },
      {
        id: 6,
        text: "Multiplicity describes:",
        options: ["Object size", "Number of related objects", "Method visibility", "Memory usage"],
        correct: 1,
        translate: "تعددية العلاقات (Multiplicity) تصف:",
        explain: "تحدد عدد الكائنات التي يمكن أن تشترك وترتبط ببعضها في العلاقة البرمجية (مثل 1 إلى كثير)."
      },
      {
        id: 7,
        text: "Which multiplicity means 'zero or more' in UML?",
        options: ["0..*", "1..*", "0..1", "1"],
        correct: 0,
        translate: "أي قيم التعددية التالية تعني 'صفر أو أكثر'؟",
        explain: "الرمز '0..*' أو النجمة '*' بمفردها تعني إمكانية الارتباط بـ صفر أو عدد غير محدود من الكائنات."
      },
      {
        id: 8,
        text: "Aggregation represents:",
        options: ["Strong ownership", "Interface implementation", "Whole-part relationship (Weak)", "Inheritance"],
        correct: 2,
        translate: "علاقة التجميع (Aggregation) تمثل:",
        explain: "تمثل علاقة 'الكل والجزء' (Whole-part) ولكنها علاقة ضعيفة حيث لا يملك الكل تحكمًا كاملاً في عمر الأجزاء."
      },
      {
        id: 9,
        text: "In aggregation, the contained objects:",
        options: ["Depend completely on the whole", "Cannot exist independently", "Can exist independently", "Must inherit from the container"],
        correct: 2,
        translate: "في علاقة التجميع (Aggregation)، الكائنات المحتواة بالداخل:",
        explain: "تستطيع الكائنات الداخلية العيش والاستمرار في النظام حتى لو تم تدمير وحذف الكلاس الحاوي لها."
      },
      {
        id: 10,
        text: "Which UML symbol represents aggregation?",
        options: ["Filled diamond", "Open diamond", "Hollow triangle", "Dashed arrow"],
        correct: 1,
        translate: "أي الرموز التالية يمثل علاقة التجميع (Aggregation) في UML؟",
        explain: "تُمثل بمعين فارغ/مفتوح (Open diamond) يتصل بجهة الكلاس الحاوي للكل."
      },
      {
        id: 11,
        text: "Composition represents:",
        options: ["Weak relationship", "Simple interaction", "Strong whole-part relationship", "Interface realization"],
        correct: 2,
        translate: "علاقة التكوين (Composition) تمثل:",
        explain: "علاقة 'كل وجزء' قوية جدًا (Strong ownership) يكون فيها الجزء تابعًا كليًا للكل."
      },
      {
        id: 12,
        text: "In composition, if the whole object is destroyed:",
        options: ["Parts remain independent", "Parts are also destroyed", "Nothing happens", "Parts become interfaces"],
        correct: 1,
        translate: "في علاقة التكوين، إذا تم تدمير الكائن الأساسي (الكل):",
        explain: "بما أنها علاقة تلازمية قوية، فإن تدمير الكل يؤدي تلقائيًا إلى تدمير وحذف جميع الأجزاء التابعة له من الذاكرة."
      },
      {
        id: 13,
        text: "Which UML symbol represents composition?",
        options: ["Hollow triangle", "Dashed line", "Open diamond", "Filled diamond"],
        correct: 3,
        translate: "أي الرموز التالية يمثل علاقة التكوين (Composition) في UML؟",
        explain: "تُمثل بمعين ممتلئ/مظلل (Filled diamond) يتصل بجهة الكلاس الأساسي."
      },
      {
        id: 14,
        text: "Inheritance represents:",
        options: ["has-a relationship", "owns-a relationship", "is-a relationship", "interacts-with relationship"],
        correct: 2,
        translate: "الوراثة (Inheritance) تمثل علاقة من نوع:",
        explain: "الوراثة تعبر دائمًا عن علاقة 'هو عبارة عن' (is-a)، مثل: السيارة هي مركبة."
      }
    ]
  },
  {
    id: 10,
    title: "Chapter 10 | Enums & Structures",
    questions: [
      {
        id: 1,
        text: "An enumeration type in C# is defined using the keyword:",
        options: ["class", "struct", "enum", "object"],
        correct: 2,
        translate: "يتم تعريف نوع التعداد في لغة C# باستخدام الكلمة المفتاحية:",
        explain: "تُستخدم الكلمة المفتاحية 'enum' لإنشاء مجموعة من الثوابت الرقمية ذات الأسماء الواضحة."
      },
      {
        id: 2,
        text: "The named values inside an enum are called:",
        options: ["variables", "identifiers", "enumerators", "constants"],
        correct: 2,
        translate: "تُسمى القيم والمسميات المعرفة داخل الـ enum بـ:",
        explain: "القيم النصية المدرجة داخل التعداد تُسمى برمجياً بالمُعدِّدات (enumerators)."
      },
      {
        id: 3,
        text: "Is this code correct? -> Color c = Red;",
        options: ["True", "False"],
        correct: 1,
        translate: "هل كتابة هذا السطر صحيحة مباشرة؟",
        explain: "خطأ؛ للوصول لقيمة التعداد يجب تحديد اسم الـ enum أولاً، مثل: Color.Red."
      },
      {
        id: 4,
        text: "A structure in C# is defined using the keyword:",
        options: ["enum", "class", "define", "struct"],
        correct: 3,
        translate: "يتم تعريف البنية (Structure) باستخدام الكلمة المفتاحية:",
        explain: "تُستخدم الكلمة المفتاحية 'struct' لإنشاء أنواع بيانات مخصصة خفيفة الوزن."
      },
      {
        id: 5,
        text: "Structures are considered:",
        options: ["reference types", "value types", "abstract types", "pointer types"],
        correct: 1,
        translate: "تُعتبر الـ Structures في الذاكرة من أنواع:",
        explain: "الستركت (struct) هو نوع قيمة (Value type) يُخزن بشكل مباشر في المكان المعرف فيه وليس مرجعًا."
      },
      {
        id: 6,
        text: "Which of the following can a structure contain?",
        options: ["Fields only", "Methods only", "Data and related functionality", "Destructors only"],
        correct: 2,
        translate: "أي مما يلي يمكن للـ structure احتوائه؟",
        explain: "الستركت كائن متكامل يمكنه احتواء بيانات (Fields) ووظائف برمجية (Methods, Properties)."
      },
      {
        id: 7,
        text: "Point p1 = new Point(5, 12); Point p2 = p1; p2.X = 70; If Point is a struct, what is the value of p1.X?",
        options: ["5", "70", "12", "0"],
        correct: 0,
        translate: "إذا كانت Point عبارة عن struct، فما هي قيمة p1.X بعد التعديل؟",
        explain: "بما أنه Value type، فعند نسخ p1 إلى p2 يتم إنشاء نسخة مستقلة تماماً؛ لذا تعديل p2 لا يؤثر مطلقاً على قيمة p1.X وتظل 5."
      },
      {
        id: 8,
        text: "What happens during the assignment of two struct variables (p2 = p1)?",
        options: ["Reference is copied", "Address is copied", "Entire structure instance is copied", "Nothing is copied"],
        correct: 2,
        translate: "ماذا يحدث عند مساواة متغيرين من نوع struct؟",
        explain: "يتم نسخ كامل محتويات البنية وقيم الحقول بالكامل (Deep copy) إلى المتغير الجديد."
      },
      {
        id: 9,
        text: "A class-type variable stores:",
        options: ["The entire object itself", "Only integer values", "A reference to an object", "Enumerators"],
        correct: 2,
        translate: "يخزن المتغير الذي يتبع لكلاس (Class-type):",
        explain: "متغيرات الكلاس هي Reference types، فهي تخزن فقط عنوان أو مرجع (Reference) يشير لمكان الكائن الفعلي بالـ Heap."
      },
      {
        id: 10,
        text: "A structure-type variable stores:",
        options: ["Object reference only", "Structure instance itself", "Heap address only", "Method references"],
        correct: 1,
        translate: "يخزن المتغير الذي يتبع لبنية (Structure-type):",
        explain: "يخزن قيمة ومحتويات الـ struct نفسها بشكل مباشر ومحلي في موقع تعريف المتغير."
      },
      {
        id: 11,
        text: "Which memory area is primarily associated with structures (local variables)?",
        options: ["Heap", "Stack", "Data", "Text"],
        correct: 1,
        translate: "أي مناطق الذاكرة ترتبط بها الـ structures كمتغيرات محلية؟",
        explain: "المتغيرات المحلية من نوع سستركت تُخزن بالكامل داخل الـ Stack لسرعة تخصيصها وحذفها."
      },
      {
        id: 12,
        text: "Which of the following can contain a parameterized constructor?",
        options: ["Structure only", "Class only", "Both", "Neither"],
        correct: 2,
        translate: "أي مما يلي يمكنه احتواء مشيد يحتوي على معاملات (Parameterized Constructor)؟",
        explain: "كلاهما (الكلاس والستركت) يدعمان تماماً إنشاء مشيدات تحتوي على معاملات لتمرير القيم الأولية."
      },
      {
        id: 13,
        text: "Which of the following can contain a parameter-less constructor?",
        options: ["Structure only", "Class only", "Both", "Neither"],
        correct: 2,
        translate: "أي مما يلي يمكنه احتواء مشيد بدون معاملات (Parameter-less Constructor)؟",
        explain: "كلاهما؛ في النسخ الحديثة من C# يُسمح للـ struct أيضاً بامتلاك مشيد فارغ مخصص بدون معاملات."
      },
      {
        id: 14,
        text: "Structure cannot contain a destructor.",
        options: ["True", "False"],
        correct: 0,
        translate: "الـ Structure لا يمكنها احتواء دالة هدم (Destructor).",
        explain: "صحيح؛ الـ Destructors تُستخدم لإدارة وتنظيف الذاكرة العشوائية للكائنات في الـ Heap، والستركت لا يحتاج ذلك لأنه يدير نفسه في الـ Stack."
      },
      {
        id: 15,
        text: "Structures can inherit from another structure.",
        options: ["True", "False"],
        correct: 1,
        translate: "يمكن لـ structure أن ترث من structure أخرى.",
        explain: "خطأ؛ لا تدعم الـ structures الوراثة فيما بينها (تعتبر مختومة سياقياً)."
      },
      {
        id: 16,
        text: "All access modifiers (public, private, protected) are allowed inside a structure.",
        options: ["True", "False"],
        correct: 1,
        translate: "جميع صلاحيات الوصول مسموحة تماماً داخل الـ structure.",
        explain: "خطأ؛ الكلمة المفتاحية 'protected' غير مسموحة داخل الـ struct لأنها لا تدعم الوراثة من الأساس."
      },
      {
        id: 17,
        text: "Structures cannot contain:",
        options: ["Methods", "Constructors", "Virtual or abstract methods", "Properties"],
        correct: 2,
        translate: "الـ Structures لا يمكنها أن تحتوي على:",
        explain: "الدوال الافتراضية والمجردة (Virtual/Abstract) ممنوعة داخلها لعدم وجود وراثة لتعديلها."
      },
      {
        id: 18,
        text: "Two class-type variables may point to the exact same object.",
        options: ["True", "False"],
        correct: 0,
        translate: "يمكن لمتغيرين من نوع كلاس الإشارة والوصول لنفس الكائن الفعلي.",
        explain: "صحيح؛ لأن المتغيرات تخزن مراجع فقط، فمن الممكن أن يشير أكثر من مرجع لنفس عنوان الكائن في الـ Heap."
      },
      {
        id: 19,
        text: "Two value-type (struct) variables may have the same struct instance shared between them.",
        options: ["True", "False"],
        correct: 1,
        translate: "يمكن لمتغيرين من نوع struct مشاركة نفس النسخة الحية بدلاً من نسخها.",
        explain: "خطأ؛ الـ struct يُمثل قيمة مستقلة، عند إسناد متغير لآخر يتم نسخ البيانات ولا يتشاركان في نفس الكائن."
      }
    ]
  }
];