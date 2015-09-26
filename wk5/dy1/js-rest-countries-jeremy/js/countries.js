function ajaxRequest(method, url) {
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.send();

  return request;
}

function successfulRequest(request) {
  return request.readyState === 4 && request.statusText === 'OK'
}

function getRegions(e) {
  var regions = [];

  var request = ajaxRequest('GET', 'https://restcountries.eu/rest/v1/all');

  request.onreadystatechange = function() {
    if(successfulRequest(request)) {
      
      regionSelect.innerHTML = '';

      var response = JSON.parse(request.response);
      
      for(var i = 0; i < response.length; i++) {
        if(regions.indexOf(response[i].region) === -1 && response[i].region) {
          regions.push(response[i].region);

          var optionRegion = document.createElement('option');
          optionRegion.setAttribute('value', response[i].region);
          optionRegion.innerHTML = response[i].region;
          regionSelect.appendChild(optionRegion);
        }
      }
      
      var optionDefault = document.createElement('option');
      optionDefault.setAttribute('value', 'default');
      optionDefault.innerHTML = '-- Please select a region --';
      regionSelect.insertBefore(optionDefault, regionSelect.firstChild);
    }
  }
}

function getCountries(e) {

  var regionName = this.value;

  var request = ajaxRequest('GET', 'https://restcountries.eu/rest/v1/region/' + regionName);

  request.onreadystatechange = function() {
    if(successfulRequest(request)) {
      countrySelect.innerHTML = '';

      var response = JSON.parse(request.response);
      
      for(var i = 0; i < response.length; i++) {
        var optionCountry = document.createElement('option');
        optionCountry.setAttribute('value', response[i].name);
        optionCountry.innerHTML = response[i].name;
        countrySelect.appendChild(optionCountry);
      }
      
      var optionDefault = document.createElement('option');
      optionDefault.setAttribute('value', 'default');
      optionDefault.innerHTML = '-- Please select a country --';
      countrySelect.insertBefore(optionDefault, countrySelect.firstChild);
    }
  }
}

function getCountryInfo(e) {
  var countryName = this.value;

  var request = ajaxRequest('GET', 'https://restcountries.eu/rest/v1/name/' + countryName);

  request.onreadystatechange = function() {
    if(successfulRequest(request)) {
      var response = JSON.parse(request.response)[0];

      console.log(response);

      var countryTemplate = '<h2>' + response.name + '</h2>';
      countryTemplate += '<h3>' + response.capital + '</h3>';
      countryTemplate += '<img src="http://www.geonames.org/flags/x/' + response.alpha2Code.toLowerCase() + '.gif">';

      results.innerHTML = countryTemplate;

    }
  }

}

var getRegionsButton;
var regionSelect;
var countrySelect;
var results;

document.addEventListener('DOMContentLoaded', function() {
  console.log('HELLO WORLD! (Unless you are Scottish, Welsh, or N Irish!)');

  getRegionsButton = document.getElementById('get-regions');
  regionSelect = document.getElementById('region-select');
  countrySelect = document.getElementById('country-select');
  results = document.getElementById('results');

  getRegionsButton.addEventListener('click', getRegions);
  regionSelect.addEventListener('change', getCountries);
  countrySelect.addEventListener('change', getCountryInfo);

})