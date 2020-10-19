const PersonModel = require('../models/people');
const { getPersonById } = require('../utils/person_utils')

const get_persons = (req,res) => {
    // rendering page with all persons
    res.render('people/person')
}

// getPostById(req).exec((err, post) => {
//     if (err) {
//     res.status(400);
//     return res.send("Post not found");
//     }
//     res.send(post);
// });

const get_person = async (req, res) => {
    // console.log("req.params.id: " + req.params.id)

    try {
        const person = await getPersonById(req)
        console.log(person)
        res.status(200).render('people/show', person )
    } catch (error) {
        res.status(500).send({
            error
        })
    }

    // getPersonById(req).exec((err, person) => {
    //     if (err) {
    //         res.status(400)
    //         return res.send("Person not found")
    //     } else {
    //         res.render('people/show', person)
    //     }
    // })
    // render page with id created by create_person
}

const create_person = async (req,res) => {
    // console.log(req.body)
    // Save the req.body data to variables
    const { firstName, middleName, lastName } = req.body
    let person = await PersonModel.create({ firstName, middleName, lastName })
    // console.log(person)
    
    res.redirect(`people/${person._id}`)
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