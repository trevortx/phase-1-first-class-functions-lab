const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function () {
        return (num1 * num1);
    }
}

const fareDoubler = function(num1) {
    return (num1 * 2);
}

const fareTripler = function(num1) {
    return (num1 * 3);
}

const selectDifferentDrivers = function(drivers, driverFunction) {
    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers()
    }   else return returnLastTwoDrivers();
}