const changeThemeButton = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const themeSwapButtonImage = document.querySelector(".button-image");

changeThemeButton.addEventListener("click", () => {
    const darkModeIsActive = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkModeIsActive) {
        themeSwapButtonImage.setAttribute("src", "./src/images/sun.png");
    } else {
        themeSwapButtonImage.setAttribute("src", "./src/images/moon.png");
    }
});