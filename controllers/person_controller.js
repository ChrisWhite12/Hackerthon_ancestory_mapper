
const get_persons = (req,res) => {
    res.send('person index')
}

const get_person = (req,res) => {
    res.send('get person')
}

const create_person = (req,res) => {
    res.send('person created')
}

const remove_person = (req,res) => {
    res.send('person removed')
}

const change_person = (req,res) => {
    res.send('person updated')
}

module.exports = {
    get_persons,
    get_person,
    create_person,
    remove_person,
    change_person
}