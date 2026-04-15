const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLbMGApJ8SnTrRwQBNeFWrAvL99eOjE1VE6MU7k9GVgo9-h0_eZPQMKRBUHVDxNvzh1C6MXMr_g8Dm/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(csv => {

const rows = csv.split("\n").slice(1); // skip header

const data = rows.map(row => {
const cols = row.split(",");

return {
student: cols[0],
subject: cols[1],
classroom: cols[2],
date: cols[3]
};
});

const list = document.getElementById("makeupList");
const subjectFilter = document.getElementById("subjectFilter");

function displayTests(){

list.innerHTML="";

const subjectValue = subjectFilter.value;

data
.filter(test => subjectValue==="all" || test.subject===subjectValue)
.forEach(test=>{

const li = document.createElement("li");

li.textContent =
test.student +
" – " +
test.subject +
" – ruum " +
test.classroom +
" – " +
test.date;

list.appendChild(li);

});

}

displayTests();
subjectFilter.addEventListener("change",displayTests);

});