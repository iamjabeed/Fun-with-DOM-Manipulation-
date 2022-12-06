const productNames = [];
document.querySelectorAll(".as-imagegrid-item").forEach((name) => {
  productNames.push(name.innerText.replace("\nSupport", ""));
});
console.log(productNames);
