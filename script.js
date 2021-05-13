const searchBar = document.querySelector(".search-box-input");
const filterBtn = document.querySelector(".filter");

// filterBtn.addEventListener("click", (e) => {
//   const filterOpt = document.querySelector(".filter-options");
//   filterOpt.setAttribute("class", "fade-id");
// });
/**
 * @countries - countries container
 */
let countries = [];

//Filter
// filterBtn.addEventListener("click");

//Search bar
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchString) ||
      country.alpha2Code.toLowerCase().includes(searchString) ||
      country.alpha3Code.toLowerCase().includes(searchString) ||
      country.capital.toLowerCase().includes(searchString)
    );
  });
  displayCountries(filteredCountries);
});

function createCountryElements(countries) {
  const fragment = document.createDocumentFragment();

  countries.forEach((country) => {
    const tableItem = document.createElement("table");

    const tr1 = document.createElement("tr");
    const th1 = document.createElement("th");
    const td1 = document.createElement("td");

    //Item
    tableItem.id = country.alpha3Code;
    tableItem.setAttribute("class", "country-card");
    tableItem.setAttribute("data-toggle", "modal");
    tableItem.setAttribute("data-target", "#myModal");

    //Flag Image
    const image = document.createElement("img");
    image.src = country.flag;
    tableItem.appendChild(tr1);
    tr1.appendChild(th1);
    tr1.appendChild(td1);
    th1.innerText = "Country Flag";
    td1.appendChild(image);

    //Country name
    const tr2 = document.createElement("tr");
    const th2 = document.createElement("th");
    const td2 = document.createElement("td");
    tableItem.appendChild(tr2);
    tr2.appendChild(th2);
    tr2.appendChild(td2);
    th2.innerText = "Country Name";
    td2.innerText = country.name;

    //Country capital
    const tr3 = document.createElement("tr");
    const th3 = document.createElement("th");
    const td3 = document.createElement("td");
    tableItem.appendChild(tr3);
    tr3.appendChild(th3);
    tr3.appendChild(td3);
    th3.innerText = "Country Capital";
    td3.innerText = country.capital;

    //Country capital
    const tr4 = document.createElement("tr");
    const th4 = document.createElement("th");
    const td4 = document.createElement("td");
    tableItem.appendChild(tr4);
    tr4.appendChild(th4);
    tr4.appendChild(td4);
    th4.innerText = "Country Region";
    td4.innerText = country.region;

    //Country population
    const tr5 = document.createElement("tr");
    const th5 = document.createElement("th");
    const td5 = document.createElement("td");
    tableItem.appendChild(tr5);
    tr5.appendChild(th5);
    tr5.appendChild(td5);
    th5.innerText = "Country Population";
    td5.innerText = country.population;

    fragment.appendChild(tableItem);
  });
  if (countries.length == 0) {
    const p = document.createElement("p");
    p.innerText = "No country found";

    fragment.appendChild(p);
  }
  return fragment;
}

function createFilterElements(countries) {
  const fragment = document.createDocumentFragment();

  //Region
  let countryRegion = [];
  countries.forEach((countryR) => {
    countryRegion.push(countryR.region);
  });
  let uniqueCountryRegion = [...new Set(countryRegion)];

  const divR = document.createElement("div");
  divR.setAttribute("class", "header");
  divR.innerText = "Region";
  fragment.appendChild(divR);
  uniqueCountryRegion.forEach((country) => {
    const div1 = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "region");
    input.setAttribute("class", "region");
    input.setAttribute("id", country);
    const label = document.createElement("label");
    label.innerText = country;

    div1.appendChild(input);
    div1.appendChild(label);

    fragment.appendChild(div1);
  });

  //Population range
  const divP = document.createElement("div");
  divP.setAttribute("class", "header");
  divP.innerText = "Population range";
  fragment.appendChild(divP);

  const div2 = document.createElement("div");
  const inputMin = document.createElement("input");
  inputMin.setAttribute("type", "text");
  const inputMax = document.createElement("input");
  inputMax.setAttribute("type", "text");
  const labelMin = document.createElement("label");
  labelMin.innerText = "Min";
  const labelMax = document.createElement("label");
  labelMax.innerText = "Max";
  const br = document.createElement("br");
  div2.appendChild(labelMin);
  div2.appendChild(inputMin);
  div2.appendChild(br);
  div2.appendChild(labelMax);
  div2.appendChild(inputMax);

  fragment.appendChild(div2);

  //Language
  let countryLanguage = [];
  countries.forEach((countryL) => {
    for (let i = 0; i < countryL.languages.length; i++) {
      countryLanguage.push(countryL.languages[i].name);
    }
  });
  let uniqueCountryLanguage = [...new Set(countryLanguage)];
  const divL = document.createElement("div");
  divL.setAttribute("class", "header");
  divL.innerText = "Language";
  fragment.appendChild(divL);
  uniqueCountryLanguage.forEach((country) => {
    const div1 = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "region");
    const label = document.createElement("label");
    label.innerText = country;

    div1.appendChild(input);
    div1.appendChild(label);

    fragment.appendChild(div1);
  });

  //Time zone
  let countryTime = [];
  countries.forEach((countryT) => {
    for (let i = 0; i < countryT.timezones.length; i++) {
      countryTime.push(countryT.timezones[i]);
    }
  });
  let uniqueCountryTimeZ = [...new Set(countryTime)];
  const divT = document.createElement("div");
  divT.setAttribute("class", "header");
  divT.innerText = "Time zone";
  fragment.appendChild(divT);
  uniqueCountryTimeZ.forEach((country) => {
    const div1 = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "region");
    const label = document.createElement("label");
    label.innerText = country;

    div1.appendChild(input);
    div1.appendChild(label);

    fragment.appendChild(div1);
  });

  //Currency
  let countryCurrency = [];
  countries.forEach((countryC) => {
    countryCurrency.push(countryC.currencies[0].name);
  });
  let uniqueCountryCurrency = [...new Set(countryCurrency)];
  const divC = document.createElement("div");
  divC.setAttribute("class", "header");
  divC.innerText = "Currency";
  fragment.appendChild(divC);
  uniqueCountryCurrency.forEach((country) => {
    const div1 = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "region");
    const label = document.createElement("label");
    label.innerText = country;

    div1.appendChild(input);
    div1.appendChild(label);

    fragment.appendChild(div1);
  });

  return fragment;
}

async function loadCountries() {
  countries = await getCountries();
  console.log(countries);
  displayCountries(countries);
}

function getCountries() {
  return fetch(`https://restcountries.eu/rest/v2`, {
    method: "GET",
  }).then((result) => result.json());
}

function displayCountries(countries) {
  console.log("displayCountries" + countries);
  const countryList = document.querySelector(".country-root");

  countryList.innerHTML = null;
  const countryElements = createCountryElements(countries);
  countryList.appendChild(countryElements);

  const filterOptions = document.querySelector(".filter-options");
  filterOptions.innerHTML = null;
  const filterElements = createFilterElements(countries);
  filterOptions.appendChild(filterElements);
}
loadCountries();

//Modal
async function displayModal(code) {
  const countries = await getCountryByCode(code);
  console.log(countries);
  const countryList = document.querySelector(".modal-body");

  countryList.innerHTML = null;
  const countryElements = createCountryModal(countries);
  countryList.appendChild(countryElements);
}

function getCountryByCode(code) {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`, {
    method: "GET",
  }).then((result) => result.json());
}
// displayModal("col");

function createCountryModal(country) {
  const fragment = document.createDocumentFragment();

  const tableItem = document.createElement("table");
  tableItem.setAttribute("style", "border: 0px;");

  const tr1 = document.createElement("tr");
  const th1 = document.createElement("th");
  const td1 = document.createElement("td");

  //Item
  tableItem.id = country.alpha3Code;
  tableItem.setAttribute("class", "country-card");
  tableItem.setAttribute("data-toggle", "modal");
  tableItem.setAttribute("data-target", "#myModal");

  //Flag Image
  const image = document.createElement("img");
  image.src = country.flag;
  tableItem.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(td1);
  th1.innerText = "Country Flag";
  td1.appendChild(image);

  //Country name
  const tr2 = document.createElement("tr");
  const th2 = document.createElement("th");
  const td2 = document.createElement("td");
  tableItem.appendChild(tr2);
  tr2.appendChild(th2);
  tr2.appendChild(td2);
  th2.innerText = "Country Name";
  td2.innerText = country.name;

  //alpha 2 code
  const tr3 = document.createElement("tr");
  const th3 = document.createElement("th");
  const td3 = document.createElement("td");
  tableItem.appendChild(tr3);
  tr3.appendChild(th3);
  tr3.appendChild(td3);
  th3.innerText = "alpha 2 code";
  td3.innerText = country.alpha2Code;

  //Country capital
  const tr4 = document.createElement("tr");
  const th4 = document.createElement("th");
  const td4 = document.createElement("td");
  tableItem.appendChild(tr4);
  tr4.appendChild(th4);
  tr4.appendChild(td4);
  th4.innerText = "Country Capital";
  td4.innerText = country.capital;

  //Country Region
  const tr5 = document.createElement("tr");
  const th5 = document.createElement("th");
  const td5 = document.createElement("td");
  tableItem.appendChild(tr5);
  tr5.appendChild(th5);
  tr5.appendChild(td5);
  th5.innerText = "Country Region";
  td5.innerText = country.region;

  //Country population
  const tr6 = document.createElement("tr");
  const th6 = document.createElement("th");
  const td6 = document.createElement("td");
  tableItem.appendChild(tr6);
  tr6.appendChild(th6);
  tr6.appendChild(td6);
  th6.innerText = "Country Population";
  td6.innerText = country.population;

  //latlng
  const tr7 = document.createElement("tr");
  const th7 = document.createElement("th");
  const td7 = document.createElement("td");
  tableItem.appendChild(tr7);
  tr7.appendChild(th7);
  tr7.appendChild(td7);
  th7.innerText = "latlng";
  for (let i = 0; i < country.latlng.length; i++) {
    const p = document.createElement("p");
    p.innerText = country.latlng[i];
    td7.appendChild(p);
  }

  //Country area
  const tr8 = document.createElement("tr");
  const th8 = document.createElement("th");
  const td8 = document.createElement("td");
  tableItem.appendChild(tr8);
  tr8.appendChild(th8);
  tr8.appendChild(td8);
  th8.innerText = "Country area";
  td8.innerText = country.area;

  //Country timezone
  const tr9 = document.createElement("tr");
  const th9 = document.createElement("th");
  const td9 = document.createElement("td");
  tableItem.appendChild(tr9);
  tr9.appendChild(th9);
  tr9.appendChild(td9);
  th9.innerText = "Country timezone";
  td9.innerText = country.timezones[0];

  //Borders
  const tr11 = document.createElement("tr");
  const th11 = document.createElement("th");
  const td11 = document.createElement("td");
  tableItem.appendChild(tr11);
  tr11.appendChild(th11);
  tr11.appendChild(td11);
  th11.innerText = "Borders";
  td11.setAttribute("class", "border-list");

  const p = document.createElement("p");
  for (let i = 0; i < country.borders.length; i++) {
    const p = document.createElement("p");
    p.setAttribute("class", "borders");
    p.setAttribute("data-toggle", "modal");
    p.setAttribute("data-target", "#myModal");
    p.innerText = country.borders[i];
    p.id = country.borders[i];
    td11.appendChild(p);
  }

  //Country currency
  const tr12 = document.createElement("tr");
  const th12 = document.createElement("th");
  const td12 = document.createElement("td");
  tableItem.appendChild(tr12);
  tr12.appendChild(th12);
  tr12.appendChild(td12);
  th12.innerText = "Country currency";
  td12.innerText = country.currencies[0].name;

  //Country official languages
  const tr13 = document.createElement("tr");
  const th13 = document.createElement("th");
  const td13 = document.createElement("td");
  tableItem.appendChild(tr13);
  tr13.appendChild(th13);
  tr13.appendChild(td13);
  th13.innerText = "Country currency";
  td13.innerText = country.languages[0].name;

  fragment.appendChild(tableItem);

  if (countries.length == 0) {
    const p = document.createElement("p");
    p.innerText = "No country found";

    fragment.appendChild(p);
  }
  return fragment;
}

const countryList = document.querySelector(".country-list");

countryList.addEventListener("click", (e) => {
  let code;
  console.log(e.target.tagName);
  const table = e.target.className === "country-card";
  const img = e.target.tagName == "IMG";
  const tr = e.target.tagName == "TR";
  const th = e.target.tagName == "TH";
  const td = e.target.tagName == "TD";

  if (table) {
    code = e.target.id;
    console.log(code);
  }
  if (img) {
    code = e.target.parentElement.parentElement.parentElement.id;
    console.log(code);
  }
  if (tr) {
    code = e.target.parentElement.id;
    console.log(code);
  }
  if (th || td) {
    code = e.target.parentElement.parentElement.id;
    console.log(code);
  }
  displayModal(code);
});

const borderList = document.querySelector(".modal-body");
borderList.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  let code;
  console.log(e.target.className);
  const border = e.target.className === "borders";

  if (border) {
    code = e.target.id;
    console.log("dsadsad " + code);
    displayModal(code);
  }
});
