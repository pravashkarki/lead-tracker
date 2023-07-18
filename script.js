let myLeads = []
const inputEl = document.getElementById("input-el")
const buttonEL = document.getElementById("input-btn")

buttonEL.addEventListener("click", function(){
    myLeads.push(inputEl.value)
});
