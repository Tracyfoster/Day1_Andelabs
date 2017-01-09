var myApp = require('../app/getPrimes.js');

(function() {
  'use strict';

describe('Min-Max Numbers in a List: ', function () {

 describe("Get primes numbers between 0 and the input  ", function() {

  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] as primes numbers from 0 to 100", function() {
    expect(myApp.getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });

  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for as primes numbers from 0 to 100", function() {
    expect(myApp.getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });

  it("should return [2, 3, 5, 7, 11, 13] as primes numbers from 0 to 100", function() {
    expect(myApp.getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it("should return [2, 3, 5, 7] as primes numbers from 0 to 100", function() {
    expect(myApp.getPrimes(7)).toEqual([2, 3, 5, 7]);
  });

  it("should return [2] as primes numbers from 0 to 100", function() {
    expect(myApp.getPrimes(2)).toEqual([2]);
  });

  it("should return [2, 3, 5, 7, 11, 13, 17] as primes numbers from 0 to 100", function() {
    expect(myApp.getPrimes(17.77)).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });
 });  

 describe("Tests for primes numbers requests below 2", function() { 

  it("should return 7 since it is below 2", function() {
    expect(myApp.getPrimes(-2)).toBe('no prime number');
  });

  it("should return `no prime number` since it is below 2", function() {
    expect(myApp.getPrimes(-27)).toBe('no prime number');
  });

  it("should return `no prime number` since it is below 2", function() {
    expect(myApp.getPrimes(1.9)).toBe('no prime number');
  });

  it("should return `no prime number` since it is below 2", function() {
    expect(myApp.getPrimes(0)).toBe('no prime number');
  });

  it("should return `no prime number` since it is below 2", function() {                                                                               
    expect(myApp.getPrimes(-150)).toBe('no prime number');
  });

  });

 });

})();