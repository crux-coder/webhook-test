function populateTagsList(data) {
  const list = document.getElementById("listOfTags");
  list.style = " overflow-y: scroll; height: 100vh;";
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    li.style = "cursor: pointer; margin-bottom: 10px;";
    li.onclick = () => {
      getPDFsByTagId(element.id);
      const placeholder = document.getElementById("selectedTag");
      placeholder.innerText = "TAG: " + element.title;
    };
    list.appendChild(li);
  });
}

function populatePDFsList(data) {
  const list = document.getElementById("listOfPdfs");
  const nrEl = document.getElementById("nrOfPDF");
  nrEl.innerHTML = "Nr of PDFs: " + data.length;
  list.innerHTML = "";
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    li.style = "margin-bottom: 10px";
    list.appendChild(li);
  });
}

function getPDFsByTagId(tagId) {
  fetch(`http://localhost:3000/tags/${tagId}/pdfs`)
    .then((res) => res.json())
    .then((data) => populatePDFsList(data))
    .catch((err) => alert("Error. Refresh."));
}

function getAllTags() {
  fetch("http://localhost:3000/tags")
    .then((res) => res.json())
    .then((data) => populateTagsList(data))
    .catch((err) => alert("Error. Refresh."));
}

getAllTags();
