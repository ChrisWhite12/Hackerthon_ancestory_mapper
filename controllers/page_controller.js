
const display_tree = (req,res) => {
    res.send('tree page')
}

const display_map = (req,res) => {
    res.send('map page')
}

module.exports = {
    display_tree,
    display_map
}