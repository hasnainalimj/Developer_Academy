let parent = document.querySelector("#parent");

const images = ["1.png", "2.png", "3.png"];

images.map((val, ind) => {
  let img = document.createElement("img");
  img.setAttribute("class", "images");
  img.setAttribute("id", "img" + ind);
  img.setAttribute("src", val);
  img.addEventListener("click", () => {
    document.getElementById("img" + ind).style.left = "100%";
  });
  parent.appendChild(img);
});
