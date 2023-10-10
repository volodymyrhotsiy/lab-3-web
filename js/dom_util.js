const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");
const ageInput = document.getElementById("age_input")

// local functions
const itemTemplate = ({ id, title, age, desc }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
  <img
    src="https://i.pinimg.com/736x/97/d0/2a/97d02ad83bbf9161f2a4d73ff8b95195.jpg"
    class="item-container__image card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">Name: ${title}</h5>
    <p class="card-text">Age: ${age}<p/>
    <p class="card-text">Desc: ${desc}</p>
  </div>
</li>`;


export const clearInputs = () => {
  localStorage.clear();

  titleInput.value = "";

  ageInput.value = "";

  descriptionInput.value = "";
};

export const addItemToPage = ({ id, title, age, desc }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, age, desc })
  );
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};


export const getInputValues = () => {
  if (!titleInput.value || !ageInput.value || !descriptionInput.value) {
    alert("YOU MUST FILL ALL THE INPUTS");
    return null;
  }

  if (+ageInput.value > 20 || +ageInput < 0){
    alert("Invalid cat age");
    return null;
  }

  return {
    title: titleInput.value,
    age: ageInput.value,
    desc: descriptionInput.value,
  };
};  
