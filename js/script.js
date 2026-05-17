window.addEventListener("load",()=>{

setTimeout(()=>{
document.getElementById("loader").style.opacity="0";

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},500);

},1500);

});

const text = "Built in silence. Proven through results.";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

function toggleMenu(){

const menu=document.getElementById("mobileMenu");

menu.style.display=menu.style.display==="block"
? "none"
: "block";

}

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light");

themeIcon.innerHTML = "☀️";

}else{

themeIcon.innerHTML = "🌙";

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeIcon.innerHTML = "☀️";

localStorage.setItem("theme","light");

}else{

themeIcon.innerHTML = "🌙";

localStorage.setItem("theme","dark");

}

});

tsParticles.load("tsparticles",{

particles:{

number:{
value:50
},

color:{
value:"#3b82f6"
},

links:{
enable:true,
color:"#3b82f6",
opacity:0.3
},

move:{
enable:true,
speed:1
},

size:{
value:2
},

opacity:{
value:0.5
}

},

interactivity:{

events:{
onHover:{
enable:true,
mode:"repulse"
}
},

modes:{
repulse:{
distance:100
}
}

},

background:{
color:"transparent"
}

});