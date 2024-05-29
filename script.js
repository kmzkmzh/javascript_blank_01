// JavaScript
//console.log('Hello world!');

// body の背景色を変える
function MyFunction01() {
    const obj = document.body;
    obj.style.backgroundColor = '#D2F2E9';
  }
  // ID要素 の背景色を変える
function MyFunction02() {
    const obj = document.getElementById('id01');
    obj.style.color= 'orange';
  }
  // CLASS要素 の背景色を変える
function MyFunction03() {
    const lines = document.getElementsByClassName('class01');
    console.log(lines)
    for( let i=0; i<lines.length; i++){
      lines[i].style.color= '#D39ED9';
    }
  }
  // HTML要素 の背景色を変える
function MyFunction04() {
    const obj = document.getElementsByTagName('p');
    for( let i=0; i<obj.length; i++ ) {
      obj[i].style.color = '#9CFCA6';
      obj[i].style.backgroundColor = '#A0C4E4';
    }
  }