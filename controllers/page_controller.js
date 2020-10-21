const PersonModel = require('../models/people');

const display_tree = (req,res) => {
    
    res.render('tree')
}

const display_map = (req,res) => {
    event_arr = []
    // res.send('map page')
    const ids = JSON.parse(req.query.ids)
    ids.forEach(el => {
        console.log(el)
        getEventInfo(el)
    });

    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };

        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
    }
    //render the map page here
    
    res.render('map', event_arr)
}

let getEventInfo = async (id) => {
    per_sel = await PersonModel.findById(id)
    console.log(per_sel)
    per_sel["events"].forEach(el2 =>
        event_arr.push([per_sel["firstName"] + ' ' + per_sel["lastName"],el2])
    )
    console.log(event_arr)
}


module.exports = {
    display_tree,
    display_map
}