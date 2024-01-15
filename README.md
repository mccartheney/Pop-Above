# Pop_above

Pop_above is a tool to easily create one popUp above any div.
That pop up can be easily styled but any way it comes with a own style.


## Screenshots

Showing pop up
![actived Screenshot](./images/active.png)

hidden pop Up
![not active Screenshot](./images/not%20active.png)


## Instalation

You can install pop above with the following command

```bash
npm i pop-above
```
    
## Documentation

To add a pop up with pop above you first need to create one div, in HTML file, with position relative and a one id to use this id to localize the div with js (you can style this div however you want).

```html
<div id="pop_here" style="position : relative"> 
    <p> 
        hover-me to see the pop up
    </p>
</div>
```

In js file you need to import the pop_above 

```js
import pop_above from "pop_above";
```
pop_above will have 4 arguments and they are :
- elementID
    - elementID is the id which have been created previosly and is where the pop up will appear above
- content 
    - content is the html content that will appear inside the pop up
- pxAbove
    - pxAbove is the amount of pixels which is between the div and the pop up
- backgroundColor
    - backgroundColor is the background color of the pop up


First its necessary inicialize the pop Up
```js
let content = `
    <p>Im a pop up text</p>
    <button>Im a pop up button</button>
`;

let backgroundColor = "rgb(48, 17, 120)";

let popUp = new pop_above ("pop_here", content, 40 backgroundColor);
```

To add a class to pop up for css customization is necessaty add a class to it
```js
popUp.defineClassName ("popUp_class");
```

to activate the pop up is necessary to use the activePopUp()

```js
popUp.activePopUp();
```

[Documentation](https://www.npmjs.com/package/pop-above)


## Author

Mccartheney 

- linkedIn - [Mccartheney Mendes](https://www.linkedin.com/in/mccartheney-mendes-892709292/)
- github - [Mccartheney Mendes](https://github.com/mccartheney)
- Frontend Mentor - [@mccartheney](https://www.frontendmentor.io/profile/mccartheney)