const createCountryContainer = (country) => {
    const container = document.createElement('div');
    container.className = 'country-container';

    const img = document.createElement('img');
    img.setAttribute('src', country.flags.png);
    img.setAttribute('alt', country.flags.alt);
    container.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = 'Name: ' + country.name.common;
    container.appendChild(name);

    const population = document.createElement('h5');
    population.textContent = 'Population: ' + country.population;
    container.appendChild(population);

    const continents = document.createElement('h5');
    continents.textContent = 'Continents: ' + country.continents;
    container.appendChild(continents);
    
    if (country.capital != undefined && country.capital != null)
    {
        const capital = document.createElement('h5');
        capital.textContent = 'Capital: ' + country.capital;
        container.appendChild(capital);
    }

    if (country.currencies != undefined && country.currencies != null) 
    {
        const currencies = document.createElement('h5');
        const keys = Object.keys(country.currencies);
        currencies.textContent = 'Currencies: ';
        keys.forEach(function(key){
            currencies.textContent = currencies.textContent + key + ' - ' +  country.currencies[key].name + '(' +  country.currencies[key].symbol  +') ';
        });
        container.appendChild(currencies);
    }


    
    return container;

}

const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach((country) => {
            const countriesContainer = document.getElementById('countries');
            const countryContainer = createCountryContainer(country);
            countriesContainer.appendChild(countryContainer);
        })
    })
    .catch(error => console.log(error));
}

fetchData();