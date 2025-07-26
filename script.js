function addStudy() {
  const input = document.getElementById("hoursInput");
  const hours = input.value;

  if (!hours || hours <= 0) {
    alert("Please enter a valid number of hours.");
    return;
  }

  const date = new Date().toLocaleDateString();
  const entry = `${date}: ${hours} hours`;

  let studyList = JSON.parse(localStorage.getItem("studyData")) || [];
  studyList.push(entry);
  localStorage.setItem("studyData", JSON.stringify(studyList));

  input.value = "";
  displayStudy();
}

function displayStudy() {
  const studyList = JSON.parse(localStorage.getItem("studyData")) || [];
  const listElement = document.getElementById("studyList");

  listElement.innerHTML = "";
  studyList.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    listElement.appendChild(li);
  });
}

window.onload = displayStudy;
