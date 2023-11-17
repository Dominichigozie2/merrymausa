const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".home");
const borderRemove = document.querySelector(".nav-container");
const firstLogo = document.querySelector(".firstLogo");
const secondLogo = document.querySelector(".second-logo");
const navLi = document.querySelectorAll(".list-group li a");
const sidenav = document.querySelectorAll(".side-group");

const sectionOneOption = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("nav-scroll");
            borderRemove.classList.add("nav-border-none")
            firstLogo.style.display="none";
            secondLogo.style.display="initial";
                navLi.forEach(function(item) {
                item.classList.add("color");

            });

        }else{
            nav.classList.remove("nav-scroll");
            borderRemove.classList.remove("nav-border-none")
            firstLogo.style.display="initial"
            secondLogo.style.display="none";
            navLi.forEach(function(item) {
                item.classList.remove("color");
            });

        }
    });
}, sectionOneOption);
 
sectionOneObserver.observe(sectionOne)


const sidebar = document.querySelector(".side-group");
const bar = document.querySelector(".bar i");

bar.addEventListener("click", ()=>{
    sidebar.classList.toggle("slide");
    bar.classList.toggle("fa-times")
})





// the nav animations

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".list-group li a")
let sideLinks = document.querySelectorAll(".side-group li a")

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(lin =>{
                // console.log(lin);
                lin.classList.remove("active");
                document.querySelector(".list-group li a[href*=" + id + "]").classList.add("active");
            })
            sideLinks.forEach(side =>{
                side.classList.remove("active");
                document.querySelector(".side-group li a[href*=" + id + "]").classList.add("active");
            })
        }
    });
}






// the image modal contents
const eventCards = document.querySelectorAll('.event-btn');

eventCards.forEach(card => {
  card.addEventListener('click', () => {
    const clickedImage = document.querySelector('.event-image img');
    const imageUrl = clickedImage.src;
    const imageAlt = clickedImage.alt;
  

    

    // Create a modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Dynamically generate modal content
    const modalContent = `
      <div class="modal-content">
        <img src="${imageUrl}" alt="${imageAlt}" class="modal-image">
        <div class="modal-content">
            <h1 class="modalContent"></h1>
        </div>
      </div>
    `;
    modal.innerHTML = modalContent;

    // Append the modal to the body
    document.body.appendChild(modal);

    // Add click event listener to close the modal
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});








// the image modal contents
const galleryCards = document.querySelectorAll('.pictures');

galleryCards.forEach(card => {
  card.addEventListener('click', () => {
    const clickedImage = card.querySelector('.pictures img');
    const imageUrl = clickedImage.src;
    const imageAlt = clickedImage.alt;

    

    // Create a modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Dynamically generate modal content
    const modalContent = `
      <div class="modal-content">
        <img src="${imageUrl}" alt="${imageAlt}" class="modal-image">
        <div class="modal-content">
            <h1></h1>
        </div>
      </div>
    `;
    modal.innerHTML = modalContent;

    // Append the modal to the body
    document.body.appendChild(modal);

    // Add click event listener to close the modal
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});

