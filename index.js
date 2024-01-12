export default class popAbove {
    //elementId is the id of the element which will have a pop up above 
    constructor (elementID, textContent) {
        //get the element by id
        this.elementID = document.querySelector (`#${elementID}`);
        //textContent is the text which will apear inside the pop up
        this.textContent = textContent
    }


}