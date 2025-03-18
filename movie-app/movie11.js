const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 const moiveBox = document.querySelector("#movie-box");
 
 const getmovie= async (url) =>{
    const data = await fetch(url);
    const response = await data.json();
    //console.log(response);
    showMovies(response);
 }
 getmovie(APIURL);

 const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath =  IMGPATH + result.poster_path;
            // const box = `
            // <div class="box">
            //     <img src="${IMGPATH+result}" alt="" />
            //     <div class="overlay">
            //         <h2>Overview:</h2>
            //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
            //     </div>
            // </div>
            // `
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            moiveBox.appendChild(box)
        }
    ) 
}

 document.querySelector("#search").addEventListener("keyup", function(event){

    if(event.target.value != ""){
        getmovie(SEARCHAPI+event.target.value);
    }
    else{
        getmovie(APIURL)
    }
})














