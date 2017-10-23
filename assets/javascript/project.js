$(document).ready(start);

function start() {
    markdownToHTML('markdown', null);
}

function markdownToHTML(url, div) {
    document.body.style.display = "none"; // Hide the page until it's finished rendering.

    document.createElement("markdown");
    var md_tags = httpGet("https://raw.githubusercontent.com/ceddy4395/Goal-Intellij-Plugin/master/README.md");

    for (var i = 0; i < md_tags.length; i++) { // Iterate through all the tags, and generate the HTML.
        var md_text = md_tags[i].textContent.replace(/^[^\S\n]+/mg, ""); // I love regex, so shoot me.

        var md_div = document.createElement("div"); // Make a new div to replace the fake tag.
        md_div.id = "content";
        md_div.innerHTML = marked(md_text);

        md_tags[i].parentNode.appendChild(md_div); // Add remove the old raw markdown.
        md_tags[i].parentNode.removeChild(md_tags[i]);
    }

    document.body.style.display = ""; // Show the rendered page.
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    //xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}