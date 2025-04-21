// script.js

window.onload = function () {
    alert("Welcome to Nikitha Yalavarthi's Portfolio!");
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll("#skills .list-group-item");
    skillItems.forEach(item => {
      item.addEventListener("mouseover", () => item.classList.add("highlight"));
      item.addEventListener("mouseout", () => item.classList.remove("highlight"));
    });
  });
  