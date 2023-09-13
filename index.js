let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")

let counter = 0 

function increment() {
  counter = counter + 1
  countEl.textContent = counter 
}

function decrement() {
  if(counter > 0){
    counter -= 1
  }
  countEl.textContent = counter
}

function save() {
  let save = counter + " - "
  saveEl.textContent += save
}