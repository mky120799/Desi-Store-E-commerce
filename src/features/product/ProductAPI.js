// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code the server URL here
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    resolve({ data }); // Resolve the promise after fetching and parsing the data
  });
}

export function fetchProductsByFilters(filter,sort) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order:"desc"}

  // TODO: on the server, we will support multi-values in filter
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
    console.log("this is the string",queryString);
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code the server URL here
    const response = await fetch('http://localhost:3000/products?' + queryString);
    const data = await response.json();
    resolve({ data }); // Resolve the promise after fetching and parsing the data
  });
}
