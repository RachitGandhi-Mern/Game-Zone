let userseq = [];
let gameseq = [];

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let btnn = [box1, box2, box3, box4];
let main = document.querySelector(".main");

let gamestarted = false;
let level = 0;
let h2 = document.getElementById("levels");

document.addEventListener("keypress", function () {
  if (gamestarted === false) {
    console.log("Game Started");
    gamestarted = true;
    levelup();
  }
});

function compflash(btnss) {
  btnss.classList.add("flash");
  btnss.style.opacity = 1;
    btnss.style.backgroundColor = "white";
    setTimeout(function () {
    btnss.classList.remove("userflash");
    btnss.style.opacity = 1;
  
        if (btnss.id === "box1") btnss.style.backgroundColor = "palevioletred";
    else if (btnss.id === "box2") btnss.style.backgroundColor = "rgba(98, 98, 155, 0.603)";
    else if (btnss.id === "box3") btnss.style.backgroundColor = "orange";
    else if (btnss.id === "box4") btnss.style.backgroundColor = "plum";
  }, 500);
}

function userflash(btnss) {
  btnss.classList.add("userflash");
  btnss.style.opacity = 1;
  btnss.style.backgroundColor = "black";
setTimeout(function () {
    btnss.classList.remove("userflash");
    btnss.style.opacity = 1;
        if (btnss.id === "box1") btnss.style.backgroundColor = "palevioletred";
    else if (btnss.id === "box2") btnss.style.backgroundColor = "rgba(98, 98, 155, 0.603)";
    else if (btnss.id === "box3") btnss.style.backgroundColor = "orange";
    else if (btnss.id === "box4") btnss.style.backgroundColor = "plum";
  }, 500);
}

function levelup() {
  level++;
  h2.innerText = `level  ${level}`;
  h2.style.color = "coral";

  let rendNum = Math.floor(Math.random() * btnn.length);
  compflash(btnn[rendNum]);
  let randCol = btnn[rendNum];
  gameseq.push(randCol);
  compflash(randCol)
  console.log(gameseq);
}

function check(index){
    if(userseq[index]=== gameseq[index]){
        if(userseq.length === gameseq.length){
            setTimeout(()=>{
                levelup();
            },1000)
            
            }
        }else{
            h2.innerText="Game over !Press Any Key To Restart"
            h2.style.color="black"
            main.style.backgroundColor = "red"
            gamestarted =false;
            gameseq=[];
            userseq=[];
            level=0;            
        }
    }




function btnpress() {
  let btns = this;
  userflash(btns);
  userseq.push(btns)

  console.log(" user:" , userseq);
 check(userseq.length-1)

}

let allbtns = document.querySelectorAll(".box");
{
  for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
  }
}
