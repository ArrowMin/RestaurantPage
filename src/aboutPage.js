export function loadAboutPage() {
  const contentSection = document.querySelector("#content");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = "About Us";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent =
    "We are dedicated to serving the best food you have ever tasted. In fact it will be the last thing you ever eat";

  contentSection.append(aboutHeader, aboutParagraph);
}
