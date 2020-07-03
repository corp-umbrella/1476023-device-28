var writeusLink = document.querySelector(".write-us-button");
var writeusPopup = document.querySelector(".write-us");
var writeusClose = writeusPopup.querySelector(".write-close");
var writeusForm = writeusPopup.querySelector(".write-form");
var writeusName = writeusPopup.querySelector(".input-your-name");
var writeusMail = writeusPopup.querySelector(".input-your-mail");
var writeusText = writeusPopup.querySelector(".input-your-text");

writeusLink.addEventListener("click", function () {
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