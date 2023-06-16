//takes the object to filter and array of filters
//and return only the fields that doesn't show
// on filters
const columnFilter = (row: any, checks: any) => {
  //always filter the id for its not to be displayed and the rest of filters
  const checkers = ["id", ...checks];
  const newRow: any = {};
  //for all the fields of rows check if its not there and return it
  for (const [key, value] of Object.entries(row)) {
    if (!checkers.includes(key)) {
      newRow[key] = value;
    }
  }
  //returns the row only without  the fields that its keys are in checkers
  return newRow;
};

export default columnFilter;
