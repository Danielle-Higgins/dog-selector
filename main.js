class BreedImageSearcher {
  LIST_ALL_BREEDS = "https://dog.ceo/api/breeds/list/all";

  constructor(select, dogImage) {
    this.select = document.getElementById(select);
    this.dogImage = document.querySelector(`.${dogImage}`);

    this.popSelectBox();
    this.setupEventListners();
  }

  // 1. populate the select box
  async popSelectBox() {
    try {
      const response = await fetch(this.LIST_ALL_BREEDS);

      if (!response.ok) throw new Error("Network response was not ok!");

      const data = await response.json();
      // console.log(data);
      // console.log(data.message);

      // array of keys (breeds) from object
      const arrayOfBreeds = Object.keys(data.message);
      // console.log(arrayOfBreeds);

      // dynamically creating options for each breed in the array
      arrayOfBreeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed;
        this.select.appendChild(option);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  // 2. when the user selects a breed from list of options, the image should change to that breed
  setupEventListners() {
    // create event listener for the select box
    this.select.addEventListener("change", (e) => this.displayDogImg(e));
  }

  async displayDogImg(e) {
    // console.log(e.target.value);
    const BREEDS_LIST = `https://dog.ceo/api/breed/${e.target.value}/images/random`;

    // get the dog image
    try {
      const response = await fetch(BREEDS_LIST);

      if (!response.ok) throw new Error("Network response was not ok!");

      const data = await response.json();
      console.log(data);

      this.dogImage.src = data.message;
      this.dogImage.alt = "dog image";
    } catch (error) {
      console.log("Error:", error);
    }

    // get dog characteristics
    dogInfo.getGender();
    dogInfo.getDogAge();
    dogInfo.getLikes();
    dogInfo.getDislikes();
    dogInfo.getAdditionalInfo();
  }
}

const breedImg = new BreedImageSearcher("breeds", "dog-img");
