// let innerHeight = window.innerHeight;
// let innerWidth = window.innerWidth;

// function createFeathers(number, blurArray) {
//     for (let index = 0; index < number; index++) {
//         var newImage = document.createElement("img");
//         let randNum = gsap.utils.random(0, 23).toFixed(0);
//         newImage.src = "./feathers/feather" + randNum + ".png";
//         newImage.classList.add("el");
//         newImage.classList.add("rellax");
//         newImage.setAttribute("data-rellax-speed", 10 - blurArray[index]);
//         document.body.insertBefore(newImage, document.querySelector("script"));
//     }
// }

// var blurArray = new Array(30);

// for (let index = 0; index < 30; index++) {
//     blurArray[index] = gsap.utils.random(0, 10);
// }


// createFeathers(30, blurArray);

var rellax = new Rellax(".rellax");

// let array = document.querySelectorAll(".el");

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     gsap.set(element, {
//         left: gsap.utils.random(0, innerWidth),
//         top: gsap.utils.random(0, innerHeight),
//         width: (15 - blurArray[index].toFixed(0)) + "%",
//         filter: "blur(" + blurArray[index] + "px)",
//         zIndex: 0 - blurArray[index].toFixed(0)
//     });
// };