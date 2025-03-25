function displaySongs(response){
  console.log(response)
    let playList=document.querySelector("#playLists")
    playList.innerHTML="";
    let items=response.data.items;
    for(let i=0; i<5; i++){
    let musicTitle=items[i].snippet.title
    let videoID=items[i].snippet.resourceId.videoId
    let videoUrl=`https://www.youtube.com/watch?v=${videoID}`;
    let thumbNail=items[i].snippet.thumbnails.standard.url
        playList.innerHTML +=
      `<div class="playLists">
        <div class="music-title">${musicTitle}
        </div>
        <div class="musicvideo-link" id="musicvideo-link">
          <a href="${videoUrl}"><img src="${thumbNail}" width=100px/>"clickable"</a>
        </div>
      </div>`;
  }
    }

function displayPlayList(){
let apiKey = "AIzaSyD3LHry4BWoKZqBVT_TrjYdDF-iQbOAscI";
let apiUrl=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLJakPDSZzpUncHrwcii5Pj8AwUfvSDktR&key=${apiKey}`
axios.get(apiUrl).then(displaySongs)
}
let myButton=document.querySelector("#buttonPlayList");
myButton.addEventListener("click",displayPlayList);