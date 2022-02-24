// fetching the data from the api
const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res =>res.json())
    .then(data => displayCountries(data))
}

loadCountries()

// another function to display data and receiving the parameter from data

const displayCountries = countries=>{
    const countriesDiv = document.getElementById('countries')
    for(const country of countries){
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML=`
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick ="loadCountryByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div)      
    }
}

// creating another function for onclick button and receiving parameter from there
// and also fetching data from the api
const loadCountryByName = name =>{
    const url =`https://restcountries.com/v2/name/${name}
    `
    fetch(url)
    .then(res => res.json())
    .then(data=>displayCountryDetail(data[0]))
}

// another function to display data and recieving parameter from data

const displayCountryDetail = country =>{
    console.log(country);
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML= `
        <h5>${country.name}</h5>
        <p>Population:${country.population}</p>
        <img width="300px" src="${country.flag}">
    `
}
