// === MENU TOGGLE ===
const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function toggleMenu() {
  navMenu.classList.toggle("hide");
  const isHidden = navMenu.classList.contains("hide");
  menuButton.setAttribute("aria-expanded", !isHidden);
}

menuButton.addEventListener("click", toggleMenu);

// === HANDLE RESIZE ===
function handleResize() {
  if (window.innerWidth >= 1000) {
    navMenu.classList.remove("hide");
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    navMenu.classList.add("hide");
    menuButton.setAttribute("aria-expanded", "false");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// === IMAGE MODAL VIEWER ===
const gallery = document.querySelector('.gallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
  const clickedImg = event.target.closest('img');
  if (!clickedImg) return;

  const imgSrc = clickedImg.getAttribute('src');
  const imgAlt = clickedImg.getAttribute('alt');
  const baseName = imgSrc.split('-')[0];
  const fullImgSrc = `${baseName}-full.jpeg`;

  modalImg.src = fullImgSrc;
  modalImg.alt = imgAlt;
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
