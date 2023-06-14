function getAverage(scores) {
    var total = scores.reduce(function (sum, score) {
      return sum + score;
    }, 0);
    var average = total / scores.length;
    return average;
  }
  
  function getMedian(scores) {
    var sortedScores = scores.slice().sort(function (a, b) {
      return a - b;
    });
    var n = sortedScores.length;
    if (n % 2 === 0) {
      var middleRight = n / 2;
      var middleLeft = middleRight - 1;
      var median = (sortedScores[middleLeft] + sortedScores[middleRight]) / 2;
    } else {
      var middle = Math.floor(n / 2);
      var median = sortedScores[middle];
    }
    return median;
  }
  
  // Example with odd number of scores
  var scoresOdd = [80, 83, 86, 92, 100];
  var averageOdd = getAverage(scoresOdd);
  var medianOdd = getMedian(scoresOdd);
  var highestScore = Math.max(...scoresOdd);
  var lowestScore = Math.min(...scoresOdd);
  console.log("Scores (odd):", scoresOdd);
  console.log("Average score:", averageOdd);
  console.log("Median score:", medianOdd);
  console.log("Highest score:", highestScore);
  console.log("Lowest score:", lowestScore);
  
  // Example with even number of scores
  var scoresEven = [80, 83, 86, 87, 92, 100];
  var averageEven = getAverage(scoresEven);
  var medianEven = getMedian(scoresEven);
  highestScore = Math.max(...scoresEven);
  lowestScore = Math.min(...scoresEven);
  console.log("Scores (even):", scoresEven);
  console.log("Average score:", averageEven);
  console.log("Median score:", medianEven);
  console.log("Highest score:", highestScore);
  console.log("Lowest score:", lowestScore);
  function getAverage(scores) {
    var total = scores.reduce(function (sum, score) {
      return sum + score;
    }, 0);
    var average = total / scores.length;
    return average;
  }
  
  function getMedian(scores) {
    var sortedScores = scores.slice().sort(function (a, b) {
      return a - b;
    });
    var n = sortedScores.length;
    if (n % 2 === 0) {
      var middleRight = n / 2;
      var middleLeft = middleRight - 1;
      var median = (sortedScores[middleLeft] + sortedScores[middleRight]) / 2;
    } else {
      var middle = Math.floor(n / 2);
      var median = sortedScores[middle];
    }
    return median;
  }
  
  // Example with odd number of scores
  var scoresOdd = [80, 83, 86, 92, 100];
  var averageOdd = getAverage(scoresOdd);
  var medianOdd = getMedian(scoresOdd);
  var highestScore = Math.max(...scoresOdd);
  var lowestScore = Math.min(...scoresOdd);
  console.log("Scores (odd):", scoresOdd);
  console.log("Average score:", averageOdd);
  console.log("Median score:", medianOdd);
  console.log("Highest score:", highestScore);
  console.log("Lowest score:", lowestScore);
  
  // Example with even number of scores
  var scoresEven = [80, 83, 86, 87, 92, 100];
  var averageEven = getAverage(scoresEven);
  var medianEven = getMedian(scoresEven);
  highestScore = Math.max(...scoresEven);
  lowestScore = Math.min(...scoresEven);
  console.log("Scores (even):", scoresEven);
  console.log("Average score:", averageEven);
  console.log("Median score:", medianEven);
  console.log("Highest score:", highestScore);
  console.log("Lowest score:", lowestScore);
  