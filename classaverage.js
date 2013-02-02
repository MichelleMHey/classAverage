function average(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum = sum + data[i][1];
    };
    return sum/data.length;
};
var myData = [["Hailey", 85],
    ["Cory", 60],
    ["Michelle", 100],
    ["Peter", 88],
    ["Emily", 77],
    ["Paula", 99],
    ["Chris", 66],
    ["Bethany", 80],
    ["Penny", 74],
    ["Bob", 55]
];

var myAverage = average(myData);
console.log(myAverage);

function letterGrade(average) {
  if (average < 60) {
    return "F";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else {
    return "A";
  };
};

document.write('Class average: ' + myAverage + '<br>' );
document.write('Letter Grade: ' + letterGrade(myAverage));