import {
    clearInputs,
    getInputValues,
    renderItemsList,
} from "./dom_util.js";
import { editCat, getAllCats } from "./api.js";

const titleInput = document.getElementById("title_input");
const ageInput = document.getElementById("age_input");
const descriptionInput = document.getElementById("description_input");
const editButton = document.getElementById("edit_button");
const idInput = document.getElementById("id_input");
const fillButton = document.getElementById("fill_button");

let cats = [];


export const refetchAllCats = async () => {
    const allCats = await getAllCats();

    cats = allCats;

    renderItemsList(cats);
};

fillButton.addEventListener("click", () => {
    getValues(idInput.value);
});

editButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, age, desc } = getInputValues();

    const id = idInput.value;

    clearInputs();

    idInput.value = "";

    editCat(id, { title, age, desc });

    refetchAllCats();
});

const getValues = (id) => {
    const cat = cats.find(cat => cat.id === id);
    if (cat) {
        insertValues(cat);
    } else {
        alert("Cat not found!");
    }
}

const insertValues = (cat) => {
    titleInput.value = cat.title;
    ageInput.value = cat.age;
    descriptionInput.value = cat.desc;
}

refetchAllCats();