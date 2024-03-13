document.addEventListener('DOMContentLoaded', function () {

    const jumbotron = document.getElementById('jumbotron');
  
  
    jumbotron.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const offsetX = mouseX / window.innerWidth - 0.5;
      const offsetY = mouseY / window.innerHeight - 0.5;
      
      const moveAmount = 30; // Adjust the speed of movement
      
      const translateX = -offsetX * moveAmount + 'px';
      const translateY = -offsetY * moveAmount + 'px';
      
      jumbotron.style.backgroundPosition = translateX + ' ' + translateY;
    });
  });