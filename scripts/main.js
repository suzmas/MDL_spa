

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
