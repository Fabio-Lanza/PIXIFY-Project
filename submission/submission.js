const dark = document.querySelector("#dark");
const body = document.querySelector("body");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name=name]").value;
  const entry = document.querySelector("input[name=entry]").value;
  const url1 = document.querySelector("input[name=url1]").value;

const newImage = document.createElement('div')
newImage.innerHTML = `
<div class="card card-1">
            <img src= ${url1}
              alt=""/> 
            <div class="card-text">
              <p>${entry}${name}
                <a href="../details/details.html"><span>see more</span></p></a>
            </div>
          </div>`

const imageContainer = document.querySelector('.pictures')
imageContainer.insertBefore(newImage, imageContainer.firstChild)

});



dark.addEventListener("click", () => {
  if (body.classList.toggle("dark")) {
    dark.innerHTML = "Light Mode";
  } else {
    dark.innerHTML = "Dark Mode";
  }
});
