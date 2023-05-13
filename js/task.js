// Your code goes here
function isEquals(a, b) {
    return a === b;
}

function isBigger(a, b) {
    return a > b;
}

function storeNames(...names) {
    return Array.from(names);
}

function getDifference(numberOne, numberTwo) {
    return numberOne > numberTwo ? numberOne - numberTwo : numberTwo - numberOne;
}

function negativeCount(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++;
        }
    }
    return count;
}

function letterCount(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
function countPoints(gameResultScores) {
    let points = 0;

    for (let i = 0; i < gameResultScores.length; i++) {
        let scores = gameResultScores[i].split(':');
        let xScore = parseInt(scores[0]);
        let yScore = parseInt(scores[1]);
        if (xScore > yScore) {
            points += 3;
        } else if (xScore === yScore) {
            points += 1;
        }
    }

    return points;
}
// functions for testing
function task1() {
    console.log("isEquals(3,3) = " + isEquals(3, 3));
    console.log("isEquals(3,\"3\") = " + isEquals(3, "3"));
    console.log("isEquals(3,4) = " + isEquals(3, "3"));
}

function task2() {
    console.log("isBigger(5,-1) = " + isBigger(5, -1));
    console.log("isBigger(2,6) = " + isBigger(2, 6));
}

function task3() {
    console.log("storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy') = " + storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));
    console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));
    console.log("storeNames('Tommy Shelby') = " + storeNames('Tommy Shelby'));
    console.log(storeNames('Tommy Shelby'));
    console.log("storeNames() = " + storeNames());
    console.log(storeNames());
}
function task4() {
    console.log("getDifference(5, 3) = " + getDifference(5, 3));
    console.log("getDifference(5, 8) = " + getDifference(5, 8));
}

function task5() {
    console.log("negativeCount([4, 3, 2, 9]) = " + negativeCount([4, 3, 2, 9]));
    console.log("negativeCount([0, -3, 5, 7])  = " + negativeCount([0, -3, 5, 7]));
}

function task6() {
    console.log("letterCount(\"Marry\", \"r\") = " + letterCount("Marry", "r"));
    console.log("letterCount(\"Barny\", \"y\") = " + letterCount("Barny", "y"));
    console.log("letterCount(\"\", \"z\") = " + letterCount("", "z"));
}

function task7() {
    console.log("countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']) = " + countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));

}