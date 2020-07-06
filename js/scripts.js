var writeusLink = document.querySelector(".write-us-button");
var writeusPopup = document.querySelector(".write-us");
var writeusClose = writeusPopup.querySelector(".write-close");
var writeusForm = writeusPopup.querySelector(".write-form");
var writeusName = writeusPopup.querySelector(".input-your-name");
var writeusMail = writeusPopup.querySelector(".input-your-mail");
var writeusText = writeusPopup.querySelector(".input-your-text");

writeusLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.add("modal-show");
    writeusName.focus();
});

writeusClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.remove("modal-show");
    writeusPopup.classList.remove("write-us-error");
});

writeusForm.addEventListener("submit", function (evt) {
    if (!writeusName.value || !writeusMail.value || !writeusText.value) {
    evt.preventDefault();
    writeusPopup.classList.add("write-us-error");
}});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeusPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writeusPopup.classList.remove("modal-show");
        writeusPopup.classList.remove("write-us-error");
      }
    }
  });

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("main-products-content");
  var dots = document.getElementsByClassName("slider-control");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" current", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " current";
}



var slideAdvantagesIndex = 1;
showAdvantagesSlides(slideAdvantagesIndex);

function plusAdvantagesSlides(n) {
  showAdvantagesSlides(slideAdvantagesIndex += n);
}

function currentAdvantagesSlide(n) {
  showAdvantagesSlides(slideAdvantagesIndex = n);
}

function showAdvantagesSlides(n) {
  var iAdvantages;
  var Advantagesslides = document.getElementsByClassName("advantages-card");
  var Advantagesdots = document.getElementsByClassName("advantages-link");
  if (n > Advantagesslides.length) {
    slideAdvantagesIndex = 1
  }
  if (n < 1) {
    slideAdvantagesIndex = Advantagesslides.length
  }
  for (i = 0; i < Advantagesslides.length; i++) {
    Advantagesslides[iAdvantages].style.display = "none";
  }
  for (i = 0; i < Advantagesdots.length; i++) {
    Advantagesdots[iAdvantages].className = Advantagesdots[iAdvantages].className.replace(" advantages-choosen", "");
  }
  Advantagesslides[slideAdvantagesIndex - 1].style.display = "block";
  Advantagesdots[slideAdvantagesIndex - 1].className += " advantages-choosen";
}