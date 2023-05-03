const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function hideLinks() {
  const screenWidth = window.innerWidth;
  const links = document.querySelectorAll('nav--element');

  if (screenWidth < 786 && links.length > 1) {
    for (let i = 0; i < links.length - 1; i++) {
      links[i].style.display = 'none';
    }
  } else {
    for (let i = 0; i < links.length; i++) {
      links[i].style.display = 'initial';
    }
  }
}

hideLinks();

window.addEventListener('resize', hideLinks);

const privacyNotice = document.getElementById("privacyNotice");
const privacyNoticeButton = document.getElementById("privacyNoticeButton");

privacyNoticeButton.addEventListener("click", () => {
  privacyNotice.classList.add("privacy-notice--hidden");
});