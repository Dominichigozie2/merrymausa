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
                console.log(lin);
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

