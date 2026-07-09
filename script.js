window.addEventListener('DOMContentLoaded', () => {

  document.body.style.cursor = 'url("./assets/cat-cursor.cur"), default';

  const meowAudio = new Audio('./assets/meow.mp3'); 
  const links = document.querySelectorAll('a');

  console.log(links);

  // change cursor on link 
  links.forEach(link => {
    link.style.cursor = 'url("./assets/cat-cursor-link.cur "), pointer';
  })

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      // event.stopPropagation();
      
      const destination = link.getAttribute('href');
      
      meowAudio.currentTime = 0; 
      meowAudio.play();
      console.log("meow");
      setTimeout(() => {
        if (destination) {
          window.location.href = destination;
          console.log("meow");
        }
      }, 500);
    });
  });

  let cat = document.querySelector('.catto');

console.log(cat);

cat.addEventListener('mouseenter', () => {
    console.log("noooooooooooooo");
  cat.innerText = '😸';
});

// When the mouse leaves the cat area
cat.addEventListener('mouseleave', () => {
  if (cat.innerText === '😸') {
    cat.innerText = '🐱';
  }
});

});

