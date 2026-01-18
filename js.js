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
    // 1. العثور على حاوية الأزرار الأصلية وشريط التنقل السفلي
    const navMobile = document.getElementById("navMobile");
    const buttonsContainer = document.getElementById("hnv").cloneNode(true);

    // 2. إضافة الأزرار المنسوخة (بكامل كلاساتها ومعرفاتها) إلى شريط التنقل السفلي
    if (navMobile && buttonsContainer) {
        navMobile.appendChild(buttonsContainer);
    }
    //اضافة نظام التبويبات
    const HomeButoon =document.getElementById("hp1")
    const servicesButoon =document.getElementById("srv1")
    const projectsButoon =document.getElementById("pro1")
    const contacteButoon =document.getElementById("con01")
  //كتابة الدوال الأربعة
  HomeButoon.addEventListener("click", function(){
    document.getElementById("hp").style.display="flex";
    document.getElementById("srv").style.display="none";
    document.getElementById("pro").style.display="none";
    document.getElementById("con").style.display="none";
HomeButoon.classList.add("button-active")
servicesButoon.classList.remove("button-active")
projectsButoon.classList.remove("button-active")
contacteButoon.classList.remove("button-active")
  });
    servicesButoon.addEventListener("click", function(){
      document.getElementById("srv").style.display="flex";
      document.getElementById("hp").style.display="none";
    document.getElementById("pro").style.display="none";
    document.getElementById("con").style.display="none";
    //اضافة الكلاس لزر الخدمات وحذفه من باقي الأزرار
    servicesButoon.classList.add("button-active");
    HomeButoon.classList.remove("button-active");
    projectsButoon.classList.remove("button-active");
    contacteButoon.classList.remove("button-active");
    });
    //زر المشاريع:
    projectsButoon.addEventListener("click", function(){
      document.getElementById("srv").style.display="none";
      document.getElementById("hp").style.display="none";
    document.getElementById("pro").style.display="flex";
    document.getElementById("con").style.display="none";
    //اضافة الكلاس لزر المشاريع وازالته من باقي الأزرار
    projectsButoon.classList.add("button-active");
    HomeButoon.classList.remove("button-active");
    servicesButoon.classList.remove("button-active");
    contacteButoon.classList.remove("button-active");
    });
    contacteButoon.addEventListener("click", function(){
      //زر الاتصال
      document.getElementById("srv").style.display="none";
      document.getElementById("hp").style.display="none";
    document.getElementById("pro").style.display="none";
    document.getElementById("con").style.display="flex";
    //اضافة الكلاس لزر الاتصال وحذفه من باقي الأزرار
    contacteButoon.classList.add("button-active");
    HomeButoon.classList.remove("button-active");
    servicesButoon.classList.remove("button-active");
    projectsButoon.classList.remove("button-active");
    })
})