import { Brand, BrandName } from "@realtair/icons";
import * as React from "react";
import * as ReactDOM from "react-dom/server";

const container = document.querySelector("body")!;
const BrandNameMarkupSM = ReactDOM.renderToStaticMarkup(
  <BrandName css={{ color: "$green8" }} />
);
const BrandNameMarkupMD = ReactDOM.renderToStaticMarkup(
  <BrandName css={{ color: "$green8" }} size="md" />
);
const BrandNameMarkupLG = ReactDOM.renderToStaticMarkup(
  <BrandName css={{ color: "$green8" }} size="lg" />
);
const BrandLogoMarkupSM = ReactDOM.renderToStaticMarkup(
  <Brand css={{ color: "$green8" }} />
);
const BrandLogoMarkupMD = ReactDOM.renderToStaticMarkup(
  <Brand css={{ color: "$green8" }} size="md" />
);
const BrandLogoMarkupLG = ReactDOM.renderToStaticMarkup(
  <Brand css={{ color: "$green8" }} size="lg" />
);

var stringToHTML = function (str: string) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body.getElementsByTagName("svg")[0];
};

const logos = [
  // BrandNameMarkupSM,
  // BrandNameMarkupMD,
  // BrandNameMarkupLG,
  BrandLogoMarkupSM,
  BrandLogoMarkupMD,
  BrandLogoMarkupLG,
];

function createFallingElement() {
  for (let i = 0; i < 8; i++) {
    const randomEmoji = logos[Math.floor(Math.random() * (logos.length - 1))];

    const element = document.createElement("div");
    element.innerHTML = randomEmoji;
    element.classList.add("falling-element");

    const maxX = window.innerWidth;
    const randomX = Math.random() * maxX;
    // const maxY = window.innerHeight;
    const maxRandomHeight = Math.random() * window.innerHeight;
    const maxY = maxRandomHeight;
    const randomY = Math.random() * maxY;
    console.log(maxY);

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;

    container.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 50000);
  }
}

export const useFallingRealtairElements = () => {
  React.useEffect(() => {
    const interval = setInterval(createFallingElement, 2000); //
    // createFallingElement();

    return () => {
      clearInterval(interval);
      document.querySelectorAll(".falling-element").forEach((element) => {
        element.remove();
      });
    };
  }, []);
};
