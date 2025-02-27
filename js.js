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
    return document.getElementById("ti2").innerHTML="Learn about our services"
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