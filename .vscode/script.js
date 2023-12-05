// script.js

function toggleMode() {
  console.log("Toggle mode function called")
  const html = document.documentElement
  const switchButton = document.querySelector("#switch button")
  const image = document.querySelector("#suaImagem") // Substitua "suaImagem" pelo ID da sua imagem

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    // Se a classe "light" estiver presente, mova o botão para a esquerda
    switchButton.style.left = "0"

    // Substituir a imagem
    // Se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./assets/3.png")
  } else {
    // Se a classe "light" não estiver presente, mova o botão de volta para a direita
    switchButton.style.left = "50%"

    // Substituir a imagem
    // Se tiver sem light mode, manter a imagem normal
    image.setAttribute("src", "./assets/4.png")
  }
}
