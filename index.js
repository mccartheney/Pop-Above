export default class popAbove {
    //elementId is the id of the element which will have a pop up above 
    constructor (elementID, content, pxAbove, backgroundColor) {
        //get the element by id
        this.elementID = document.querySelector (`#${elementID}`);
        //content is the html content which will apear inside the pop up
        this.content = content;
        //pxAbove is the amount of px which is between the popUp and the selected div
        this.pxAbove = pxAbove;
        //popUp is the popUp which will appear to user
        this.popUp = document.createElement("div");
        //background color for popUp
        this.backgroundColor = backgroundColor;
    }

    //with this user can change the style easily withb css
    defineClassName = (className) => {this.popUp.classList.add (className)};

    activePopUp= () => {
        this.elementID.addEventListener(`mouseenter`, () => {
            //creation of the triangle below popUp
            let square = document.createElement ("div");
            square.style.width = "20px";
            square.style.height = "20px";
            square.style.position = "absolute";
            square.style.bottom = "-10px";
            square.style.zIndex = "-2";
            square.style.transform = "rotate(45deg)";
            square.style.left = " calc(50% - 10px)";
            square.style.backgroundColor = this.backgroundColor;
            
            //adding the content to popUp
            this.popUp.innerHTML = this.content
            //setting the amount of pixels the popUp will be about the div
            this.popUp.style.top = `-${this.pxAbove}px`;
            //setting dispçay to absoluto is essecial for correct funcionality
            this.popUp.style.position = `absolute`;
            //background color to popUp
            this.popUp.style.backgroundColor = this.backgroundColor;
            //adding the popUP to the div
            this.elementID.appendChild(this.popUp);
            //adding square to the div
            this.popUp.appendChild(square)
        })

        //when the mouse leave the div, the popUp will disapear
        this.elementID.addEventListener(`mouseleave`, () => {
            this.popUp.remove();
        })
    }
}