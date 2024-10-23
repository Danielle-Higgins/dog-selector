const LIST_ALL_BREEDS = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector("#breeds");

// 1. populate the select box
fetch(LIST_ALL_BREEDS)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.message);
    // console.log(Object.keys(data.message));
    const arrayOfBreeds = Object.keys(data.message);
    arrayOfBreeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed;
      select.appendChild(option);
    });
  })
  .catch((error) => console.log(`Error ${error}`));
