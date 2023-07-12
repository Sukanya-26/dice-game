var randomNumber1=Math.random();
randomNumber1=6*randomNumber1;
randomNumber1=Math.floor(randomNumber1)+1;
var address1="./images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",address1);
// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("src","./images/dice1.png")
//     }else if(randomNumber1===2){
//         document.querySelector(".img1").setAttribute("src","./images/dice2.png")
//         }else if(randomNumber1===3){
//             document.querySelector(".img1").setAttribute("src","./images/dice3.png")
//             }else if(randomNumber1===4){
//                 document.querySelector(".img1").setAttribute("src","./images/dice4.png")
//                 }else if(randomNumber1===5){
//                     document.querySelector(".img1").setAttribute("src","./images/dice5.png")
//                     }else{
//                         document.querySelector(".img1").setAttribute("src","./images/dice6.png")
//                         }

var randomNumber2=Math.random();
randomNumber2=6*randomNumber2;
randomNumber2=Math.floor(randomNumber2)+1;
var address2="./images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",address2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins."
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins."
}else{
    document.querySelector("h1").textContent="Its a tie !"
}