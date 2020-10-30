// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
  .get(" https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    const images = res.topics;
    images.forEach((topics) => {
      const newTab = tabMaker(topics);
      newTab.append(tabMaker);
    });

    console.log(res, "Good Stuff Happened");
  })
  .catch((drama) => {
    console.log("Something is wrong with the data", drama);
  });

function tabMaker(post) {
  const spanTrending = document.querySelector("span");
  const divTopic = document.createElement("div");

  //Appending
  spanTrending.append(divTopic);

  //Classes
  divTopic.classList.add("tab");

  //Giving it the goods
  divTopic.textContent = post.topics;

  return spanTrending;
}
