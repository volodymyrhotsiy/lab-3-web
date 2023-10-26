import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";
import { editCat } from "./api.js";

const editButton = document.getElementById("edit_button");
const idInput = document.getElementById("id_input");



editButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, age, desc } = getInputValues();

    const id = idInput.value;

    clearInputs();

    editCat(id, {title, age, desc});
});
