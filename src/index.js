import "./styles.css";
import { loadHomePage } from "./homePage";
import { destroyPage } from "./destroyPage";
import { loadMenuPage } from "./menuPage";
import { loadAboutPage } from "./aboutPage";
loadHomePage();

const buttons = document.querySelectorAll(".actionButton");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    destroyPage();
    const buttonClicked = button.textContent;
    switch (buttonClicked) {
      case "Home":
        loadHomePage();
        break;
      case "Menu":
        loadMenuPage();
        break;
      case "About":
        loadAboutPage();
        break;
    }
  });
});
