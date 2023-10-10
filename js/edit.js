import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

const editButton = document.getElementById("edit_button");

let cats = [];

document.addEventListener("DOMContentLoaded", () => {
    loadCats();
});

const loadCats = () => {
    const loadedCats = JSON.parse(localStorage.getItem("cats"));
    if (loadedCats) {
        cats = loadedCats;
    } else {
        cats = [];
    }
}

const editCat = (title, age, desc) => {
    const catIndex = cats.findIndex(cat => cat.title === title);

    if (catIndex !== -1) {
        cats[catIndex].age = age;
        cats[catIndex].desc = desc;

        localStorage.setItem("cats", JSON.stringify(cats));
    } else {
        alert(`Cat with title "${title}" not found.`);
    }
}

editButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, age, desc } = getInputValues();

    clearInputs();

    editCat(title, age, desc);
});
