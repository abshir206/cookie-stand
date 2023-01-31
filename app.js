'use strict';

let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '6 p.m', '7 p.m'];

let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
}

console.log(seattleStore.getNumberOfRandomCustomers());


let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '6 p.m', '7 p.m'];

let tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
}

console.log(tokyoStore.getNumberOfRandomCustomers());

let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '6 p.m', '7 p.m'];

let dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
}

console.log(dubaiStore.getNumberOfRandomCustomers());

let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '6 p.m', '7 p.m'];

let parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
}

console.log(parisStore.getNumberOfRandomCustomers());

let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '6 p.m', '7 p.m'];

let limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
}

console.log(limaStore.getNumberOfRandomCustomers());
