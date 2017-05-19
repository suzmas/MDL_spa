
 // temporary hack to control for MDL tab-panel issue on page load
 // fix this bug!
document.addEventListener("DOMContentLoaded", timerOut);

function timerOut() {
  setTimeout(showHidden, 1000);
}

function showHidden() {
  const hiddenElems = document.querySelectorAll(".hidden"); for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].classList.remove("hidden");
  }
}

function goToContact() {
  const activeElements = document.querySelectorAll('.is-active');
  const contactElements =
  document.querySelectorAll('.contact');
  for (let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.remove("is-active");
    contactElements[i].classList.add("is-active");
  }
}

function triggerFBEvent() {
  FB.AppEvents.logEvent("sentFriendRequeset");
}

var contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", goToContact);
