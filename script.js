let arr = [{
    name: "Jale2" ,
    url:"/songs/Jale 2.mp3",
    img:"/images/jale2.jfif"
},
{
    name: "Arjan Vailly Ne" ,
    url:"/songs/Arjan Vailly Ne.mp3",
    img:"/images/arjan.jpg"
},
{
    name: "Pehle Bhi Main" ,
    url:"/songs/Pehle Bhi Main.mp3",
    img:"/images/phly.jfif"
},
{
    name: "Jale2" ,
    url:"/songs/Jale 2.mp3",
    img:"/images/img.jfif"
}
]

var audio = new Audio();

var selectedsong = 0

let list = document.querySelector("#Songlist");
let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");
let songimage = document.querySelector("#left");

function mainfunction(){
    let clutter = "";
arr.forEach((elem,index)=>{
clutter += ` <div class="list" id=${index}>
                <img src=${elem.img} alt="image">
                <h3>${elem.name}</h3>
               
            </div>`
list.innerHTML = clutter;

audio.src = arr[selectedsong].url

songimage.style.backgroundImage = `url(${arr[selectedsong].img})`

}) 
}

mainfunction()

list.addEventListener("click",(detail)=>{
selectedsong = detail.target.id;
mainfunction()
play.innerHTML = `<i class="ri-pause-line"></i>`;
flag = 1;
audio.play();
})


let flag = 0
play.addEventListener("click",()=>{
    if (flag==0){
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        mainfunction();
        audio.play()
        flag = 1;
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        mainfunction();
        audio.pause()
        flag = 0;
    }
    
})

forward.addEventListener("click",()=>{
    if(selectedsong < arr.length-1){
        selectedsong++;
        mainfunction();
        audio.play()
    }
    else{
        forward.style.opacity = 0.4;
    }
})



backward.addEventListener("click",()=>{
    if(selectedsong > 0){
        selectedsong--;
        mainfunction();
        audio.play()
    }
    else{
        backward.style.opacity = 0.4;
    }
})