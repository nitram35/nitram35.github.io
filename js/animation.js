// Define DOM elements

const heroImage = document.querySelector("#hero__animation__img");
;
const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
// const bl = document.querySelector("#grid__bl");
// const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
// const blBtn = document.querySelector("#grid__bl__btn");
// const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
// const blContent = document.querySelector("#grid__bl__content");
// const brContent = document.querySelector("#grid__br__content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define the corner that is open
let activeCorner = "";

// Add event listener to the window object to listen for resize events
window.addEventListener("resize", handleWindowResize);

// Define the function that handles the window resize event --> handleWindowResize

function handleWindowResize() {
    switch (activeCorner) {
        case "top-left":
            // responsive design for mobile or desktop
            if (window.innerWidth < 1100) {
                tlActive = "translateX(0) translateY(0)";
                tlContent.style.transform = "translateX(0) translateY(0)";
                tlContent.style.height = "100vh";
                tlContent.style.width = "100vw";
                tlContent.style.top = "0";
                tlContent.style.display = "flex";
                tlContent.style.alignItems = "center";
                tlContent.style.justifyContent = "center";
                tlContent.style.background = "var(--bg-transparent)";
                tlContent.style.zIndex = "200";
                tlBtn.style.zIndex = "300";
                // trBtn.style.zIndex = "300";
                // blBtn.style.zIndex = "300";
                // brBtn.style.zIndex = "300";
            } else {
                tlActive = "translateX(0) translateY(0)";
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.height = "0";
                tlContent.style.width = "30vw";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
            }
            break;
        case "top-right":
            // code
            break;
        case "bottom-left":
            // code
            break;
        case "bottom-right":
            // code
            break;
    }
};

// Store the last reverse animation, ready to be played 
let lastReverseAnimation = "";

// Play animation function
function playAnimation(animation, reverseAnimation) {
    // remove all the animations classes existing in the hero image
    heroImage.className = "";
    if (lastReverseAnimation !== "") {
        // if we've clicked something
        // reverse animation code here
        // We create first class animaiton and then remove it after 200ms
        heroImage.classList.add(lastReverseAnimation);
        setTimeout(function () {
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation)
            // new reverse animation
            lastReverseAnimation = reverseAnimation;
        }, 200);
    } else {
        // play forward animation when we click for 1st time after load page
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }
};

// Play animation function
function playClosingAnimation(reverseAnimation) {
    tlBtn.innerHTML = "About";
    // trBtn.innerHTML = "Experience";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contact";
    switch (activeCorner) {
        case "top-left":
            tlBtn.style.background = bgColor;
            tlBtn.style.color = textColor;
            tlContent.style.transform = tlHidden;
            break;
        // case "top-right":
        //     trBtn.style.background = bgColor;
        //     trBtn.style.color = textColor;
        //     trContent.style.transform = tlHidden;
        //     break;
        // case "bottom-left":
        //     blBtn.style.background = bgColor;
        //     blBtn.style.color = textColor;
        //     blContent.style.transform = tlHidden;
        //     break;
        // case "bottom-right":
        //     brBtn.style.background = bgColor;
        //     brBtn.style.color = textColor;
        //     brContent.style.transform = tlHidden;
        //     break;
        default:
    }

    // We remove what is in excess before...
    heroImage.className = "";
    lastReverseAnimation = "";
    activeCorner = "";
    // adding a new reverse animation
    heroImage.classList.add(reverseAnimation);
    setTimeout(function () {
        heroImage.classList.remove(reverseAnimation);
    }, 200);
};

// Onclick corner button functions
tlBtn.onclick = function () {
    if (activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left");
    } else {
        // trBtn.innerHTML = "Experience";
        // blBtn.innerHTML = "Projects";
        // brBtn.innerHTML = "Contact";
        // Setting active corner
        activeCorner = "top-left";
        // We add the arrow
        tlBtn.innerHTML = "&uarr;<br/>About";
        // We want do handle the size of content
        handleWindowResize();
        // We play the animation, "animate-top-left" and "reverse..."" are classes we are creating in stylesheet
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change background colors
        // trBtn.style.backgroundColor = bgColor;
        // brBtn.style.backgroundColor = bgColor;
        tlBtn.style.backgroundColor = bgColorAlt;
        // blBtn.style.backgroundColor = bgColor;

        // Change text colors
        // trBtn.style.color = textColor;
        // brBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;
        // blBtn.style.color = textColor;

        // Change posiitons of the corner content
        // trContent.style.transform = trHidden;
        // brContent.style.transform = brHidden;
        tlContent.style.transform = tlActive;
        // blContent.style.transform = blHidden;
    }
};

// trBtn.onclick = function () {
//     if (activeCorner === "top-right") {
//         playClosingAnimation("reverse-animate-top-right");
//     } else {
//         tlBtn.innerHTML = "About";
//         blBtn.innerHTML = "Projects";
//         brBtn.innerHTML = "Contact";
//         // Setting active corne
//         activeCorner = "top-right";
//         // We add the arrow
//         trBtn.innerHTML = "&uarr;<br/>Experience";
//         // We want do handle the size of content
//         handleWindowResize();
//         // We play the animation, "animate-top-left" and "reverse..."" are classes we are creating in stylesheet
//         playAnimation("animate-top-right", "reverse-animate-top-right");

//         // Change background colors
//         trBtn.style.backgroundColor = bgColorAlt;
//         brBtn.style.backgroundColor = bgColor;
//         tlBtn.style.backgroundColor = bgColor;
//         blBtn.style.backgroundColor = bgColor;

//         // Change text colors
//         trBtn.style.color = textColorAlt;
//         brBtn.style.color = textColor;
//         tlBtn.style.color = textColor;
//         blBtn.style.color = textColor;

//         // Change posiitons of the corner content
//         trContent.style.transform = trActive;
//         brContent.style.transform = brHidden;
//         tlContent.style.transform = tlHidden;
//         blContent.style.transform = blHidden;
//     }
// }

// blBtn.onclick = function () {
//     tlBtn.innerHTML = "About";
//     brBtn.innerHTML = "Contact";
//     trBtn.innerHTML = "Experience";
//     if (activeCorner === "bottom-left") {
//         playClosingAnimation("reverse-animate-bottom-left");
//     } else {
//         // Setting active corne
//         activeCorner = "bottom-left";
//         // We add the arrow
//         blBtn.innerHTML = "Projects<br/>&darr";
//         // We want do handle the size of content
//         handleWindowResize();
//         // We play the animation, "animate-top-left" and "reverse..."" are classes we are creating in stylesheet
//         playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

//         // Change background colors
//         trBtn.style.backgroundColor = bgColor;
//         brBtn.style.backgroundColor = bgColor;
//         tlBtn.style.backgroundColor = bgColor;
//         blBtn.style.backgroundColor = bgColorAlt;

//         // Change text colors
//         trBtn.style.color = textColor;
//         brBtn.style.color = textColor;
//         tlBtn.style.color = textColor;
//         blBtn.style.color = textColorAlt;

//         // Change posiitons of the corner content
//         trContent.style.transform = trHidden;
//         brContent.style.transform = brHidden;
//         tlContent.style.transform = tlHidden;
//         blContent.style.transform = blActive;
//     }
// };

// brBtn.onclick = function () {
//     tlBtn.innerHTML = "About";
//     blBtn.innerHTML = "Projects";
//     trBtn.innerHTML = "Experience";
//     if (activeCorner === "bottom-right") {
//         playClosingAnimation("reverse-animate-bottom-right");
//     } else {
//         // Setting active corne
//         activeCorner = "bottom-right";
//         // We add the arrow
//         brBtn.innerHTML = "Contact<br/>&darr";
//         // We want do handle the size of content
//         handleWindowResize();
//         // We play the animation, "animate-top-left" and "reverse..."" are classes we are creating in stylesheet
//         playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

//         // Change background colors
//         trBtn.style.backgroundColor = bgColor;
//         brBtn.style.backgroundColor = bgColorAlt;
//         tlBtn.style.backgroundColor = bgColor;
//         blBtn.style.backgroundColor = bgColor;

//         // Change text colors
//         trBtn.style.color = textColor;
//         brBtn.style.color = textColorAlt;
//         tlBtn.style.color = textColor;
//         blBtn.style.color = textColor;

//         // Change posiitons of the corner content
//         trContent.style.transform = trHidden;
//         brContent.style.transform = brActive;
//         tlContent.style.transform = tlHidden;
//         blContent.style.transform = blHidden;
//     }
// };

