// Start button
$("#button-continue").click(() => scrollTo("#stop-1"));

// Menu Actions
$("#stops-title").click(() => scrollTo("#park-map"));
$("#stop-menu-1").click(() => scrollTo("#stop-1"));
$("#stop-menu-2").click(() => scrollTo("#stop-2"));
$("#stop-menu-3").click(() => scrollTo("#stop-3"));
$("#stop-menu-4").click(() => scrollTo("#stop-4"));
$("#stop-menu-5").click(() => scrollTo("#stop-5"));
$("#stop-menu-6").click(() => scrollTo("#stop-6"));

$("#stop-menu-list-1").click(() => scrollTo("#stop-1"));
$("#stop-menu-list-2").click(() => scrollTo("#stop-2"));
$("#stop-menu-list-3").click(() => scrollTo("#stop-3"));
$("#stop-menu-list-4").click(() => scrollTo("#stop-4"));
$("#stop-menu-list-5").click(() => scrollTo("#stop-5"));
$("#stop-menu-list-6").click(() => scrollTo("#stop-6"));

// Float buttons action
$("#go-to-up").click(() => goBack());
$("#go-to-park").click(() => {
    $("#park-map").addClass("show");
    scrollTo("#park-map")
});

// Show initial time lines
$("#stop-1-time-line-1").show();
$("#stop-2-time-line-1").show();
$("#stop-3-time-line-1").show();
$("#stop-4-time-line-1").show();
$("#stop-5-time-line-1").show();
$("#stop-6-time-line-1").show();

// On scroll event
$(window).scroll(() => showOrNotGoToUp());
showOrNotGoToUp();

// Hid or show floating button
function showOrNotGoToUp() {
    var st = $(window).scrollTop();
    var vpH = $(window).height(); // Viewport Height
    var stop7IsVisible = checkVisible("#stop-7", "visible");
    if (st <= (vpH + 200) || stop7IsVisible) {
        $('#floating-menu').hide();
    } else {
        $('#floating-menu').show();
    }
}

// Scroll to element
function scrollTo(elm) {
    $('html, body').animate({ scrollTop: $(elm).offset().top }, 'slow');
}

// Validate if element is visible
function checkVisible(elm, evalType) {
    evalType = evalType || "visible";

    var vpH = $(window).height(); // Viewport Height
    var st = $(window).scrollTop(); // Scroll Top

    var y = $(elm).offset().top;
    var elementHeight = $(elm).height();

    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (evalType === "above") return ((y < (vpH + st)));
}

// Current stop on history
var currentStop = 1;

// stop 1 action **************************************************************************
$("#action-get-on").click(() => stop1next(1));

var positionStop1 = 0;

function stop1next(add) {
    if (positionStop1 + add < 0) {
        scrollTo("#park-map");
    }
    if (positionStop1 + add > 8) {
        scrollTo("#stop-2");
    }
    if (positionStop1 + add < 0 || positionStop1 + add > 8) {
        return;
    }
    currentStop = 1;
    positionStop1 = positionStop1 + add;
    switch (positionStop1) {
        case 0:
            $("#stop-1-image-ilustration-action").removeClass("show");
            $("#stop-1-dialog-action-container").removeClass("show");
            $("#arrow-get-on").removeClass("hidden");
            $("#stop-1-dialog-get-on-container").removeClass("hidden");

            $("#stop-1-time-line-1").show();
            $("#stop-1-time-line-2").hide();
            break;
        case 1:
            if (add > 0) {
                new Audio('./sounds/sound-stop-1-go-up.mp3').play();
            }
            $("#stop-1-image-ilustration-action").addClass("show");
            $("#stop-1-dialog-action-container").addClass("show");
            $("#arrow-get-on").addClass("hidden");
            $("#stop-1-dialog-get-on-container").addClass("hidden");

            $("#stop-1-dialog-action-container").addClass("show");
            $("#stop-1-dialog-2-container").removeClass("show");

            $("#stop-1-time-line-1").hide();
            $("#stop-1-time-line-2").show();
            $("#stop-1-time-line-3").hide();
            break;
        case 2:
            $("#stop-1-dialog-action-container").removeClass("show");
            $("#stop-1-dialog-2-container").addClass("show");

            $("#stop-1-dialog-3-container").removeClass("show");

            $("#stop-1-time-line-2").hide();
            $("#stop-1-time-line-3").show();
            $("#stop-1-time-line-4").hide();
            break;
        case 3:
            $("#stop-1-dialog-3-container").addClass("show");

            $("#stop-1-dialog-2-container").addClass("show");
            $("#stop-1-dialog-3-container").addClass("show");
            $("#stop-1-dialog-4-img").removeClass("show");

            $("#stop-1-time-line-3").hide();
            $("#stop-1-time-line-4").show();
            $("#stop-1-time-line-5").hide();
            break;
        case 4:
            $("#stop-1-dialog-2-container").removeClass("show");
            $("#stop-1-dialog-3-container").removeClass("show");
            $("#stop-1-dialog-4-img").addClass("show");

            $("#stop-1-dialog-4-img").addClass("show");
            $("#stop-1-dialog-5-container").removeClass("show");

            $("#stop-1-time-line-4").hide();
            $("#stop-1-time-line-5").show();
            $("#stop-1-time-line-6").hide();
            break;
        case 5:
            $("#stop-1-dialog-4-img").removeClass("show");
            $("#stop-1-dialog-5-container").addClass("show");

            $("#stop-1-dialog-5-container").addClass("show");
            $("#stop-1-dialog-6-img").removeClass("show");

            $("#stop-1-time-line-5").hide();
            $("#stop-1-time-line-6").show();
            $("#stop-1-time-line-7").hide();
            break;
        case 6:
            $("#stop-1-dialog-5-container").removeClass("show");
            $("#stop-1-dialog-6-img").addClass("show");

            $("#stop-1-dialog-6-img").addClass("show");
            $("#stop-1-dialog-7-container").removeClass("show");

            $("#stop-1-time-line-6").hide();
            $("#stop-1-time-line-7").show();
            $("#stop-1-time-line-8").hide();
            break;
        case 7:
            $("#stop-1-dialog-6-img").removeClass("show");
            $("#stop-1-dialog-7-container").addClass("show");

            $("#stop-1-time-line-7").hide();
            $("#stop-1-time-line-8").show();

            scrollTo("#stop-1");
            break;
        case 8:
            scrollTo("#stop-2");
            break;
    }
}

// Stop 2 **************************************************************************
$("#stop-2-game").click(() => stop2next(1));

var positionStop2 = 0;

function stop2next(add) {
    if (positionStop2 + add < 0) {
        currentStop = 1;
        scrollTo("#stop-1");
    }
    if (positionStop2 + add > 12) {
        scrollTo("#stop-3");
    }
    if (positionStop2 + add < 0 || positionStop2 + add > 12) {
        return;
    }
    currentStop = 2;
    positionStop2 = positionStop2 + add;
    switch (positionStop2) {
        case 0:
            $("#stop-2-dialog-0-container").addClass("show");
            $("#arrow-stop-2").show();
            $("#stop-2-ilustration").removeClass("show");
            $("#stop-2-cloud-1").removeClass("show");

            $("#stop-2-time-line-1").show();
            $("#stop-2-time-line-2").hide();
            break;
        case 1:
            if (add > 0) {
                new Audio('./sounds/sound-stop-2-columpio.mp3').play();
            }
            $("#stop-2-dialog-0-container").removeClass("show");
            $("#arrow-stop-2").hide();
            $("#stop-2-ilustration").addClass("show");
            $("#stop-2-cloud-1").addClass("show");

            $("#stop-2-cloud-1").addClass("show");
            $("#stop-2-dialog-1-container").removeClass("show");

            $("#stop-2-time-line-1").hide();
            $("#stop-2-time-line-2").show();
            $("#stop-2-time-line-3").hide();
            break;
        case 2:
            $("#stop-2-cloud-1").removeClass("show");
            $("#stop-2-dialog-1-container").addClass("show");

            $("#stop-2-dialog-1-container").addClass("show");
            $("#stop-2-cloud-2").removeClass("show");

            $("#stop-2-time-line-2").hide();
            $("#stop-2-time-line-3").show();
            $("#stop-2-time-line-4").hide();
            break;
        case 3:
            $("#stop-2-dialog-1-container").removeClass("show");
            $("#stop-2-cloud-2").addClass("show");

            $("#stop-2-cloud-2").addClass("show");
            $("#stop-2-dialog-2-container").removeClass("show");

            $("#stop-2-time-line-3").hide();
            $("#stop-2-time-line-4").show();
            $("#stop-2-time-line-5").hide();
            break;
        case 4:
            $("#stop-2-cloud-2").removeClass("show");
            $("#stop-2-dialog-2-container").addClass("show");

            $("#stop-2-dialog-2-container").addClass("show");
            $("#stop-2-cloud-3").removeClass("show");

            $("#stop-2-time-line-4").hide();
            $("#stop-2-time-line-5").show();
            $("#stop-2-time-line-6").hide();
            break;
        case 5:
            $("#stop-2-dialog-2-container").removeClass("show");
            $("#stop-2-cloud-3").addClass("show");

            $("#stop-2-cloud-3").addClass("show");
            $("#stop-2-dialog-3-container").removeClass("show");

            $("#stop-2-time-line-5").hide();
            $("#stop-2-time-line-6").show();
            $("#stop-2-time-line-7").hide();
            break;
        case 6:
            $("#stop-2-cloud-3").removeClass("show");
            $("#stop-2-dialog-3-container").addClass("show");

            $("#stop-2-dialog-4-container").removeClass("show");

            $("#stop-2-time-line-6").hide();
            $("#stop-2-time-line-7").show();
            $("#stop-2-time-line-8").hide();
            break;
        case 7:
            $("#stop-2-dialog-4-container").addClass("show");

            $("#stop-2-dialog-3-container").addClass("show");
            $("#stop-2-dialog-4-container").addClass("show");
            $("#stop-2-cloud-4").removeClass("show");

            $("#stop-2-time-line-7").hide();
            $("#stop-2-time-line-8").show();
            $("#stop-2-time-line-9").hide();
            break;
        case 8:
            $("#stop-2-dialog-3-container").removeClass("show");
            $("#stop-2-dialog-4-container").removeClass("show");
            $("#stop-2-cloud-4").addClass("show");

            $("#stop-2-cloud-4").addClass("show");
            $("#stop-2-dialog-5-container").removeClass("show");

            $("#stop-2-time-line-8").hide();
            $("#stop-2-time-line-9").show();
            $("#stop-2-time-line-10").hide();
            break;
        case 9:
            $("#stop-2-cloud-4").removeClass("show");
            $("#stop-2-dialog-5-container").addClass("show");

            $("#stop-2-dialog-6-container").removeClass("show");

            $("#stop-2-time-line-9").hide();
            $("#stop-2-time-line-10").show();
            $("#stop-2-time-line-11").hide();
            break;
        case 10:
            $("#stop-2-dialog-6-container").addClass("show");

            $("#stop-2-dialog-5-container").addClass("show");
            $("#stop-2-dialog-6-container").addClass("show");
            $("#stop-2-cloud-5").removeClass("show");

            $("#stop-2-time-line-10").hide();
            $("#stop-2-time-line-11").show();
            $("#stop-2-time-line-12").hide();

            break;
        case 11:
            $("#stop-2-dialog-5-container").removeClass("show");
            $("#stop-2-dialog-6-container").removeClass("show");
            $("#stop-2-cloud-5").addClass("show");

            $("#stop-2-time-line-11").hide();
            $("#stop-2-time-line-12").show();

            scrollTo("#stop-2");

            break;
        case 12:
            scrollTo("#stop-3");
            break;
    }
}

// Stop 3 **************************************************************************
$("#button-deactivate").click(() => stop3next(1));
$("#button-actived").click(() => stop3next(1));

var positionStop3 = 0;

function stop3next(add) {
    if (positionStop3 + add < 0) {
        currentStop = 2;
        scrollTo("#stop-2");
    }
    if (positionStop3 + add > 11) {
        scrollTo("#stop-4");
    }
    if (positionStop3 + add < 0 || positionStop3 + add > 11) {
        return;
    }
    currentStop = 3;
    positionStop3 = positionStop3 + add;
    switch (positionStop3) {
        case 0:
            $("#stop-3-dialog-pull-container").addClass("show");
            $("#stop-3-dialog-1-container").removeClass("show");

            $("#stop-3-time-line-1").show();
            $("#stop-3-time-line-2").hide();
            break;
        case 1:
            $("#stop-3-dialog-pull-container").removeClass("show");
            $("#stop-3-dialog-1-container").addClass("show");

            $("#stop-3-dialog-1-container").addClass("show");
            $("#stop-3-dialog-2-container").removeClass("show");

            $("#stop-3-time-line-1").hide();
            $("#stop-3-time-line-2").show();
            $("#stop-3-time-line-3").hide();
            break;
        case 2:
            $("#stop-3-dialog-1-container").removeClass("show");
            $("#stop-3-dialog-2-container").addClass("show");

            $("#stop-3-dialog-2-container").addClass("show");
            $("#stop-3-cloud-1").removeClass("show");

            $("#stop-3-time-line-2").hide();
            $("#stop-3-time-line-3").show();
            $("#stop-3-time-line-4").hide();
            break;
        case 3:
            $("#stop-3-dialog-2-container").removeClass("show");
            $("#stop-3-cloud-1").addClass("show");

            $("#stop-3-cloud-1").addClass("show");
            $("#stop-3-dialog-3-container").removeClass("show");

            $("#stop-3-time-line-3").hide();
            $("#stop-3-time-line-4").show();
            $("#stop-3-time-line-5").hide();
            break;
        case 4:
            $("#stop-3-cloud-1").removeClass("show");
            $("#stop-3-dialog-3-container").addClass("show");

            $("#stop-3-dialog-3-container").addClass("show");
            $("#stop-3-cloud-2").removeClass("show");

            $("#stop-3-time-line-4").hide();
            $("#stop-3-time-line-5").show();
            $("#stop-3-time-line-6").hide();
            break;
        case 5:
            $("#stop-3-dialog-3-container").removeClass("show");
            $("#stop-3-cloud-2").addClass("show");

            $("#stop-3-cloud-2").addClass("show");
            $("#stop-3-dialog-4-container").removeClass("show");

            $("#stop-3-time-line-5").hide();
            $("#stop-3-time-line-6").show();
            $("#stop-3-time-line-7").hide();
            break;
        case 6:
            $("#stop-3-cloud-2").removeClass("show");
            $("#stop-3-dialog-4-container").addClass("show");

            $("#stop-3-dialog-5-container").removeClass("show");

            $("#stop-3-time-line-6").hide();
            $("#stop-3-time-line-7").show();
            $("#stop-3-time-line-8").hide();
            break;
        case 7:
            $("#stop-3-dialog-5-container").addClass("show");

            $("#stop-3-dialog-4-container").addClass("show");
            $("#stop-3-dialog-5-container").addClass("show");
            $("#stop-3-cloud-3").removeClass("show");

            $("#stop-3-time-line-7").hide();
            $("#stop-3-time-line-8").show();
            $("#stop-3-time-line-9").hide();
            break;
        case 8:
            $("#stop-3-dialog-4-container").removeClass("show");
            $("#stop-3-dialog-5-container").removeClass("show");
            $("#stop-3-cloud-3").addClass("show");

            $("#stop-3-cloud-3").addClass("show");
            $("#stop-3-dialog-6-container").removeClass("show");

            $("#stop-3-time-line-8").hide();
            $("#stop-3-time-line-9").show();
            $("#stop-3-time-line-10").hide();
            break;
        case 9:
            $("#stop-3-cloud-3").removeClass("show");
            $("#stop-3-dialog-6-container").addClass("show");

            $("#stop-3-dialog-6-container").addClass("show");
            $("#stop-3-dialog-7-container").removeClass("show");

            $("#stop-3-time-line-9").hide();
            $("#stop-3-time-line-10").show();
            $("#stop-3-time-line-11").hide();

            break;
        case 10:
            $("#stop-3-dialog-6-container").removeClass("show");
            $("#stop-3-dialog-7-container").addClass("show");

            $("#stop-2-arrow-red").show();
            $("#stop-3-dialog-7-container").addClass("show");

            $("#button-deactivate").show();
            $("#stop-3-dialog-pull-container").show();
            $("#button-actived").hide();

            $("#demon-hand").removeClass("move-hand");
            $("#chain-man").removeClass("move-chain-man");

            $("#stop-3-time-line-10").hide();
            $("#stop-3-time-line-11").show();

            scrollTo("#stop-3");
            break;
        case 11:
            $("#stop-2-arrow-red").hide();
            $("#stop-3-dialog-7-container").removeClass("show");

            if (add > 0) {
                new Audio('./sounds/sound-stop-3-chains.mp3').play();
            }

            $("#button-deactivate").hide();
            $("#stop-3-dialog-pull-container").hide();
            $("#button-actived").show();

            $("#demon-hand").addClass("move-hand");
            $("#chain-man").addClass("move-chain-man");

            setTimeout(() => { scrollTo("#stop-4"); }, 500);
            break;
    }
}

// Stop 4 **************************************************************************
$('#stop-4-dialog-3-container')
    .mouseenter(function () {
        $("#stop-4-dialog-3-image-supercontainer").hide();
    })
    .mouseleave(function () {
        $("#stop-4-dialog-3-image-supercontainer").show();
    });

$("#fire-man").click(() => stop4nextAction());
$("#game-stop-4").click(() => stop4nextGame());

var positionStop4 = 0;

function stop4nextAction() {
    if (positionStop4 == 0) {
        stop4next(1)
    }
}

function stop4nextGame() {
    if (positionStop4 != 0) {
        stop4next(1)
    }
}

function stop4next(add) {
    if (positionStop4 + add < 0) {
        currentStop = 3;
        scrollTo("#stop-3");
    }
    if (positionStop4 + add > 10) {
        scrollTo("#stop-5");
    }
    if (positionStop4 + add < 0 || positionStop4 + add > 10) {
        return;
    }
    currentStop = 4;
    positionStop4 = positionStop4 + add;
    switch (positionStop4) {
        case 0:
            $("#fire").removeClass("show");
            $("#stop-4-dialog-1-container").removeClass("show");
            $("#stop-4-arrow-red").addClass("show");
            $("#stop-4-dialog-0-container").addClass("show");

            $("#stop-4-time-line-1").show();
            $("#stop-4-time-line-2").hide();
            break;
        case 1:
            if (add > 0) {
                new Audio('./sounds/sound-stop-4-fire.mp3').play();
            }
            $("#fire").addClass("show");
            $("#stop-4-dialog-1-container").addClass("show");
            $("#stop-4-arrow-red").removeClass("show");
            $("#stop-4-dialog-0-container").removeClass("show");

            $("#stop-4-dialog-1-container").addClass("show");
            $("#stop-4-cloud-1").removeClass("show");

            $("#stop-4-time-line-1").hide();
            $("#stop-4-time-line-2").show();
            $("#stop-4-time-line-3").hide();
            break;
        case 2:
            $("#stop-4-dialog-1-container").removeClass("show");
            $("#stop-4-cloud-1").addClass("show");

            $("#stop-4-cloud-1").addClass("show");
            $("#stop-4-dialog-2-container").removeClass("show");

            $("#stop-4-time-line-2").hide();
            $("#stop-4-time-line-3").show();
            $("#stop-4-time-line-4").hide();
            break;
        case 3:
            $("#stop-4-cloud-1").removeClass("show");
            $("#stop-4-dialog-2-container").addClass("show");

            $("#stop-4-dialog-2-container").addClass("show");
            $("#stop-4-dialog-3-container").removeClass("show");
            $("#stop-4-dialog-3-image-supercontainer").removeClass("show");

            $("#stop-4-time-line-3").hide();
            $("#stop-4-time-line-4").show();
            $("#stop-4-time-line-5").hide();
            break;
        case 4:
            $("#stop-4-dialog-2-container").removeClass("show");
            $("#stop-4-dialog-3-container").addClass("show");
            $("#stop-4-dialog-3-image-supercontainer").addClass("show");

            $("#stop-4-dialog-3-container").addClass("show");
            $("#stop-4-dialog-3-image-supercontainer").addClass("show");
            $("#stop-4-dialog-5-container").removeClass("show");

            $("#stop-4-time-line-4").hide();
            $("#stop-4-time-line-5").show();
            $("#stop-4-time-line-6").hide();
            break;
        case 5:
            $("#stop-4-dialog-3-container").removeClass("show");
            $("#stop-4-dialog-3-image-supercontainer").removeClass("show");
            $("#stop-4-dialog-5-container").addClass("show");

            $("#stop-4-dialog-6-container").removeClass("show");

            $("#stop-4-time-line-5").hide();
            $("#stop-4-time-line-6").show();
            $("#stop-4-time-line-7").hide();
            break;
        case 6:
            $("#stop-4-dialog-6-container").addClass("show");

            $("#stop-4-dialog-5-container").addClass("show");
            $("#stop-4-dialog-6-container").addClass("show");
            $("#stop-4-cloud-2").removeClass("show");

            $("#stop-4-time-line-6").hide();
            $("#stop-4-time-line-7").show();
            $("#stop-4-time-line-8").hide();
            break;
        case 7:
            $("#stop-4-dialog-5-container").removeClass("show");
            $("#stop-4-dialog-6-container").removeClass("show");
            $("#stop-4-cloud-2").addClass("show");

            $("#stop-4-cloud-2").addClass("show");
            $("#stop-4-dialog-7-container").removeClass("show");

            $("#stop-4-time-line-7").hide();
            $("#stop-4-time-line-8").show();
            $("#stop-4-time-line-9").hide();
            break;
        case 8:
            $("#stop-4-cloud-2").removeClass("show");
            $("#stop-4-dialog-7-container").addClass("show");

            $("#stop-4-dialog-8-container").removeClass("show");

            $("#stop-4-time-line-8").hide();
            $("#stop-4-time-line-9").show();
            $("#stop-4-time-line-10").hide();

            break;
        case 9:
            $("#stop-4-dialog-8-container").addClass("show");

            $("#stop-4-time-line-9").hide();
            $("#stop-4-time-line-10").show();

            scrollTo("#stop-4");
            break;
        case 10:

            scrollTo("#stop-5");
            break;
    }
}

// Stop 5 **************************************************************************

$("#stop-5-action").click(() => stop5nextAction());
$("#cars").click(() => stop5nextGame());

var positionStop5 = 0;

function stop5nextAction() {
    if (positionStop5 == 0) {
        stop5next(1)
    }
}

function stop5nextGame() {
    if (positionStop5 != 0) {
        stop5next(1)
    }
}

function stop5next(add) {
    if (positionStop5 + add < 0) {
        currentStop = 4;
        scrollTo("#stop-4");
    }
    if (positionStop5 + add > 5) {
        scrollTo("#stop-6");
    }
    if (positionStop5 + add < 0 || positionStop5 + add > 5) {
        return;
    }
    currentStop = 5;
    positionStop5 = positionStop5 + add;
    switch (positionStop5) {
        case 0:
            $("#driver-1").removeClass("active");
            $("#clebrate").removeClass("show");
            $("#coach-2").removeClass("show");
            $("#stop-5-dialog-1-container").removeClass("show");
            $("#coach-1").addClass("show");
            $("#stop-5-arrow-red").addClass("show");
            $("#stop-5-dialog-0-container").addClass("show");

            $("#stop-5-time-line-1").show();
            $("#stop-5-time-line-2").hide();
            break;
        case 1:
            if (add > 0) {
                new Audio('./sounds/sound-stop-5-applause.mp3').play();
            }

            $("#driver-1").addClass("active");
            $("#clebrate").addClass("show");
            $("#coach-1").removeClass("show");
            $("#coach-2").addClass("show");
            $("#stop-5-arrow-red").removeClass("show");
            $("#stop-5-dialog-0-container").removeClass("show");
            $("#stop-5-dialog-1-container").addClass("show");

            $("#stop-5-dialog-1-container").addClass("show");
            $("#stop-5-image-1").removeClass("show");
            $("#stop-5-image-2").removeClass("show");
            $("#stop-5-dialog-2").removeClass("show");

            $("#stop-5-time-line-1").hide();
            $("#stop-5-time-line-2").show();
            $("#stop-5-time-line-3").hide();
            break;
        case 2:
            $("#stop-5-dialog-1-container").removeClass("show");
            $("#stop-5-image-1").addClass("show");
            $("#stop-5-image-2").addClass("show");
            $("#stop-5-dialog-2").addClass("show");

            $("#stop-5-image-1").addClass("show");
            $("#stop-5-image-2").addClass("show");
            $("#stop-5-dialog-2").addClass("show");
            $("#stop-5-dialog-3-container").removeClass("show");

            $("#stop-5-time-line-2").hide();
            $("#stop-5-time-line-3").show();
            $("#stop-5-time-line-4").hide();
            break;
        case 3:
            $("#stop-5-image-1").removeClass("show");
            $("#stop-5-image-2").removeClass("show");
            $("#stop-5-dialog-2").removeClass("show");
            $("#stop-5-dialog-3-container").addClass("show");

            $("#stop-5-dialog-3-container").addClass("show");
            $("#stop-5-image-3").removeClass("show");
            $("#stop-5-image-4").removeClass("show");
            $("#stop-5-dialog-4").removeClass("show");

            $("#stop-5-time-line-3").hide();
            $("#stop-5-time-line-4").show();
            $("#stop-5-time-line-5").hide();
            break;
        case 4:
            $("#stop-5-dialog-3-container").removeClass("show");
            $("#stop-5-image-3").addClass("show");
            $("#stop-5-image-4").addClass("show");
            $("#stop-5-dialog-4").addClass("show");

            $("#stop-5-time-line-4").hide();
            $("#stop-5-time-line-5").show();

            scrollTo("#stop-5");
            break;
        case 5:
            scrollTo("#stop-6");
            break;
    }
}

// Stop 6 **************************************************************************

$('#stop-6-image-1')
    .mouseenter(function () {
        $("#stop-6-dialog-1").hide();
    })
    .mouseleave(function () {
        $("#stop-6-dialog-1").show();
    });


$("#card").click(() => stop6nextAction());
$("#stop-6-game").click(() => stop6nextGame());

var positionStop6 = 0;

function stop6nextAction() {
    if (positionStop6 == 0) {
        stop6next(1)
    }
}

function stop6nextGame() {
    if (positionStop6 != 0) {
        stop6next(1)
    }
}

function stop6next(add) {
    if (positionStop6 + add < 0) {
        currentStop = 5;
        scrollTo("#stop-5");
    }
    if (positionStop6 + add > 4) {
        scrollTo("#stop-7");
    }
    if (positionStop6 + add < 0 || positionStop6 + add > 4) {
        return;
    }
    currentStop = 6;
    positionStop6 = positionStop6 + add;
    switch (positionStop6) {
        case 0:
            $("#card-with-man").removeClass("show");
            $("#stop-6-image-1").removeClass("show");
            $("#stop-6-dialog-1").removeClass("show");

            $("#card-man").addClass("show");
            $("#card").addClass("show");
            $("#take-card").addClass("show");

            $("#card-man").show();
            $("#card").show();
            $("#take-card").show();

            $("#stop-6-time-line-1").show();
            $("#stop-6-time-line-2").hide();
            break;
        case 1:
            if (add > 0) {
                new Audio('./sounds/sound-stop-6-up.mp3').play();
            }

            $("#card-with-man").addClass("show");
            $("#stop-6-image-1").addClass("show");
            $("#stop-6-dialog-1").addClass("show");

            $("#card-man").removeClass("show");
            $("#card").removeClass("show");
            $("#take-card").removeClass("show");

            $("#card-man").hide();
            $("#card").hide();
            $("#take-card").hide();

            $("#stop-6-image-1").addClass("show");
            $("#stop-6-dialog-1").addClass("show");
            $("#stop-6-dialog-2-container").removeClass("show");

            $("#stop-6-time-line-1").hide();
            $("#stop-6-time-line-2").show();
            $("#stop-6-time-line-3").hide();
            break;
        case 2:
            $("#stop-6-image-1").removeClass("show");
            $("#stop-6-dialog-1").removeClass("show");
            $("#stop-6-dialog-2-container").addClass("show");

            $("#stop-6-dialog-2-container").addClass("show");
            $("#stop-6-cloud-1").removeClass("show");

            $("#stop-6-time-line-2").hide();
            $("#stop-6-time-line-3").show();
            $("#stop-6-time-line-4").hide();
            break;
        case 3:
            $("#stop-6-dialog-2-container").removeClass("show");
            $("#stop-6-cloud-1").addClass("show");

            $("#stop-6-time-line-3").hide();
            $("#stop-6-time-line-4").show();

            scrollTo("#stop-6");
            break;
        case 4:
            scrollTo("#stop-7");
            break;
    }
}

// GoBack *************************************************************************

function goBack() {
    switch (currentStop) {
        case 1:
            scrollTo("#stop-1");
            stop1next(-1);
            break;
        case 2:
            scrollTo("#stop-2");
            stop2next(-1);
            break;
        case 3:
            scrollTo("#stop-3");
            stop3next(-1);
            break;
        case 4:
            scrollTo("#stop-4");
            stop4next(-1);
            break;
        case 5:
            scrollTo("#stop-5");
            stop5next(-1);
            break;
        case 6:
            scrollTo("#stop-6");
            stop6next(-1);
            break;
    }
}

//Footer **************************************************************************

// Event on push send
$("#send").click(() => {
    if (validateEmail($("#input-email").val())) {
        location.reload();
    }
});

// Validate email
function validateEmail(email) {
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return !(caract.test(email) == false)
}