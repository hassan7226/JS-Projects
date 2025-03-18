const endDate = "30 february 2025 02:20:00 PM";

let results=document.querySelectorAll('input');
function clock(){
    const end= new Date(endDate);
    const now =new Date();
    let diff=(end-now)/1000;

    console.log(diff);
    if(diff<0) return;

    results[0].value=Math.floor(diff/3600/24);
    results[1].value=Math.floor(diff/3600)%24;
    results[2].value=Math.floor((diff/60)%60);
    results[3].value=Math.floor(diff)%60;

}

setInterval( ()=>{
clock();

},1000)