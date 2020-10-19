
const display_tree = (req,res) => {
    // res.send('tree page')
    let test_data = [
        {
            'id':1,
            'Fname': 'Robert',
            'Lname': 'Smith',
            'Parents': [],
            'Children': [2,3,4],
            'Partners': [],
            'Events': []
        },
        {
            'id':2,
            'Fname': 'Chris',
            'Lname': 'Smith',
            'Parents': [1],
            'Children': [],
            'Partners': [],
            'Events': []
        },
        {
            'id':3,
            'Fname': 'Mary',
            'Lname': 'Smith',
            'Parents': [1],
            'Children': [],
            'Partners': [],
            'Events': []
        },
        {
            'id':4,
            'Fname': 'Tyler',
            'Lname': 'Smith',
            'Parents': [1],
            'Children': [],
            'Partners': [],
            'Events': []
        }
    ]
    treeitems = 0;
    test_data.forEach(el => {
        
    })

    res.render('tree')

    // treeitems = 0;
    // test_data.forEach(el => {
    //     if(treeitems == 0){
    //         let treeA = document.getElementById('tree-area')
    //         console.log(treeA)
    //     }
    //     else{

    //     }
    // })
}

const display_map = (req,res) => {
    
    // res.send('map page')

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
    
    res.render('map')
}


module.exports = {
    display_tree,
    display_map
}