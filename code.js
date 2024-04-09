var options = [
    "cowgomoo.html",
    "timewasted.html",
    "pointlesstask",
    "https://joshua-davies.github.io/normalwebsite/"
    // Add more website URLs here
];

function generate() {
    var randsite = Math.floor(Math.random() * options.length);
    var url = "sites/" + options[randsite];
    var myWindow = window.open(url);
}
