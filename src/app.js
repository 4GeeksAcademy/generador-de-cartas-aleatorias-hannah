import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suites = ['♦', '♥', '♠', '♣'];
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];



  const getRandomElements = (array) => {
    const randomElements = Math.floor(Math.random() * array.length)
    return array[randomElements] 
  }
  const suiteValue = getRandomElements(suites)
  const numberValue = getRandomElements(numbers)

  let number = document.querySelector("#number")
  let top = document.querySelector("#top")
  let bottom = document.querySelector("#bottom")
  number.innerHTML = numberValue
  top.innerHTML = suiteValue
  bottom.innerHTML = suiteValue

  top.classList.add(suiteValue)
  bottom.classList.add(suiteValue)
};
