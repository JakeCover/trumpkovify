"use strict";
function doUpdateOnAnswerSubmit() {
    $.getJSON("/newQuestion", (d) => {
        $("text_1").text(d.text1);
        $("text_2").text(d.text2);
    });
}
addEventListener("answeredEvent", doUpdateOnAnswerSubmit);