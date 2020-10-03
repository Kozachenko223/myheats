// при клике по кнопке скрипт запустит код
button.onclick = function () {
  // если фон кнопки чёрный
  if (button.style.backgroundColor == 'black') {
    // изменим его на белый, а текст сделаем чёрным
    button.style.backgroundColor = 'green';
    button.style.color = 'blue';
  } else {
    button.style.backgroundColor = 'blue';
    button.style.color = 'yellow';
    // иначе сделаем фон чёрным, а текст белым


  }
}