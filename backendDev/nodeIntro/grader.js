var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

if (average(scores) === 94) {
    console.log("test case 1, passed");
} else {
    console.log("test case 1, failed, expected: 94, received: "+average(scores));
}

if (average(scores2) === 68) {
    console.log("test case 2, passed");
} else {
    console.log("test case 2, failed, expected: 68, received: "+average(scores2));
}

function average(scoreArray) {
    var sum = 0;
    for (var i=0; i<scoreArray.length; i++) {
        sum += scoreArray[i];
    }
    return Math.round(sum / scoreArray.length);
}
