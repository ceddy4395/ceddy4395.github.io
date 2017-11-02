$(document).ready(start);

function start() {
    markdownToHTML("https://raw.githubusercontent.com/ceddy4395/Goal-Intellij-Plugin/master/README.md", "goal-plugin-markdown");
}

function markdownToHTML(url, div) {
    $.ajax({
        url: url, 
        context: document.body
    }).done(function(res) {
        // console.log(res);
        $("#" + div).html(marked(res));
    });
}