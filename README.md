# Dog Selector: <a target="_blank" href="https://danielle-higgins.github.io/dog-selector/">Visit Here</a>

<img src="https://github.com/Danielle-Higgins/dog-selector/blob/main/selector-preview.png">

Pick you favorite breed from the drop down menu! It will show you a cute picture of said breed and give you its characteristics.

## Tech Used

<p>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
</p>

This project is built using the Dog CEO API. I built the startup code using simple HTML and CSS and used Javascript to make calls to the API. I first populated the select box using the "list all breeds" url which I made calls to, to get the full list of breeds. I only wanted the keys of the object that I got back from the call so I used Object.keys() to get an array of keys. I then dynamically created option elements by looping through the array of breeds. I then wanted the image to change when the user selects a breed from the select box. So, I used the "breeds list" url and made calls to it in order to get the path to the image of each breed the user selects. Lastly, I stored the characteristics of the dogs in an object literal where I created properties of the characteristics and methods to get those characteristics.

Here is a link to the API I used: <a target="_blank" href="https://dog.ceo/dog-api/">Dog CEO API</a>

## Optimizations

If/when I improve this project, I would like to find a better way of coming up with the characteristics. Maybe there's an characteristics API out there that I can use intead of hard coding a bunch of each characteristic. Also I would fix the typo where the dog's age could be zero. An optimization that I used was using the fisher-yates shuffle to shuffle an array. It uses less time versus other shuffle algorithms that are out there.

## Lessons Learned:

I learned how to use an API and how they work. Learning how to make calls to an API will help me tremendously going forward. Especially for larger projects that I want to build. I also had some practice taking a large problem and breaking it down into smaller sub problems. Also had more practice on how to dynamically add elements to the DOM.
