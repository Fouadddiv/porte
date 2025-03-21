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
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    // نسخ عناصر الهيدر بدلاً من نقلها
    const welcomeText1 = document.getElementById("s1").cloneNode(true);
    const logoImage = document.getElementById("logo").cloneNode(true);
    const welcomeText2 = document.getElementById("s2").cloneNode(true);
    const homeButton = document.getElementById("hp12").cloneNode(true);
    const servicesButton = document.getElementById("srv12").cloneNode(true);
    const projectsButton = document.getElementById("pro12").cloneNode(true);
    const contactsButton = document.getElementById("con13").cloneNode(true);

    // إضافة النسخ إلى القائمة الجانبية
    sidebar.append(welcomeText1, logoImage, welcomeText2, homeButton, servicesButton, projectsButton, contactsButton);

    // فتح وإغلاق القائمة عند الضغط على الزر
    menuBtn.addEventListener("click", function () {
      sidebar.style.marginLeft = "0%";
        sidebar.style.marginRight = "0%";
        menuBtn.textContent = "Close Navigation Menu";
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && event.target !== menuBtn) {
            sidebar.style.marginLeft = "-100%"; // إغلاق القائمة
            menuBtn.textContent = "Navigation Menu";
        }
    });
});