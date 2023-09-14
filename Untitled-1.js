// Get all elements with the class "dice" and store them in an array
const diceElements1 = document.querySelectorAll(".dice");
const diceElements2 = document.querySelectorAll(".dice2");        
// Generate a random number between 0 and the length of the diceElements array
const randomIndex1 = Math.floor(Math.random() * diceElements1.length)+1;
const randomIndex2 = Math.floor(Math.random() * diceElements2.length)+1;

var array1 =  Array.from(diceElements1);
var array2 =  Array.from(diceElements2);

var spliced1 = array1.splice(0,randomIndex1);
var spliced2 = array2.splice(0,randomIndex2);

// Loop through all dice elements and set their visibility
spliced1.forEach((spliced1) => {
    spliced1.style.visibility = 'visible';
  });
  
  spliced2.forEach((spliced2) => {
    spliced2.style.visibility = 'visible';
  });

  const winner = document.querySelectorAll(".winner")

if(randomIndex1<randomIndex2){

    winner[0].style.visibility = 'visible';

}
else if(randomIndex1==randomIndex2){

  winner[2].style.visibility = 'visible';


}
else{

  winner[1].style.visibility='visible';
}

  const button = document.getElementById("RefreshButton");

  function refreshPage()
  {
    location.reload()
  }
  button.addEventListener('click', refreshPage);
