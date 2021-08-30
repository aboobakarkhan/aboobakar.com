let previous = Document.queryselector('#pre');
let play = Document.queryselector('#play');
let next = Document.queryselector('#next');
let title  = Document.queryselector('#title');
let recent_volume = Document.queryselector('#volume');
let volume_show = Document.queryselector('#volume_show');
let slider = Document.queryselector('#duration_slider');
let show_duration = Document.queryselector('#show_duration');
let track_image = Document.queryselector('#track_image');
let auto_play = Document.queryselector('#auto');
let present = Document.queryselector('#present');
let total = Document.queryselector('#total');
let artist = Document.queryselector('#artist');

let timer;
let autoplay=0;

let index_no=0;
let playing_song=false;

// create a audio Element
let track=document.createElement('audio');

// all song list
let all_song =[
    {
        name:"first song",
        path :"music /music1.mp3",
        Img :"images/image1.png",
        singer :"first singer",
        },
        {
            name:"second song",
            path :"music /music2.mp3",
            Img :"images/image2.png",
            singer :"second singer",
            }, 
            {
            name:"third song",
            path :"music /music3.mp3",
            Img :"images/image3.png",
            singer :"third singer",
            },
            {
                name:"fourth song",
                path :"music/music4.mp3",
                Img :"images/image4.png",
                singer :"fourth singer",
                },
                {
                    name:"fifth song",
                    path :"music/music5.mp3",
                    Img :"images/image5.png",
                    singer :"fifth singer",
                    },
                
];
// all function
function load_track(index_no){
   track.src=all_song[index_no].path;
   title.innerhtml = all_song[index_no].name;
   track_image.src = ALL_song[index_no].img;
   artist.innerhtml = ALL_song[index_no].singer;
   track.load();
   total.innerhtml =ALL_song.length;
   ProgressEvent.innerhtml = index_no +1;
}
load_track[index_no];
// checking the song is playing or not
function justplay(){
if(playing_song==false){
playing_song();

}else{
    pausesong();
}
}
// playsong
function playsong(){
track.play();
playing_song =true;
play.innerhtml ='<i class="fa fa-pause"></i>';
}
// pause song
function pausesong(){
track.pause();
playing_song=false;
play.innerhtml='<i class="fa fa-play"></i>';

}
function next_song(){
    if(index_no < all_song.length - 1){
index_no +=1;
load_track(index_no);
playsong();
    }else{
        index_no=0;
        load_track(index_no);
        playsong();
    }
}
// previous song
function previous_song(){
if (index_no) {
    index_no-=1;
    load_track (index_no);
    playsong();
}else{
    
        index_no=0;
        load_track(index_no);
        playsong();
}



}
