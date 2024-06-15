// Create a function called codingScoreCheck that will take an array of marks, cut off score, and return a promise that will either resolve or reject after 2 seconds based on the following conditions.
// if the average score of all the evaluations is greater or equal to the cutoff resolve the promise with the average score.
// else reject with the following message Sorry you haven’t cleared the coding round.

let marks = [85, 90, 78, 92, 88];
let cutoffScore = 80;

//function to check coding score
function codingScoreCheck(marks, cutoffScore) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //calculate total marks
            let total = 0;
            for (let mark of marks) {
                total += mark;
            }
            //calculate average score
            let average = total / marks.length;
            //check if average score meets cutooff score
            if (average >= cutoffScore) {
                resolve(average);
            } else {
                reject("Sorry you haven't cleared the coding round");
            }
        }, 2000);
    });
}

codingScoreCheck(marks, cutoffScore)
    .then((average) => {
        console.log(
            `Congratulations! You cleared the coding round with an average score of ${average}.`
        );
    })
    .catch((error) => {
        console.log(error);
    });