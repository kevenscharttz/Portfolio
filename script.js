function mudarTema() {
    let html = document.documentElement;
    let button = document.getElementById("phase");

    if (html.classList.contains("lightMode")){
        html.classList.remove("lightMode");
        button.src = "./src/assets/toggle-sun.png";
    } else {
        html.classList.add("lightMode");
        button.src = "./src/assets/toggle.png";
    }
}
