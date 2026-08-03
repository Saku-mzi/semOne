document.addEventListener("click", (e) => {
  document.querySelector("div.yes").style.left = e.clientX - 50 + "px";
  document.querySelector("div.yes").style.top = e.clientY - 50 + "px";
  console.log(e.clientX, e.clientY);
});
