var scores = [82, 78, 95, 100, 99, 55, 55, 69, 100, 72, 78, 84, 78, 100, 64, 99];

// 1. How many of each grade?
function count() {
    scores.sort();
    var current = [];
    var counter = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] != current) {
            if (counter > 0) {
                console.log(counter + " grade(s) of " + current);
            }
            current = scores[i];
            counter = 1;
        } else {
            counter++;
        }
    }
    if (counter > 0) {
        console.log( counter + ' grade(s) of ' + current);
    }
}
count();
console.log("");

// 1. What is the lowest grade?
var scores1 = scores.sort(function(a,b){
	return a-b;
});
console.log("Lowest Grade: ", scores1[0]);
console.log("");

// 1. What is the highest grade?
var scores2 = scores.sort(function(a,b){
	return b-a;
});
console.log("Highest Grade: ", scores2[0]);

