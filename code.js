var options = [
    "cowgomoo.html",
    "timewasted.html",
    // Add more website URLs here
];

function generate() {
    var randsite = Math.floor(Math.random() * options.length);
    var url = "sites/" + options[randsite];
    var myWindow = window.open(url);
}
