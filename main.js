document.addEventListener("mousemove", (e) => {
  document.querySelector("div#ye").style.left = e.clientX - 6 + "px";
  document.querySelector("div#ye").style.top = e.clientY - 6 + "px";
  console.log(e.clientX, e.clientY);
});

document.addEventListener("mousemove", (e) => {
  document.querySelector("div#yes").style.left = e.clientX - 9 + "px";
  document.querySelector("div#yes").style.top = e.clientY - 9 + "px";
  console.log(e.clientX, e.clientY);
});

document.addEventListener("mousemove", (e) => {
  document.querySelector("div#yeh").style.left = e.clientX - 13 + "px";
  document.querySelector("div#yeh").style.top = e.clientY - 13 + "px";
  console.log(e.clientX, e.clientY);
});
