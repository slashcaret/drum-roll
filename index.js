// document.querySelector('button').addEventListener("click", function () {
//     alert("I got Cliked!");
// });

// var list = document.querySelectorAll(".drum");
// list.forEach(element => {
//     element.addEventListener("click", function () {
//         alert("I got clicked too!");
//     });
// });

var list = document.querySelectorAll(".drum");
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {

        var buttonPressed = this.textContent;

        switch (buttonPressed) {
            case "w":
                var w = new Audio("sounds/tom-1.mp3");
                w.play();
                break;
            case "a":
                var a = new Audio("sounds/tom-2.mp3");
                a.play();
                break;

            case "s":
                var s = new Audio("sounds/tom-3.mp3");
                s.play();
                break;

            case "d":
                var d = new Audio("sounds/tom-4.mp3");
                d.play();
                break;

            case "j":
                var j = new Audio("sounds/snare.mp3");
                j.play();
                break;

            case "k":
                var k = new Audio("sounds/crash.mp3");
                k.play();
                break;

            case "l":
                var l = new Audio("sounds/kick-bass.mp3");
                l.play();
                break;

            default:
                console.log(this.textContent);
                break;
        }

        // if (list[i].textContent == "w") {
        //     var w = new Audio("sounds/tom-1.mp3");
        //     w.play();
        // }
        // else {
        //     var w = new Audio("sounds/crash.mp3");
        //     w.play();
        // }

    });

}