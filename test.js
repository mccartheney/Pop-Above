import popAbove from "./index.js";

let popUpContent = `
    <p>Hello World !</p>
    <button>ok</button>
`;

const popUp = new popAbove("popHere", popUpContent, "50");
popUp.defineClassName("myPopUP");
popUp.activePopUp();