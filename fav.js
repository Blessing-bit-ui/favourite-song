function displaySongs(response){
    console.log(response.data)
    
    let musicTitleElement=document.querySelector("#music-title");
    let musicTitle=response.data.items[1].snippet.title
    musicTitleElement.innerHTML=musicTitle;
    let videoElement=document.querySelector("#musicvideo-link")
    let videoID=response.data.items[1].snippet.resourceId.videoId
    let videoUrl=`https://www.youtube.com/watch?v=${videoID}`
    let thumbNail=response.data.items[1].snippet.thumbnails.standard.url
    videoElement.innerHTML = 
    `<a href=${videoUrl}> <img src="${thumbNail}"/></a>`;
}

function displayPlayList(){
let apiKey = "AIzaSyD3LHry4BWoKZqBVT_TrjYdDF-iQbOAscI";
let apiUrl=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLJakPDSZzpUncHrwcii5Pj8AwUfvSDktR&key=${apiKey}`
axios.get(apiUrl).then(displaySongs)
}
let myButton=document.querySelector("#buttonPlayList");
myButton.addEventListener("click",displayPlayList);