let PeopleNamesList = require("../country/state/city/index");
let impFunction = require("../utilities/utils/index");

const getPeopleInCity = () => {
  let PeopleNamesList = require("../country/state/city/index");
  let impFunction = require("../utilities/utils/index");
  let temp = impFunction(PeopleNamesList);
  return temp;
};

// let temp = getPeopleInCity();
// console.log(temp);

module.exports = getPeopleInCity;
