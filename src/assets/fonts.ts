// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import bold from "./bold.ttf";
import light from "./light.ttf";
import medium from "./semibold.ttf";
import regular from "./regular.ttf";

const fontFace = `
@font-face {
  font-family: "TT Commons";
  src: url("https://static.realtair.com/src/assets/light.ttf");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "TT Commons";
  src: url(https://static.realtair.com/src/assets/regular.ttf);
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "TT Commons";
  src: url(https://static.realtair.com/src/assets/semibold.ttf);
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "TT Commons";
  src: url(https://static.realtair.com/src/assets/bold.ttf);
  font-weight: 600;
  font-style: normal;
}
`;

export { bold, light, medium, regular, fontFace };
