export function loadHomePage() {
  const contentSection = document.querySelector("#content");

  const homeHeader = document.createElement("h1");
  homeHeader.textContent = "Slappy's Burgers";
  const homeParagraph = document.createElement("p");
  homeParagraph.textContent =
    "Welcome to slappys burger mmm mmm mmm it so good! It's a meal to die for!";
  const homeHours = document.createElement("h2");
  homeHours.textContent = "Hours:";
  const homeHoursParagraph = document.createElement("p");
  homeHoursParagraph.textContent = "Anytime baby";
  const homeLocation = document.createElement("h2");
  homeLocation.textContent = "Location:";
  const homeLocationParagraph = document.createElement("p");
  homeLocationParagraph.textContent = "Over there";

  contentSection.append(
    homeHeader,
    homeParagraph,
    homeHours,
    homeHoursParagraph,
    homeLocation,
    homeLocationParagraph
  );
}
