
 // temporary hack to control for MDL tab-panel issue on page load
 // fix this bug!
document.addEventListener("DOMContentLoaded", setTimeout(function () {
  const hiddenElems = document.querySelectorAll(".hidden");
  for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].classList.remove("hidden");
  }
}, 1000));


function goToContact() {
  const activeElements = document.querySelectorAll('.is-active');
  const contactElements =
  document.querySelectorAll('.contact');
  for (let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.remove("is-active");
    contactElements[i].classList.add("is-active");
  }
}

var contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", goToContact);
