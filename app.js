/* Created by Tivotal */

let indicator = document.querySelector(".indicator");

let divs = "";

for (let i = 0; i < 30; i++) {
  let delay = 0.004 * i;
  divs += `<div style="--delay: ${delay.toFixed(3)}"></div>`;
}

indicator.innerHTML = divs;
