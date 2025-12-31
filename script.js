console.log("welcome to black pink studio")


let songIndex=0;
let audioElement  = new Audio('songs/coursty call.mp3');
let masterPlay=document.getElementById("masterplay");
let range =document.getElementById('range');
let songitem=Array.from(document.getElementsByClassName('songitem'));


let songs = [
    {songname:"coursty call",filePath:"songs/coursty call.mp3" , coverPath:"covers/1.jpg"},
    {songname:"SKECHERS", filePath:"songs/SKECHERS.mp3" , coverPath:"covers/2.jpg"},
    {songname:"shivam", filePath:"songs/Shivam.mp3" , coverPath:"covers/3.jpg"},
    {songname:"SUN MERE", filePath:"songs/SUN MERE.mp3" , coverPath:"covers/4.jpg"},
    {songname:"joker", filePath:"songs/joker.mp3" , coverPath:"covers/5.jpg"},
    {songname:"GENDA PHOOL", filePath:"songs/GENDA PHOOL.mp3" , coverPath:"covers/6.jpg"},
    {songname:"THE BHOOT", filePath:"songs/THE BHOOT.mp3" , coverPath:"covers/7.jpg"},
    {songname:"SANAM_RE_REMIX", filePath:"songs/SANAM_RE_REMIX.mp3" , coverPath:"covers/8.jpg"},

]

songitem.forEach((element,i)=>{
    element.getElementsByTagName = ("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    } 
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    range.value=progress;
})


range.addEventListener('change',()=>{
    console.log('change')
    audioElement.currentTime = range.value * audioElement.duration/100;
})
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songplayer')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songplayer")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex =0;

    }
    else{
        songIndex +=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    
})


document.getElementById('previos').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex +=0;

    }
    else{
        songIndex -=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    
})