/*
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}
*/


function highestScore (students) {
  
  var hasil = {}
  var tampungClass = []

  for (var i = 0; i < students.length; i++){
    var isFind = false;
    for (var j = 0; j < tampungClass.length; j++){
      if(students[i].class === tampungClass[j]){
        isFind = true;
      }
    }
    if(isFind === false){
      tampungClass.push(students[i].class);
    }
  }
  for (var k = 0; k < tampungClass.length; k++ ){
    var tampungScore = [];
    var obj = {}
    for (var l = 0; l < students.length; l++){
      if(students[l].class === tampungClass[k]){
        tampungScore.push(students[l])
      }
    }
    var pembanding = 0;
    for(var m = 0; m < tampungScore.length; m++){
      if(pembanding < tampungScore[m].score){
        hasil[tampungScore[m].class] = obj;
        pembanding = tampungScore[m].score;
        obj.name = tampungScore[m].name;
        obj.score = tampungScore[m].score;
      }
    }
  }
  return hasil;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

