
 // selector 
 let divcolor =document.querySelector("#pallete");
 let btn = document.querySelector("body > div > div > div.control > button");
 var txt = document.querySelector("#color");

 // Event
 btn.addEventListener("click",colorRan);

 //random index 
 function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //random color
function colorRan(){
let index = getRandomInt(colors.length);
console.log(index, colors[index]);
document.getElementById("pallete").style.backgroundColor=colors[index];
//txt.setAttribute("value",colors[index]);
txt.value = colors[index];
}


// Event 
txt.addEventListener('change', changeBackground);

// change color 
function changeBackground(){
  let colorr =  document.getElementById('color').value ;
  console.log(colorr);
  //document.getElementById("pallete").style.backgroundColor="#0f525f";
  for(let i=0; i<colors.length; i++){
      if(colorr ===  colors[i]){

        document.getElementById("pallete").style.backgroundColor=colors[i];

      }else{
          alert = "plese enter true color";
      }
  }
  
}



