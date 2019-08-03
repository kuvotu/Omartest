$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

if (window.innerHeight >= 1024 && (window.innerWidth <= 1024)) {
    $("#hero img").css({ "height": "33vh" });
}

$(document).ready(function () {
    var img, oldImg, newImg;
    $("#hero a img").click(function () {
        img = $(this)[0];
        oldImg = $(".modal-content img")[0];
        newImg = new Image();
        if (oldImg !== undefined) {
            if (img.src === oldImg.src) {

            } else {
                newImg.src = img.src;
                $(".modal-content img").replaceWith(newImg);
            }
        } else {
            newImg.src = img.src;
            $(".modal-content").append(newImg);
        }
    });
});