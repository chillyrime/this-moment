const images = ["0.jpg", "1.jpg", "2.jpg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

/* HTML에 추가할 img요소와 경로를 JavaScript에서 우선 생성 */
const bgImage = document.createElement("img");
bgImage.src = `img/${todayImage}`;

/* 위에서 생성한 HTML요소를 Body에 추가 */
document.body.appendChild(bgImage);
