'use strict';


let hours = ['6 am', '7 am', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  salesByHourArray: [],
  dailyTotal: 0,
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getNumberOfRandomCustomers();
      console.log(customers);
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      console.log(cookiesSoldThisHour);
      this.salesByHourArray.push(cookiesSoldThisHour);

    }
    console.log(this.salesByHourArray);

  },

  render: function () {

    this.generateCookiesPerHour();

    let salesContainer = document.getElementById('seattleSales');

    let ulElement = document.createElement('ul');

    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {

      let liElement = document.createElement('li');

      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

      ulElement.appendChild(liElement);
    }



  }

};

seattleStore.render();

console.log(seattleStore.getNumberOfRandomCustomers());


let tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  salesByHourArray: [],
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }

};

console.log(tokyoStore.getNumberOfRandomCustomers());


let dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  salesByHourArray: [],
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
};

console.log(dubaiStore.getNumberOfRandomCustomers());


let parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  salesByHourArray: [],
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
};

console.log(parisStore.getNumberOfRandomCustomers());


let limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  salesByHourArray: [],
  getNumberOfRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
};

console.log(limaStore.getNumberOfRandomCustomers());
