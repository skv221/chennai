function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    var reveals_2 = document.querySelectorAll(".reveal-2");
  
    for (var i = 0; i < reveals_2.length; i++) {
      var windowWidth = window.innerHeight;
      var elementTop = reveals_2[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowWidth - elementVisible) {
        reveals_2[i].classList.add("active");
      } else {
        reveals_2[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);