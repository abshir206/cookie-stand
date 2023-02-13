'use strict';

//Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.


let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let allStores = [];
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let tfoot = document.querySelector('tfoot');
//console.log(hours.length);
function City(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesByHourArray = [],
  this.dailyTotal = 0,

  this.getNumberOfRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };

  this.generateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getNumberOfRandomCustomers();

      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.dailyTotal += cookiesSoldThisHour;
      this.salesByHourArray.push(cookiesSoldThisHour);

    }

  };

  this.render = function () {

    this.generateCookiesPerHour();

    // let salesContainer = document.getElementById('seattleSales');

    // let ulElement = document.createElement('ul');

    // salesContainer.appendChild(ulElement);

    // for (let i = 0; i < hours.length; i++) {

    //   let liElement = document.createElement('li');

    //   liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

    //   ulElement.appendChild(liElement);
    // }


  };

}

let seattle = new City('seattle', 23, 65, 6.3);
let tokyo = new City('tokyo', 3, 24, 1.2);
let dubai = new City('dubai', 11, 38, 3.7);
let paris = new City('paris', 20, 38, 2.3);
let lima = new City('lima', 2, 16, 4.6);

allStores.push(seattle, paris, tokyo, dubai, lima);

for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

function createHeaderRow() {
  let tableRow = document.createElement('tr');

  let tableStoreName = document.createElement('th');
  tableStoreName.textContent = 'Store Name';
  tableRow.appendChild(tableStoreName);

  thead.appendChild(tableRow);

  for (let i = 0; i < hours.length; i++) {
    let hour = document.createElement('th');
    hour.textContent = hours[i];
    tableRow.appendChild(hour);

  }

  let total = document.createElement('th');
  total.textContent = 'Daily Location Total';
  tableRow.appendChild(total);


}

function createTableBody() {



  for (let i = 0; i < allStores.length; i++) {
    let tableRow = document.createElement('tr');
    let storeName = document.createElement('td');
    storeName.textContent = allStores[i].name;
    tableRow.appendChild(storeName);

    for (let j = 0; j < hours.length; j++) {
      allStores[i].salesByHourArray[j];
      // console.log(allStores[i].salesByHourArray[j]);

      let hourlySales = document.createElement('td');
      hourlySales.textContent = allStores[i].salesByHourArray[j];
      tableRow.appendChild(hourlySales);
    }

    let dailyTotal = document.createElement('td');
    dailyTotal.textContent = allStores[i].dailyTotal;
    tableRow.appendChild(dailyTotal);


    tbody.appendChild(tableRow);
  }
}

function createFooterRow() {
  let footerRow = document.querySelector('tfoot');
  footerRow.textContent = 'Totals';
  //tfoot.appendChild(footerRow);


  for (let i = 0; i < hours.length; i++) {
    let runningTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      runningTotal += allStores[j].salesByHourArray[i];
    }
    console.log(runningTotal);
    let footerTotal = document.createElement('td');
    footerTotal.textContent = runningTotal;
    footerRow.appendChild(footerTotal);

    // footerTotal.textContent = 'total';
    // footerRow.appendChild(tfoot);

    // footerTotal.appendChild(footerRow);
    //console.log(hours.length);


  }

}

//salesByHourArray[i] and add to placeholder value through the length of allStores array. after finished with that hour create a td, give td text content of placeholder value and append tp the tfoot.



createHeaderRow();
createTableBody();
createFooterRow();

let form = document.querySelector('form');
let handleSubmit = function(event){
  event.preventDefault();

  let storeName = event.target.Add.value;
  let storeMin = parseInt(event.target.Min.value);
  let storeMax = parseInt(event.target.Max.Value);
  let storeAvg =parseInt(event.target.Avg.value);
  
  let newStorelocation = new City( storeName, storeMin, storeMax, storeAvg);
  allStores.push(newStorelocation);
  newStorelocation.getNumberOfRandomCustomers();
  newStorelocation.cookiesSoldThisHour();
  newStorelocation.render();
};
form.addEventListener('submit', handleSubmit);

console.log(allStores[5]);





// let seattleStore = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   salesByHourArray: [],
//   dailyTotal: 0,
//   getNumberOfRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getNumberOfRandomCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       console.log(cookiesSoldThisHour);
//       this.salesByHourArray.push(cookiesSoldThisHour);

//     }
//     console.log(this.salesByHourArray);

//   },

//   render: function () {

//     this.generateCookiesPerHour();

//     let salesContainer = document.getElementById('seattleSales');

//     let ulElement = document.createElement('ul');

//     salesContainer.appendChild(ulElement);

//     for (let i = 0; i < hours.length; i++) {

//       let liElement = document.createElement('li');

//       liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

//       ulElement.appendChild(liElement);
//     }


//   },

// };

// seattleStore.render();

// console.log(seattleStore.getNumberOfRandomCustomers());



// let tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesByHourArray: [],
//   getNumberOfRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getNumberOfRandomCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       console.log(cookiesSoldThisHour);
//       this.salesByHourArray.push(cookiesSoldThisHour);

//     }
//     console.log(this.salesByHourArray);

//   },
//   render: function () {

//     this.generateCookiesPerHour();

//     let salesContainer = document.getElementById('tokyoSales');

//     let ulElement = document.createElement('ul');

//     salesContainer.appendChild(ulElement);

//     for (let i = 0; i < hours.length; i++) {

//       let liElement = document.createElement('li');

//       liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

//       ulElement.appendChild(liElement);
//     }


//   },

// };
// tokyoStore.render();
// console.log(tokyoStore.getNumberOfRandomCustomers());


// let dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   salesByHourArray: [],
//   getNumberOfRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getNumberOfRandomCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       console.log(cookiesSoldThisHour);
//       this.salesByHourArray.push(cookiesSoldThisHour);

//     }
//     console.log(this.salesByHourArray);

//   },
//   render: function () {

//     this.generateCookiesPerHour();

//     let salesContainer = document.getElementById('dubaiSales');

//     let ulElement = document.createElement('ul');

//     salesContainer.appendChild(ulElement);

//     for (let i = 0; i < hours.length; i++) {

//       let liElement = document.createElement('li');

//       liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

//       ulElement.appendChild(liElement);
//     }


//   },

// };
// dubaiStore.render();
// console.log(dubaiStore.getNumberOfRandomCustomers());



// let parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   salesByHourArray: [],
//   getNumberOfRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

//   },
//   generateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getNumberOfRandomCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       console.log(cookiesSoldThisHour);
//       this.salesByHourArray.push(cookiesSoldThisHour);

//     }
//     console.log(this.salesByHourArray);

//   },
//   render: function () {

//     this.generateCookiesPerHour();

//     let salesContainer = document.getElementById('parisSales');

//     let ulElement = document.createElement('ul');

//     salesContainer.appendChild(ulElement);

//     for (let i = 0; i < hours.length; i++) {

//       let liElement = document.createElement('li');

//       liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

//       ulElement.appendChild(liElement);
//     }


//   },
// };

// console.log(parisStore.getNumberOfRandomCustomers());
// parisStore.render();


// let limaStore = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   salesByHourArray: [],
//   getNumberOfRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

//   },
//   generateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getNumberOfRandomCustomers();
//       console.log(customers);
//       let cookiesSoldThisHour = Math.ceil(customers * this.avg);
//       console.log(cookiesSoldThisHour);
//       this.salesByHourArray.push(cookiesSoldThisHour);

//     }
//     console.log(this.salesByHourArray);

//   },
//   render: function () {

//     this.generateCookiesPerHour();

//     let salesContainer = document.getElementById('limaSales');

//     let ulElement = document.createElement('ul');

//     salesContainer.appendChild(ulElement);

//     for (let i = 0; i < hours.length; i++) {

//       let liElement = document.createElement('li');

//       liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;

//       ulElement.appendChild(liElement);
//     }


//   },
// };

// console.log(limaStore.getNumberOfRandomCustomers());
// limaStore.render();