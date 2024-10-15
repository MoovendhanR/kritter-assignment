
const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
  ];
  
  //user preferences
  function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    let filteredColleges = [];
  
    //location and fees
    for (let i = 0; i < colleges.length; i++) {
      const college = colleges[i];
      if (college.location === preferredLocation && college.fees <= maxFees) {
        filteredColleges.push(college);
      }
    }
  
    //each filtered college
    for (let i = 0; i < filteredColleges.length; i++) {
      const college = filteredColleges[i];
      const rankingScore = college.ranking * rankingWeight;
      const feesScore = (college.fees / maxFees) * feesWeight;
      college.score = rankingScore + feesScore;
    }
  
    // Sort- colleges - score in ascending order
    filteredColleges.sort(function(a, b) {
      return a.score - b.score;
    });
  
    //colleges - required format
    for (let i = 0; i < filteredColleges.length; i++) {
      const college = filteredColleges[i];
      console.log(
        `Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score.toFixed(2)}`
      );
    }
  }
  
  const preferredLocation = "New York";
  const maxFees = 20000;
  const rankingWeight = 2;
  const feesWeight = 1;
  
  rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);
  