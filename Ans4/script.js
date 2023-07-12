const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('change', function() {
  if (this.checked) {
    menu.style.display = 'flex';
    menu.style.display.flexDirection ="coloumn"
  } else {
    menu.style.display = 'none';
  }
});
