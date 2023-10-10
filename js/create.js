import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");

let cats = [];

document.addEventListener("DOMContentLoaded", () => {
    loadCats();
});

const loadCats = () => {
    const loadedCats = JSON.parse(localStorage.getItem("cats"));
    if (loadedCats) {
        cats = loadedCats;
    }
    else {
        cats = [];
    }
}

const addItem = ({ title, age, desc }) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        title,
        age,
        desc,
    };

    cats.push(newItem);

    localStorage.setItem("cats", JSON.stringify(cats));

};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, age, desc } = getInputValues();

    clearInputs();

    addItem({
        title,
        age,
        desc,
    });
});