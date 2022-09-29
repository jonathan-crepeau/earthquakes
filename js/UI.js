// console.log('Its that pink venom.')

class UI {
    static earthquakes = []
    static async makeCall() {
        try {
            await $.ajax({
            method: 'GET',
            url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson',
            success: function(response){
                // console.log(response);
                UI.filterEarthquakes(response);
            }
            });
        } catch (err) {
            console.error(err)
        }
    }
    static filterEarthquakes(obj) {
        let earthquakes = obj.features;
        earthquakes.sort((a, b) => b.properties.mag - a.properties.mag);
        for (let i = 0; i < earthquakes.length; i++) {
            $('#info-container').append(`<p>${earthquakes[i].properties.title}</p>`);
        }
    }
}