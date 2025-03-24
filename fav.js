function displaySongs(response){
    console.log(response.data)
    
    let musicTitleElement=document.querySelector("#music-title");
    let musicTitle=response.data.items[1].snippet.title
    musicTitleElement.innerHTML=musicTitle;
    let videoElement=document.querySelector("#music-videos")
    let videoID=response.data.items[1].snippet.resourceId.videoId
     videoElement.innerHTML =
 `<iframe width="560" height="315" 
    src= "https://www.youtube.com/embed/${videoID}"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>`;
}

function displayPlayList(){
let apiKey = "AIzaSyD3LHry4BWoKZqBVT_TrjYdDF-iQbOAscI";
let apiUrl=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLJakPDSZzpUncHrwcii5Pj8AwUfvSDktR&key=${apiKey}`
axios.get(apiUrl).then(displaySongs)
}
let myButton=document.querySelector("#buttonPlayList");
myButton.addEventListener("click",displayPlayList);