document.addEventListener("mousemove", (e) => {
  document.querySelector("div#yeh").style.left = e.clientX - 5 + "px";
  document.querySelector("div#yeh").style.top = e.clientY - 5 + "px";
  document.querySelector("div#yes").style.left = e.clientX - 10 + "px";
  document.querySelector("div#yes").style.top = e.clientY - 10 + "px";
});
