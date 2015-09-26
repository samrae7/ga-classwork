// NOT WORKING - COPIED FROM THE BOARD

$(document).ready(function() {
  
  console.log('ready');


var getRegionsButton = $('#get-regions');
var regionSelect = $('#region-select');
var countrySelect = $('#country-select');
var results = $('#results');

getRegionsButton.on('click', getRegions);
regionSelect.on('change', getCountries);
countrySelect.on('change', getCountryData);


  function getRegions(e) {
    $.get('https://restcountries.eu/rest/v1/all', function(response){
      regionSelect.empty();
      var regions = [];
      $.each(response, function(index,item) {
        if($.inArray(item.region, regions)===-1&& item.region)  {
          regions.push(item.region);
          regionSelect.append('<option value="'+ + item.region + '">'+ item.region +'</option>');
        }
      })
      regionSelect.prepend('<option value="default">--Select your region--</default>')
    })

  }

  function getCountries() {
    var regionName = $(this).val;

    $.get('https://restcountries.eu/rest/v1/region/' + regionName, function(response){
      countrySelect.empty();

      $.each(response, function(index, country) {
        countrySelect.append('<option value="' + country.name + '">'+country.name+'</option>')
      
      });
      countrySelect.prepend('<option value="default">-- Select country --</option>');
    })

  }

  function getCountryData(){
    var countryName = $(this).val();

    $.get('https://restcountries.eu/rest/v1/name/'+countryName, function(response){
      var countryv= response[0];

      var countryTemplate = '<h2>' + country.name + '</h2>';
      countryTemplate += '<h3>' + country.capital + '</h3>';
      countryTemplate += '<img src="http://www.geonames.org/flags/x/' + country.aplha2code.toLowercase() + '.gif>';

      results.html(countryTemplate);
    })
  }


});

