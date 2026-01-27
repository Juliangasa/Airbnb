const header = document.querySelector('header');
document.querySelector("header");
window.addEventListener("scroll",()=> {
  if (window.scrollY > 10) {
    header.classList.add("shadow-md",
      "bg-white");
      } else {
        header.classList.remove("shadow-md");
      }
});
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("click", () =>{
  searchBar.classList.add("shadow-lg", "ring-1", "ring-black");
});
document.addEventListener("click", (e) =>{
  if (!searchBar.contains(e.target)){
    searchBar.classList.remove("shadow-lg", "ring-1", "ring-black");
  }
});