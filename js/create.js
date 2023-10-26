import { postCat } from "./api.js";
import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");


submitButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    const { title, age, desc } = getInputValues();

    clearInputs();

    postCat({
        title,
        age,
        desc,
    });
});