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
        //تفعيل زر المشاريع في قسم الصفحة الرئيسية
        const mb = document.getElementById("mb")
        mb.addEventListener("click", function(){
                      document.getElementById("pro").style.display = "flex";
            document.getElementById("hp").style.display = "none";
            document.getElementById("srv").style.display = "none";
            document.getElementById("con").style.display = "none";
            //اضافة خاصية الزر المفعل اليه
clearActive();
            document.querySelectorAll("#pro1").forEach(b => b.classList.add("button-active"));            
        });
    });
});

// PWA Install Prompt
let deferredPrompt = null;

function activateSidebarMode() {
  var nav = document.getElementById('navMobile');
  if (!nav || nav.classList.contains('nav-sidebar')) return;
  var ul = nav.querySelector('ul.mqa');
  if (ul && !document.getElementById('installBtn')) {
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.id = 'installBtn';
    btn.className = 'nvb';
    btn.textContent = 'Install App';
    btn.setAttribute('aria-label', 'Install Fouad Portfolio');
    li.appendChild(btn);
    ul.appendChild(li);
    btn.addEventListener('click', function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
        deactivateSidebarMode();
      });
    });
  }
  nav.classList.add('nav-sidebar');
  document.body.classList.add('sidebar-active');
}

function deactivateSidebarMode() {
  var nav = document.getElementById('navMobile');
  if (nav) nav.classList.remove('nav-sidebar');
  document.body.classList.remove('sidebar-active');
  var btn = document.getElementById('installBtn');
  if (btn) {
    var li = btn.closest('li');
    if (li) li.remove();
    else btn.remove();
  }
}

window.addEventListener('beforeinstallprompt', function (e) {
  console.log('beforeinstallprompt fired!');
  e.preventDefault();
  deferredPrompt = e;

  if (window.innerWidth <= 768) {
    activateSidebarMode();
  } else {
    setTimeout(function () {
      if (!deferredPrompt) return;
      var userWantsToInstall = confirm(
        "Install Fouad Portfolio\n\n" +
        "This app can be installed on your device for quick access and offline use.\n\n" +
        "Would you like to install it now?"
      );
      if (userWantsToInstall) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choiceResult) {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt = null;
        });
      } else {
        deferredPrompt = null;
      }
    }, 3000);
  }
});

window.addEventListener('appinstalled', function () {
  console.log('Fouad Portfolio was installed!');
  deferredPrompt = null;
  deactivateSidebarMode();
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768 && deferredPrompt) {
    deactivateSidebarMode();
  }
});
