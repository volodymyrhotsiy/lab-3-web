import {
  renderItemsList,
} from "./dom_util.js";
import { getAllCats,  deleteCat } from "./api.js";

const removeInput = document.getElementById("remove_input"); 
const removeButton = document.getElementById("remove_button");
const sortButton = document.getElementById("sort_button")
const countButton = document.getElementById("count_button")
const countInput = document.getElementById("count_input")
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

let cats = [];

export const refetchAllCats = async () => {
  const allCats = await getAllCats();

  cats = allCats;

  renderItemsList(cats);
};

removeButton.addEventListener("click", () => {
  deleteCat(removeInput.value).then(refetchAllCats);
  removeInput.value = "";
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

refetchAllCats();