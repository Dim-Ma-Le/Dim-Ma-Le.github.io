(function init() {
    "use strict";

    const img = document.getElementById("test");

    function changeImage() {
        console.log(img.src);
        let url = img.src.match("testb.png");
        console.log(url);
        if (url) {
            img.src = "pics/icon.png";
        } else {
            img.src = "pics/testb.png";
        }
    }
    changeImage();

    img.addEventListener("click", changeImage, false);
})();
