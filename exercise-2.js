/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

*/


function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var hasil = [];
  for (var i = 0; i < arrPenumpang.length; i++){
    if(arrPenumpang[i] === ''){
      hasil = '';
    }else{
      var obj = {};
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari = arrPenumpang[i][1];
      obj.tujuan = arrPenumpang[i][2];
  }
  var jarak = 0;
for (var j = 0; j < rute.length; j++){
if (rute[j] === arrPenumpang[i][1]){
  for (var k = j+1; k < rute.length; k++){
  jarak += 1;
  if(rute[k] === arrPenumpang[i][2]){
    var bayar = jarak * 2000;
    obj.bayar = bayar;
    hasil.push(obj);
  }
  }
}
}
}
return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]


