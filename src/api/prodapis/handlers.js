
var fs = require('fs');
var parse = require('csv-parse');


let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });
  return p;
}


export let loop = (request, reply) => {
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  var sum = 0;
	var promises = [];

  numbers.forEach(n => {
    console.log(`Trying to add ${n}`);
  	promises.push(adder(sum, n));
		sum = sum + promises.length;
		console.log(`Current Sum is ${sum}`);
  });
	Promise.all(promises)
 .then(function(data){
   console.log(data);
	 // sum = data;
   reply(sum);
  })
 .catch(function(err){
	 console.log(err);
   reply(err);
 });


};

export let csv2json = (request, reply) => {
	var csvData=[];
	var flag = 0
	var rawData = [];
	var mainData = [];
  var firstRow = [];
	var fileHandler = new Promise(function (resolve, reject) {
    fs.createReadStream("/home/bidyut/docs/apimock/src/api/prodapis/sample.csv")
  	    .pipe(parse({delimiter: ':'}))
  	    .on('data', function(csvrow) {
  				if(flag == 0){
  					firstRow = csvrow;
            firstRow = firstRow.toString();
  					firstRow = firstRow.split(",");
  				}

  				var rawJson = {};
  				if(flag) {
  					csvrow = csvrow.toString();
  					csvrow = csvrow.split(",");
  					rawData.push(csvrow);
  				}
  				flag = 1;
  	    })
  	    .on('end',function() {
  				let i = 0;
  				for(i=0; i<rawData.length; i++) {
  					var singleObj = {};
  					var rawDataSing = rawData[i];
            for(let j=0; j<firstRow.length; j++) {
              let key = firstRow[j];
              singleObj[key] = rawDataSing[j];
            }
  					mainData.push(singleObj);
  				}
  				console.log(mainData);
          resolve(mainData);
  	    });
  });
  fileHandler
    .then(function (data) {
      reply(data);
    });

};
