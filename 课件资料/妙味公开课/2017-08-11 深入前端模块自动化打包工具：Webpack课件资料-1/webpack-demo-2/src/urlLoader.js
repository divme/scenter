import img from './avatar.jpg';
import img1 from './1.jpg';

console.log(img);
console.log(img1);

var imgElement = document.createElement('img');
imgElement.src = img;
document.body.appendChild(imgElement);