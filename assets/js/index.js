$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        } else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function () {
        scroll(0, 0);
    });

    /* Menu Hamburger */

    $(".menu").click(function () {
        console.log("menu open");
        this.classList.toggle("opened");
        $(".navbar-menu").toggleClass("active");
        this.setAttribute("aria-expanded", this.classList.contains("opened"));
    });

    /* Envoi du mail */

    $(".submit").click(function (event) {
        console.log("cliqué");

        var name = $(".nameZone").val();
        var email = $(".emailZone").val();
        var subject = $(".subjectZone").val();
        var message = $(".messageZone").val();

        var statusElem = $(".statusZone").val();

        statusElem.empty();

        if (name.length >= 5) {
            statusElem.append("<div> Email is valid </div>");
        } else {
            statusElem.append("<div> Email is not valid </div>");
            event.preventDefault();
        }

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            statusElem.append("<div> Email is valid </div>");
        } else {
            statusElem.append("<div> Email is not valid </div>");
            event.preventDefault();
        }

        if (subject.length >= 2) {
            statusElem.append("<div> subject is valid </div>");
        } else {
            event.preventDefault();
            statusElem.append("<div> subject is not valid </div>");
        }

        if (message.length >= 10) {
            statusElem.append("<div> message is valid </div>");
        } else {
            event.preventDefault();
            statusElem.append("<div> message is not valid </div>");
        }
    });

    /**
     * Changement de langue
     */

    var ENG = document.querySelectorAll(".ENG");
    var FR = document.querySelectorAll(".FR");

    ENG.forEach((element) => {
        element.classList.add("hidden");
    });

    $("input[class=checkbox]").change(function () {
        if ($(this).is(":checked")) {
            FR.forEach((element) => {
                element.classList.add("hidden");
            });

            ENG.forEach((element) => {
                element.classList.remove("hidden");
            });
        } else {
            FR.forEach((element) => {
                element.classList.remove("hidden");
            });

            ENG.forEach((element) => {
                element.classList.add("hidden");
            });
        }
    });
});
