// const returnFirstTwoDrivers = function(drivers) {
//   return drivers.slice(0, 2);
// };

// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// console.log(returnFirstTwoDrivers(drivers)); // Output: ['Antonia', 'Nuru']

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// console.log(selectingDrivers[0](drivers)); // Output: ['Antonia', 'Nuru']
// console.log(selectingDrivers[1](drivers)); // Output: ['Amari', 'Mo']

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  
//   const fareDoubler = createFareMultiplier(2);
//   const fareTripler = createFareMultiplier(3);
  
//   console.log(fareDoubler(10)); // Output: 20
//   console.log(fareTripler(10)); // Output: 30

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  
  console.log(fareDoubler(10)); // Output: 20

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareTripler = createFareMultiplier(3);
  
  console.log(fareTripler(10)); // Output: 30

  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function selectDifferentDrivers(drivers, driversFunction) {
  return driversFunction(drivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']

  
  