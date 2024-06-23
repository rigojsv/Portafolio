document.addEventListener('DOMContentLoaded',()=> {
   const rainbowhr = document.querySelectorAll('.rainbow');

   const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

   let colorIndex = 0;

    setInterval(() => {
        rainbowhr.forEach(hr => {
            hr.style.borderColor = colors[colorIndex];
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

});