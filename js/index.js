import {
  addItemToPage,
  clearInputs,
  renderItemsList,
  getInputValues,
} from "./dom_util.js";

const removeInput = document.getElementById("remove_input"); 
const removeButton = document.getElementById("remove_button");
const sortButton = document.getElementById("sort_button")
const countButton = document.getElementById("count_button")
const countInput = document.getElementById("count_input")
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");


let cats = [];

document.addEventListener("DOMContentLoaded", () => {
  loadCatsFromLocalStorage();
});

const loadCatsFromLocalStorage = () => {
  const savedCats = localStorage.getItem("cats");
  if (savedCats) {
    cats = JSON.parse(savedCats);
    renderItemsList(cats);
  }
};


removeButton.addEventListener("click", () => {
  const cats1 = cats.filter((cat) => cat.title.search(removeInput.value) === -1);

  cats = cats1;

  localStorage.setItem("cats", JSON.stringify(cats));

  removeInput.value = "";

  renderItemsList(cats);
});


findButton.addEventListener("click", () => {
  const foundCats = cats.filter(cats => cats.title.search(findInput.value) !== -1);

  renderItemsList(foundCats);

  findInput.value = "";
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(cats);

  findInput.value = "";
}) 

sortButton.addEventListener("click", () => {
  const foundCatsSort = cats.slice();
  foundCatsSort.sort((a, b) => {
    return b.title.localeCompare(a.title); 
  });

  renderItemsList(foundCatsSort);
});


countButton.addEventListener("click", () => {
  const foundCatsCount = cats.filter(cat => cat.age.includes(countInput.value));

  const count = foundCatsCount.length;

  alert(count);

  countInput.value = "";
});


window.addEventListener("load", loadCatsFromLocalStorage);

renderItemsList(cats);
