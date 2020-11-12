var selectedday;

$(document).ready(function () {

    selectedday = $('input[name=Day]:checked').val();

    switch (selectedday) {
        case "0":
            $("#work").text("Work");
            $("#time").text("8am - 4pm");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
        case "1":
            $("#work").text("Work");
            $("#time").text("8am - 4pm");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
        case "2":
            $("#work").text("Work");
            $("#time").text("8am - 4pm");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
        case "3":
            $("#work").text("Work");
            $("#time").text("8am - 4pm");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
        case "4":
            $("#work").text("Work");
            $("#time").text("8am - 4pm");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
        case "5":
            $("#work").text("Off Work");
            $("#time").text("All Day");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
        case "6":
            $("#work").text("Off Work");
            $("#time").text("All Day");
            $("#exercise").text("Exercise");
            $("#extime").text("6pm - 8pm");
            break;
    }


});