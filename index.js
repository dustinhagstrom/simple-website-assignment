const addButton = document.getElementById("count__div-add");
const minusButton = document.getElementById("count__div-minus");
const count = document.getElementById("count__div-counter");
const starContainer = document.getElementById("star__container");

function add() {
  let currentCount = +count.textContent;
  currentCount++;
  count.textContent = currentCount;
  if (currentCount > 0) {
    const starNode = document.createElement("span");
    const starNodeText = document.createTextNode("☆");
    starNode.appendChild(starNodeText);
    starContainer.appendChild(starNode);
  }
}

function subtract() {
  let currentCount = +count.textContent;
  currentCount--;
  count.textContent = currentCount;
  if (starContainer.hasChildNodes()) {
    starContainer.removeChild(starContainer.lastElementChild);
  }
}

addButton.addEventListener("click", add);
minusButton.addEventListener("click", subtract);
