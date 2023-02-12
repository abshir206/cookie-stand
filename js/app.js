'use strict';


let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

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


  },

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

    let salesContainer = document.getElementById('tokyoSales');

    let ulElement = document.createElement('ul');

    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {

      let liElement = document.createElement('li');

      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

      ulElement.appendChild(liElement);
    }


  },

};
tokyoStore.render();
console.log(tokyoStore.getNumberOfRandomCustomers());


let dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  salesByHourArray: [],
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

    let salesContainer = document.getElementById('dubaiSales');

    let ulElement = document.createElement('ul');

    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {

      let liElement = document.createElement('li');

      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

      ulElement.appendChild(liElement);
    }


  },

};
dubaiStore.render();
console.log(dubaiStore.getNumberOfRandomCustomers());



let parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  salesByHourArray: [],
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

    let salesContainer = document.getElementById('parisSales');

    let ulElement = document.createElement('ul');

    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {

      let liElement = document.createElement('li');

      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

      ulElement.appendChild(liElement);
    }


  },
};

console.log(parisStore.getNumberOfRandomCustomers());
parisStore.render();


let limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  salesByHourArray: [],
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

    let salesContainer = document.getElementById('limaSales');

    let ulElement = document.createElement('ul');

    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {

      let liElement = document.createElement('li');

      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

      ulElement.appendChild(liElement);
    }


  },
};

console.log(limaStore.getNumberOfRandomCustomers());
limaStore.render();