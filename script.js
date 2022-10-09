// import data from './themes.js';

// (async () => {
//     const result = await fetch('./themes.js');
//     const json = await result.json();
//     console.log(json);
// })()
window.onload = init;




function init(){
    const bt = document.getElementById("bt-hit");
    console.log(bt);
    bt.addEventListener('click', () => {
        const n = Math.floor(Math.random()*data.themes.length)
        document.getElementById("theme").innerHTML = data.themes[n]

    });

    function hit(){
        console.log("hit");
    }
}