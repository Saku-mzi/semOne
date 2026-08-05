document.addEventListener("mousemove", (e) => {
  document.querySelector("div.ye").style.left = e.clientX - 10 + "px";
  document.querySelector("div.ye").style.top = e.clientY - 10 + "px";
  console.log(e.clientX, e.clientY);
});

document.addEventListener("mousemove", (e) => {
  document.querySelector("div.yes").style.left = e.clientX - 15 + "px";
  document.querySelector("div.yes").style.top = e.clientY - 15 + "px";
  console.log(e.clientX, e.clientY);
});

document.addEventListener("mousemove", (e) => {
  document.querySelector("div.yeh").style.left = e.clientX - 20 + "px";
  document.querySelector("div.yeh").style.top = e.clientY - 20 + "px";
  console.log(e.clientX, e.clientY);
});
