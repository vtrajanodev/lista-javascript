const addButton = document.getElementById("addButton");
let id = 0

addButton.addEventListener("click", () => {

  const inputValue = document.getElementById("inputValue");
  const ul = document.querySelector(".primeira-lista");
  const li = document.createElement("li");
  const liText = document.createTextNode(inputValue.value);
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  
  const label = document.createElement("label")
  label.setAttribute("for", id)
  input.setAttribute("id", id);


  li.appendChild(label)
  label.appendChild(input)
  label.appendChild(liText);
  ul.appendChild(li);

  inputValue.value = ""

  id++
});

const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
})
