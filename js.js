function spi(){
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach(heading => {
    const utterance = new SpeechSynthesisUtterance(heading.textContent);
    speechSynthesis.speak(utterance);
  });
}

function change(){
  return document.getElementById("t1").innerHTML="Learn about the developer"
}

function Return(){
  return document.getElementById("t1").innerHTML="HOME PAGE"
}

function replacing(){
  return document.getElementById("ti2").innerHTML = "Learn about our services"
}

function ThePrevious(){
  return document.getElementById("ti2").innerHTML="services"
}

function changing(){
  return document.getElementById("ti3").innerHTML="Learn all our projects"
}

function ree(){
  return document.getElementById("ti3").innerHTML="Projects"
}

document.addEventListener("DOMContentLoaded", () => {
      // 1. كود النسخ (كما هو)
    const navMobile = document.getElementById("navMobile");
    const buttonsContainer = document.getElementById("hnv").cloneNode(true);

    if (navMobile && buttonsContainer) {
        navMobile.appendChild(buttonsContainer);
    }

    // 2. تفعيل نظام التبويبات (التعديل هنا ليعمل في الجهتين)
    
    // دالة لتنظيف الكلاسات من جميع الأزرار (علوية وسفلية)
    function clearActive() {
        document.querySelectorAll(".nvb").forEach(btn => btn.classList.remove("button-active"));
    }

    // --- زر الصفحة الرئيسية ---
    document.querySelectorAll("#hp1").forEach(btn => {
        btn.addEventListener("click", function() {
            document.getElementById("hp").style.display = "flex";
            document.getElementById("srv").style.display = "none";
            document.getElementById("pro").style.display = "none";
            document.getElementById("con").style.display = "none";
            
            clearActive(); // تنظيف الكل
            document.querySelectorAll("#hp1").forEach(b => b.classList.add("button-active")); // تفعيل الزرين معاً
        });
    });

    // --- زر الخدمات ---
    document.querySelectorAll("#srv1").forEach(btn => {
        btn.addEventListener("click", function() {
            document.getElementById("srv").style.display = "flex";
            document.getElementById("hp").style.display = "none";
            document.getElementById("pro").style.display = "none";
            document.getElementById("con").style.display = "none";
            
            clearActive();
            document.querySelectorAll("#srv1").forEach(b => b.classList.add("button-active"));
        });
    });

    // --- زر المشاريع ---
    document.querySelectorAll("#pro1").forEach(btn => {
        btn.addEventListener("click", function() {
            document.getElementById("pro").style.display = "flex";
            document.getElementById("hp").style.display = "none";
            document.getElementById("srv").style.display = "none";
            document.getElementById("con").style.display = "none";
            
            clearActive();
            document.querySelectorAll("#pro1").forEach(b => b.classList.add("button-active"));
        });
    });

    // --- زر الاتصال ---
    document.querySelectorAll("#con01").forEach(btn => {
        btn.addEventListener("click", function() {
            document.getElementById("con").style.display = "flex";
            document.getElementById("hp").style.display = "none";
            document.getElementById("srv").style.display = "none";
            document.getElementById("pro").style.display = "none";
            
            clearActive();
            document.querySelectorAll("#con01").forEach(b => b.classList.add("button-active"));
        });
    });
});
