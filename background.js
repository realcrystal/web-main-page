const body = document.querySelector("body");
const bgContainer = document.querySelector(".js-bgInfo");
const BG_API_KEY = config.BG_API_KEY;

function paintInfo(user) {
  bgContainer.innerText = "unsplash";
  const anchor = document.createElement('a');
  const text = document.createTextNode(`@${user.username}`);
  anchor.setAttribute('href', user.links.html);
  anchor.setAttribute('target', "_blank");
  anchor.appendChild(text);
  bgContainer.appendChild(anchor);
}

function paintImage(imgSrc) {
  // const image = new Image();
  // image.src = imgSrc;
  // image.classList.add("bgImage");
  // body.appendChild(image);
  const temp = document.createTextNode(`body {background-image: url(${imgSrc})}`);
  document.querySelector("style").appendChild(temp);
  // image.addEventListener("loadend", paintInfo);
}

function getBackgroundImg() {
  fetch(`https://api.unsplash.com/photos/random/?orientation=landscape&client_id=${BG_API_KEY}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return false;
    }
  }).then((json) => {
    if (!json) {
      printImage("images/1.jpg");
    } else {
      const imgSrc = json.urls.full;
      const photographerInfo = json.user;
      paintImage(imgSrc);
      paintInfo(photographerInfo);
    }
  });
}

function init() {
  getBackgroundImg();
}
init();
