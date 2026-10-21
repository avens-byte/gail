$(document).ready(function () {
        $(".btnChange").click(function () {
                $(this).css("background", "blue")

        })


        $("th").css("background", "lavender")

        $("tr:even").css("background", "lightblue")

        $("tr:odd").css("background", "lightgreen")

        $("#btnChange").click(function () {
                $("#message1").text("you click the button!")
        })

        $("#btnChange").dblclick(function () {
                $("#message").text("WELCOME BUSENGG!")
        })

        $(".card").mouseenter(function () {
                $("#message1").text("your mouse is reach the Form")
        })

        $(".card").mouseleave(function () {
                $("#message1").text("your mouse is leave the Form")
        })

        $("#btnHide").click(function () {
                $(".studinfo").hide("slow")
        })

        $("#btnShow").click(function () {
                $(".studinfo").show(2000)
        })

        $("#btnhidetbl").click(function () {
                $(".studlist").hide("slow")
        })

        $("#btnshowtbl").click(function () {
                $(".studlist").show(2000)
        })

        $("#btnOdd").click(function () {
                $("tr:even").css("background", "green")
        })

        $("#btnEven").click(function () {
                $("tr:odd").css("background", "yellow")
        })


})