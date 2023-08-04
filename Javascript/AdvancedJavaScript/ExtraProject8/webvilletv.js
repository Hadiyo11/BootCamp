let position = 0;//keep track of which video we are playing
let playlist; //hold video playlist array
let video; //hold a ref to the video element

window.onload = function (){
    playlist = ["video/preroll.mp4",
"video/areyoupopular.mp4",
"video/destinationearth.mp4"
];

video = document.getElementById("video");
video.addEventListener('ended', nextVideo, false)//nextVideo is function called when the event happens
//add eventlistener for the video ended event
video.src = playlist[position];
video.load();
video.play();
}

function nextVideo(){
    position++;
    if(position>=playlist.length){
        position=0;
//if we hit the end of the list, we loop around by setting position to 0
    }
    video.src = playlist[position];//set the source of the player to thenext video
    video.load();
    video.play();
}