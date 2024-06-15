
// Create a function called unitMovementCheck that will take averageCodingScore, averageHukumuScore, cut off Score, and return a promise that will either resolve or reject after 2 seconds based on the following conditions.
// if the average of hukumu and coding score is greater or equal to the cutoff resolve the promise with the average score.
// else reject with the following message Sorry you haven’t cleared the final cutoff.



function unitMovementCheck(averageCodingScore, averageHukumuScore, cutOffScore) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = (averageCodingScore + averageHukumuScore) / 2;
            if (averageScore >= cutOffScore) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the final cutoff.");
            }
        }, 2000);
    });
}

// Example usage:
unitMovementCheck(70, 80, 75)
    .then(averageScore => {
        console.log(`Cleared the cutoff with an average score of: ${averageScore}`);
    })
    .catch(error => {
        console.log(error);
    });