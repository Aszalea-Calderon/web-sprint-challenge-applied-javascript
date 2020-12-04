// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const entryPoint = document.querySelector(".cards-container");
axios
  .get(" https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    //JavaScript Appending-
    const javaArray = res.data.articles.javascript;

    javaArray.forEach((post) => {
      const newCard = cardMaker(post);
      entryPoint.append(newCard);
    });

    //Bootstrap Appending
    const bootArray = res.data.articles.bootstrap;

    bootArray.forEach((post) => {
      const newCard = cardMaker(post);
      entryPoint.append(newCard);
    });

    //Technology Appending
    const techArray = res.data.articles.technology;
    techArray.forEach((post) => {
      const newCard = cardMaker(post);
      entryPoint.append(newCard);
    });

    //Jquery Appending
    const jQArray = res.data.articles.jquery;
    jQArray.forEach((post) => {
      const newCard = cardMaker(post);
      entryPoint.append(newCard);
    });

    //Node Appending
    const nodeArray = res.data.articles.node;
    nodeArray.forEach((post) => {
      const newCard = cardMaker(post);
      entryPoint.append(newCard);
    });
  })
  .catch((theBadStuff) => {
    console.log(theBadStuff, "theBadStuff");
  });

function cardMaker({ headline, authorPhoto, authorName }) {
  const divCard = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const imgSrc = document.createElement("img");
  const authNameSpan = document.createElement("span");

  //classes
  divCard.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainerDiv.classList.add("img-container");

  //Appending
  divCard.append(headlineDiv);
  divCard.append(authorDiv);
  authorDiv.append(imgContainerDiv);
  imgContainerDiv.append(imgSrc);
  authorDiv.append(authNameSpan);

  //textContent--
  headlineDiv.textContent = headline;
  imgSrc.src = authorPhoto; //change how its structured
  authNameSpan.textContent = `By ${authorName}`;

  return divCard;
}
