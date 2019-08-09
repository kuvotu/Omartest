$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $("body,html").css({ "overflow": "auto" });
});

if (window.innerHeight >= 1024 && (window.innerWidth <= 1024)) {
    $("#hero img").css({ "height": "33vh" });
}

$(document).ready(function () {
    var img, oldImg, newImg;
    var imgarr = ["http://localhost:5500/img/Closeup_Ear_botany_Nature_7776x5184.jpg",
        "http://localhost:5500/img/luca-bravo-24241.jpg",
        "http://localhost:5500/img/nik-shuliahin-359344.jpg"];
    $("#hero a img").click(function () {
        img = $(this)[0];
        oldImg = $(".modal-content .image img")[0];
        newImg = new Image();
        if (oldImg !== undefined) {
            if (img.src === oldImg.src) {

            } else {
                newImg.src = img.src;
                $(".modal-content .image img").replaceWith(newImg);
            }
        } else {
            newImg.src = img.src;
            $(".modal-content .image").append(newImg);
        }
    });

    $("#next").click(function (e) {
        oldImg = $(".modal-content .image img")[0];
        let i = imgarr.indexOf(oldImg.src);
        if (i >= imgarr.length - 1) {
            i = -1;
        }
        newImg.src = imgarr[++i];
        $(".modal-content .image img").replaceWith(newImg);
        e.preventDefault();
        console.log(i);

    });

    $("#prev").click(function (e) {
        oldImg = $(".modal-content .image img")[0];
        let i = imgarr.indexOf(oldImg.src);
        if (i <= 0) {
            i = imgarr.length;
        }
        $(".modal-content .image img").replaceWith(newImg);
        newImg.src = imgarr[--i];
        e.preventDefault();
        console.log(i);
    });
});
