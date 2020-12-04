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

		// How I would do it
		const articles2 = res.data.articles;
		let { articles } = res.data;
		// articles = "Now I'm a string"
		// console.log({ articles });
		// console.log({ res })
		// console.log({ articles2 }); // make a new object {} -> { "articles2": articles2 }

		// console.log("articles ", articles);
		// console.log(Object.entries(articles));
		// for (const [topic, articlesByTopic] of Object.entries(articles)) {
		// 	// for (const entry of Object.entries(articles)) {
		// 	// console.log(entry);
		// 	// const key = entry[0];
		// 	// const articlesByTopic = entry[1];
		// 	articlesByTopic.forEach((post) => {
		// 		const newCard = cardMaker(post);
		// 		entryPoint.append(newCard);
		// 	})
		// }
		for (const item in articles) {
			// console.log(item);
			// console.log(articles);
			console.log(articles[item]);
			articles[item].forEach(post => {
				entryPoint.appendChild(cardMaker(post));
			})
		}

		// const chaz = {
		// 	name: "Chaz Kiker",
		// 	age: 19
		// }
		// console.log(Object.entries(chaz));

		// 	const { javascript, bootstrap, technology, jquery, node } = articles;

		// 	javascript.forEach((post) => {
		// 		const newCard = cardMaker(post);
		// 		entryPoint.append(newCard);
		// 	});

		// 	//Bootstrap Appending
		// 	// const bootArray = res.data.articles.bootstrap;

		// 	bootstrap.forEach((post) => {
		// 		const newCard = cardMaker(post);
		// 		entryPoint.append(newCard);
		// 	});

		// 	//Technology Appending
		// 	// const techArray = res.data.articles.technology;
		// 	technology.forEach((post) => {
		// 		const newCard = cardMaker(post);
		// 		entryPoint.append(newCard);
		// 	});

		// 	//Jquery Appending
		// 	// const jQArray = res.data.articles.jquery;
		// 	jquery.forEach((post) => {
		// 		const newCard = cardMaker(post);
		// 		entryPoint.append(newCard);
		// 	});

		// 	//Node Appending
		// 	// const nodeArray = res.data.articles.node;
		// 	node.forEach((post) => {
		// 		const newCard = cardMaker(post);
		// 		entryPoint.append(newCard);
		// 	});
		// })
		// .catch((theBadStuff) => {
		// 	console.log(theBadStuff, "theBadStuff");

		// 	// FYI, you can use a special error logger
		// 	console.error(theBadStuff);
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
	// divCard.append(headlineDiv);
	// divCard.append(authorDiv);
	divCard.append(headlineDiv, authorDiv);
	// authorDiv.append(imgContainerDiv);
	// authorDiv.append(authNameSpan);
	authorDiv.append(imgContainerDiv, authNameSpan);
	imgContainerDiv.append(imgSrc);

	//textContent--
	headlineDiv.textContent = headline;
	// imgSrc.src = authorPhoto; //change how its structured
	imgSrc.setAttribute("src", authorPhoto);
	authNameSpan.textContent = `By ${authorName}`;

	return divCard;
}
