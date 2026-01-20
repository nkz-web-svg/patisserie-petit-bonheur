// **********************************
//              common
// **********************************

const targets = document.querySelectorAll(".fade-in");

function onScroll() {
    targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            target.classList.add("show");
        }
    });
}

window.addEventListener("scroll", onScroll);
onScroll();


window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar.fixed-top");
  const pageMenu = document.querySelector(".page-menu.fixed-top");

  let total = 0;

  if (navbar) {
    total += navbar.offsetHeight;
  }

  if (pageMenu) {
    total += pageMenu.offsetHeight;
  }

  document.documentElement.style.setProperty(
    "--fixed-total-height",
    total + "px"
  );
});






// ***********************************
//             モーダル画像拡大
// ***********************************

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".card-img-top");

if (modal && modalImg && images.length > 0) {
    
    images.forEach(img => {
        img.addEventListener("click", e=> {
            e.stopPropagation();
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
