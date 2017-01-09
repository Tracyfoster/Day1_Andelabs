'use strict'

module.exports = {

 getPrimes: function getPrimes(num) { 	
 	var primeList = [2]; // Initializing primeList since input has to be 2 or more for the function to return a value
 	var primePot = 3; //initializing the potential prime since its the next prime number
 	
 	if ((num < 2) || (num === null)){ // function should not run if num is less than 2
 		return "no prime number";
 	}
 	else if (num < 3){ // returns 2 if num is less than 3 but more or equal to 2
 		return primeList;
 	}
 	else {	// handles the rest of numbers
 		primeList.push(primePot); //adds 3 to primeLis if num is more than 3
 		
 		while (primePot <= num) {
 			
 			var isPrime = true;
 			for (var i in primeList ){ // this is iterating through the existing primeList
 				if (primePot % primeList[i] ===0 ){
 					isPrime = false;
 					break;
 				}
 			}
 			if (isPrime === true){
 				primeList.push(primePot);
 			}
 		primePot += 2; // this rules out even numbers
 		}
	}
	return primeList;
 }

}