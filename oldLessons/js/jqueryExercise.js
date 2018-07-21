$("div").css("backgroundColor", "purple");
$("div.highlight").css("width", "200px");
$("div#third").css("border", "2px solid orange");
// ":first-of-type" is supposed to be faster than ":first"
$("div:first-of-type").css("color", "pink");
// $("div:first").css("color", "pink");