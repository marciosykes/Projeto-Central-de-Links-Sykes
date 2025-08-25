// Função para carregar o tema e a imagem salvos ao iniciar a página
function loadTheme() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const savedTheme = localStorage.getItem("theme")

  // Se o tema salvo for "light", aplica as mudanças
  if (savedTheme === "light") {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
  }
}

// Função para alternar o modo, trocar a imagem e salvar a preferência
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    localStorage.removeItem("theme")
  }
}

// Executa a função para carregar o tema assim que o script é lido
loadTheme()