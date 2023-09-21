let colors = [
    "rgb(250, 41, 225)",
    "rgb(63, 90, 185)",
    "rgb(232, 99, 148)",
    "rgb(157, 232, 99)",
    "rgb(232, 220, 99)",
    "rgb(32, 100, 94)",
  ];
  
  let colorGanador = document.querySelector("#colorDisplay");
  let cuadrados = document.querySelectorAll(".square");
  let pickedColor = colors[0];
  let mensaje = document.querySelector("#message");
  let fondo = document.querySelector("h1");
  let color = [];
  let btnReset = document.querySelector("#reset");
  let btnEasy = document.querySelector("#easyButton");
  let btnHard = document.querySelector("#hardButton");
  let numberOfSquares = 6;
  let gameInProgress = true; // controlo cuando el juego termina

  
  window.onload = function inicio() {
    generateRandomColors(numberOfSquares);
    pickColor();
  };
  
  function changeColor() {
    for (let i = 0; i < cuadrados.length; i++) {
      fondo.style.backgroundColor = pickedColor;
      cuadrados[i].style.backgroundColor = pickedColor;
    }
  }
  function pickColor() {
    let numRandom = Math.floor(Math.random() * color.length);
    pickedColor = color[numRandom];
  
    colorGanador.innerHTML = `<br>${pickedColor} <br>`;

    if (gameInProgress){
  
    for (let i = 0; i < cuadrados.length; i++) {
      // cuadrados[i].innerHTML=color[i];
      cuadrados[i].style.backgroundColor = color[i];
      cuadrados[i].addEventListener("click", () => {
        if (gameInProgress){
        let clickedColor = color[i];
        console.log(`mira este color es ${color[i]}`);
        if (clickedColor == pickedColor) {
          mensaje.innerHTML = "¡Correcto!";
          btnReset.innerHTML = "Play Again?";
          mensaje.style.backgroundColor = "steelblue";
          mensaje.style.color = "white";
          changeColor();
          gameInProgress = false;
        } else {
          mensaje.innerHTML = "Intentelo nuevamente";
          mensaje.style.backgroundColor = "red";
          mensaje.style.color = "white";


  
          cuadrados[i].style.backgroundColor = "transparent";
          console.log(clickedColor, pickedColor);
        }
    }
      });
    }
  }
}
  
  function randomColor() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    return `RGB(${R}, ${G}, ${B})`;
  }
  
  function generateRandomColors(numberOfSquares) {
    let colorRandom = [];
    for (let i = 0; i < numberOfSquares; i++) {
      colorRandom.push(randomColor());
    }
    return (color = colorRandom);
  }
  
  function reset() {
    mensaje.innerHTML = "";
    btnReset.innerHTML = "Nuevos Colores";
    generateRandomColors(numberOfSquares);
    pickColor();
    gameInProgress = true;

  
    for (let i = 0; i < cuadrados.length; i++) {
      if (color[i]) {
        cuadrados[i].style.background = color[i];
        cuadrados[i].style.display = "block";
      } else {
        cuadrados[i].style.display = "none";
      }
    }
    fondo.style.background = "transparent";
  }
  
  btnReset.addEventListener("click", () => {
    reset();
  });
  
  btnEasy.addEventListener("click", () => {
    //se podria usar ? .togle('selected')
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    numberOfSquares = 3;
    reset();
    generateRandomColors(numberOfSquares);
    pickColor();
  
    console.log(numberOfSquares);
    for (let i = 0; i < cuadrados.length; i++) {
      if (color[i]) {
        cuadrados[i].style.background = color[i];
        cuadrados[i].style.display = "block";
      } else {
        cuadrados[i].style.display = "none";
      }
    }
    fondo.style.background = "transparent";
  });
  
  btnHard.addEventListener("click", () => {
    //se podria usar ? .togle('selected')
    btnHard.classList.add("selected");
    btnEasy.classList.remove("selected");
    numberOfSquares = 6;
    reset();
    generateRandomColors(numberOfSquares);
    pickColor();
    console.log(numberOfSquares);
    for (let i = 0; i < cuadrados.length; i++) {
      if (color[i]) {
        cuadrados[i].style.background = color[i];
        cuadrados[i].style.display = "block";
      }
    }
  });