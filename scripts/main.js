// control for MDL formatting issue on page load
window.addEventListener("load", showHidden);

function showHidden() {
  const hiddenElems = document.querySelectorAll(".hidden");
  for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].classList.remove("hidden");
  }
}

// Force MDL to activate "contact" navigation tab on mail icon click
function goToContact() {
  const activeElements = document.querySelectorAll('.is-active');
  const contactElements = document.querySelectorAll('.contact');
  for (let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.remove("is-active");
    contactElements[i].classList.add("is-active");
  }
}

var contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", goToContact);
