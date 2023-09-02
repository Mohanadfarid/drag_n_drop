const fill = document.getElementById("fill");
const emptys = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", () => {
  fill.classList.add("dragging");
  setTimeout(() => {
    fill.classList = "invisiable";
  }, 0);
});

fill.addEventListener("dragend", () => {
  fill.classList = "fill";
});

emptys.forEach((empty) => {
  empty.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("draged over");
  });
  empty.addEventListener("dragenter", () => {
    if (empty.childElementCount < 1) {
      empty.classList.add("dragged_over");
    }
  });
  empty.addEventListener("dragleave", () => {
    empty.classList.remove("dragged_over");
  });
  empty.addEventListener("drop", (e) => {
    e.preventDefault();
    empty.classList = "empty";
    empty.append(fill)
  });
});
