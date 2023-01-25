const date = new Date();
let dayIndex = date.getDay();

const graphElements = document.getElementsByClassName("graph-line");

for (i = 0; i < graphElements.length; i++) {
  graphElements[i].addEventListener("mouseover", showPopUp);
  graphElements[i].addEventListener("mouseout", removePopUp);
}

function showPopUp(event) {
  let popUp = event.target.previousElementSibling;
  popUp.style.display = "block";
}

function removePopUp(event) {
  let popUp = event.target.previousElementSibling;
  popUp.style.display = "none";
}

function setDay() {
  graphElements[dayIndex - 1].classList.add("current-day");

  for (i = 0; i < graphElements.length; i++) {
    if (
      graphElements[i] != graphElements[dayIndex - 1] &&
      graphElements[i].classList.contains("current-day")
    ) {
      graphElements[i].classList.remove("current-day");
    }
  }
}

setDay();
