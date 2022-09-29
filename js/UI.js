// console.log('Its that pink venom.')

class UI {
    static async makeCall() {
        try {
            const response = await $.ajax({
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
        for (const earthquake of earthquakes) {
            console.log(earthquake);
        }
    }
}