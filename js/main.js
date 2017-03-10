function helloWorld() {
    var para = document.createElement("p");
    var node = document.createTextNode("Ich bin Felix.");
    para.appendChild(node);
    var right_div = document.getElementById("right_div");
    right_div.appendChild(para);
}

function getData() {
    var products = $.get("https://de.dawanda.com/core/mobile/inspiration_sources");
    // var client = new HttpClient();
    // client.get('https://de.dawanda.com/core/mobile/inspiration_sources', function(response) {
    //     console.log(response);
    // });

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://de.dawanda.com/core/mobile/inspiration_sources', false );
    console.log(xmlHttp.responseText);
}
