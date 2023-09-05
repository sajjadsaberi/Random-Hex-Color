let body = document.getElementsByTagName('body')[0];
let div = document.getElementById('div');
const btn = document.getElementById('btn');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function myf() {
  let clo = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    clo += hex[index];
  }
  body.style.backgroundColor = clo;
  div.innerHTML = clo;
}
console.log(div);
