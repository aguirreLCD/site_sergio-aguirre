//define language reload anchors
const dataReload = document.querySelectorAll("[data-reload]");

//language translations
const language = {
  eng: {
    welcome: "Welcome!",
  },
  pt: {
    welcome: "Bem vindo!",
  },
};
//define language via window hash
if (window.location.hash) {
  if (window.location.hash === "#pt") {
    hi.textContent = language.pt.welcome;
  }
}

//define language reload onclick illiteration
for (i = 0; i <= dataReload.length; i++) {
  window.location.hash = dataReload[i].onclick = function () {
    location.reload(true);
  };
}

// <a href="#eng" data-reload>English</a>
// <a href="#pt" data-reload>Português</a>

// <p id="hi"></p>
