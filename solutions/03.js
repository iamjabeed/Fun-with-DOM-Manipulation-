let containerEl = document.querySelector(".accordion-homepage");
// creating h3 and section tags
let h3El = document.createElement("h3");
let sectionEl = document.createElement("section");
// assigning h3 element inner text
h3El.innerText = "My new FAQ";
// adding class
sectionEl.classList.add("parent");
// adding elements to the page
sectionEl.append(h3El);
containerEl.append(sectionEl);
