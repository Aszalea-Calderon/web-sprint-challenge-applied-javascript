// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerContainer = document.querySelector(".header-container");
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const lambdaTimesH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  //appending
  headerContainer.append(headerDiv);
  headerDiv.append(dateSpan);
  headerDiv.append(lambdaTimesH1);
  headerDiv.append(tempSpan);

  //classes
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  //text Content
  dateSpan.innerHTML = "MARCH 28, 2020";
  lambdaTimesH1.innerHTML = "Lambda Times";
  tempSpan.innerHTML = "98°";

  return headerDiv;
}
const head = Header("");
console.log(head);
