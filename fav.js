/*function displaySongs(response){
    console.log(response.data)

}

function displayPlayList(){
    console.log("Making API request...");
let apiKey = "AIzaSyD3LHry4BWoKZqBVT_TrjYdDF-iQbOAscI";
let apiUrl=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLJakPDSZzpUncHrwcii5Pj8AwUfvSDktR&key=${apiKey}`
axios.get(apiUrl).then(displaySongs)
}*/


function PlayList(){
    alert("hell")

}
let myButton=document.querySelector("#buttonPlayList");
myButton.addEventListener("click",PlayList);