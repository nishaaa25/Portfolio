let sections = document.querySelectorAll("section");
let projects = document.querySelectorAll(".project");
window.addEventListener("scroll", function () {
  let innerHeight = (window.innerHeight / 6) * 5 ;
  console.log(innerHeight);
  sections.forEach((section) => {
    let scrollTop = section.getBoundingClientRect().top;
    if (scrollTop < innerHeight) {
      section.classList.add("show");
      list.classList.remove("active");
    }
  });
  function showProject() {
    projects.forEach((project) => {
      let scrollTop = project.getBoundingClientRect().top;
      if (scrollTop < innerHeight) {
        project.classList.add("show");
      }
    });
  }
  showProject();
});

let bars = document.querySelector(".fa-bars");
let close = document.querySelector(".close");
let list = document.querySelector(".list");
bars.addEventListener("click", ()=>{
  list.classList.toggle("active");
})