const getCurentDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let curentDate = day + "." + month + "." + year;
  return curentDate;
};

module.exports = getCurentDate;
