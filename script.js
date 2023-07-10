let hexelem = document.getElementById("hexavalues");
let hexavalue = "#";
let body = document.getElementById("body");
let btn = document.getElementById('button');
 btn.addEventListener('click', changeBG);
// let adddiv = document.createElement('div');
let hexarr = ['A','B','C', 'D', 'E', 'F' ,1,2,3,4,5,6,7,8,9,0];

function hexGen(arr){
let num ;
    for(let i = 0 ; i< 6;i++ ){
        num = Math.floor(Math.random()*15);
        elem = arr[num];
        hexavalue += elem;
    }
    
        return hexavalue;
}

function changeBG(){
    let bgc = hexGen(hexarr);
    hexelem.innerHTML = bgc;
    body.style.backgroundColor = bgc;
    // body.style.transitionDelay = "0.2s";
    body.style.transitionDuration = "1.5s";
    // hexelem.style.transitionDuration = "1.5s";
    hexavalue ="#";


}