function getDayOfWeek(date) {
  const daysOfWeek = [
    "CN",
    "Th 2",
    "Th 3",
    "Th 4",
    "Th 5",
    "Th 6",
    "Th 7",
  ];
  if(date) return daysOfWeek[date.getDay()];
}

function getDateFromString(stringDate) {
  if (stringDate) {
    const [year, month, day] = stringDate.split("-");
    return new Date(year, month - 1, day);
  } 
}

function formatDateMonth(string){
  const [year, month, day] = string.split("-");
  return `${day}/${month}`
} 


export { getDayOfWeek, getDateFromString , formatDateMonth};
