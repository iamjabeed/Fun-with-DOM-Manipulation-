let items = document.querySelectorAll("#SIvCob a");
// To remove some items
items.forEach((lang, i) => {
  i % 2 == 0 && lang.remove();
});
// To remove All items
items.forEach((lang) => {
  lang.remove();
});
