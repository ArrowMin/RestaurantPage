export function loadMenuPage() {
  const contentSection = document.querySelector("#content");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";
  const menuEntrees = document.createElement("h2");
  menuEntrees.textContent = "Entrees:";
  const menuEntreesParagraph = document.createElement("p");
  menuEntreesParagraph.textContent =
    "Burger $12, Mac and cheese $12, Spicy Wings $10";
  const menuBeverages = document.createElement("h2");
  menuBeverages.textContent = "Beverages:";
  const menuBeveragesParagraph = document.createElement("p");
  menuBeveragesParagraph.textContent = "Water $12, Jarritos $12, Jinro $10";

  contentSection.append(
    menuHeader,
    menuEntrees,
    menuEntreesParagraph,
    menuBeverages,
    menuBeveragesParagraph
  );
}
