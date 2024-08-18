
const togglebtn = document.querySelector('.toggle_btn')
const togglbtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

togglebtn.onclick = function ()
{
    dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

togglbtnIcon.classList = isOpen
? 'fa fa-close'
: 'fa fa-bars'
}

 function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");
    if(menuBth.className === "nav-menu"){
        menuBth.className += "responsive";

    }
    else{
        menuBth.className = "nav-menu";
    }
 }
// -----------------dark mode------------/
const body=document.querySelector("body"),
toggleSwitch=document.getElementById("toggleSwitch");
toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
})
// Typing Effect
var typingEffect=new Typed(".typedText",{
    strings:["Web Developer","Web Designer","Front-End Developer","Back-End Developer","Logo Designer",""],
  loop:true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:2000

})

// Scroll animation

const sr=ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,
});
sr.reveal(".featured-name",{delay:100});
sr.reveal(".text-info",{delay:100});
sr.reveal(".text-btn",{delay:100});
sr.reveal(".social",{delay:120});
sr.reveal(".featured-image",{delay:120});

sr.reveal(".project-box",{interval:100});
sr.reveal(".top-header",{delay:150});


const srleft=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2500,
    reset:true,
})
srleft.reveal(".aboutinfo",{delay:100});
srleft.reveal(".contact-info",{delay:100});

const srRight=ScrollReveal({
    origin:"right",
    distance:"80px",
    duration:2600,
    reset:true,
})
srRight.reveal(".form-control",{delay:150});
srRight.reveal(".skill",{delay:130});
srRight.reveal(".skill-box",{delay:100});
srRight.reveal(".about-me",{delay:110});

const srtop=ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2200,
    reset:true,
})

srtop.reveal("f",{delay:2200});
