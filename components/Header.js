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

  //textContents is all text contained by an element and all its children that are for formatting purposes only.
  //innerText returns all text contained by an element and all its child elements.
  //innerHtml returns all text, including html tags, that is contained by an element.

  return headerDiv;
}
const head = Header("");
console.log(head);
