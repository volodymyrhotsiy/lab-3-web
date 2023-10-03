import {
  addItemToPage,
  clearInputs,
  renderItemsList,
  getInputValues,
} from "./dom_util.js";


const submitButton = document.getElementById("submit_button");
const clearButton = document.getElementById("clear_button")
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButton = document.getElementById("sort_button")
const countButton = document.getElementById("count_button")
const countInput = document.getElementById("count_input")
const removeInput = document.getElementById("remove_input")
const removeButton = document.getElementById("remove_button")

let cats = [];

const addItem = ({ title, age, desc }) => {
  const generatedId = uuid.v1();

  const newItem = {
    id: generatedId,
    title,
    age,
    desc,
  };

  cats.push(newItem);

  addItemToPage(newItem);
};


submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { title, age, desc } = getInputValues();

  clearInputs();

  addItem({
    title, 
    age,
    desc: desc,
  });
});

findButton.addEventListener("click", () => {
  const foundCats = cats.filter(cats => cats.title.search(findInput.value) !== -1);

  renderItemsList(foundCats);

  findInput.value = "";
});

clearButton.addEventListener("click", () => {
  cats = [];  

  renderItemsList(cats);
})

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

removeButton.addEventListener("click", () => {
  const cats1 = cats.filter(cat => cat.title.search(removeInput.value) === -1);

  cats = cats1;

  removeInput.value = "";

  renderItemsList(cats);
})

renderItemsList(cats);