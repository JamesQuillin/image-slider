var img01 = document.getElementById('img01');
var img02 = document.getElementById('img02');
var img03 = document.getElementById('img03');
var img04 = document.getElementById('img04');

var images = [img01, img02, img03, img04];
var currentIndex = 0;

document.getElementById('slider-button-left').addEventListener('click', function(e) {
  images[currentIndex].style.display = 'none';
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  images[currentIndex].style.display = 'block';
});

document.getElementById('slider-button-right').addEventListener('click', function(e) {
  images[currentIndex].style.display = 'none';
  currentIndex += 1;
  if (currentIndex > 3) {
    currentIndex = 0;
  }
  images[currentIndex].style.display = 'block';
});
