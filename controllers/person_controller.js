const PersonModel = require('../models/people');
const { getPersonById, getAllPeople, deletePerson } = require('../utils/person_utils')

const get_people = async (req, res) => {
    // rendering page with all persons
    try {
        const people = await getAllPeople(req)
        // console.log(people)
        res.status(200).render('people/people', { people })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }

    // getAllPeople(req).exec((err, people) => {
    //     if (err) {
    //         res.status(400)
    //         return res.send("People not found")
    //     } else {
    //         res.render('people/show', people)
    //     }
    // })
    // res.send("here")
}

const get_persons = (req,res) => {
    // rendering create person page
    res.render('people/person')
}

const get_person = async (req, res) => {
    try {
        const person = await getPersonById(req)
        // console.log(person)
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
    console.log("req.body", req.body)
    // Save the req.body data to variables
    const { firstName, middleName, lastName, DOB, birthPlace } = req.body
    let person = await PersonModel.create({ firstName, middleName, lastName, DOB, birthPlace })
    // console.log(person)
    
    res.redirect(`people/${person._id}`)
}

const remove_person = async (req,res) => {
    try {
        const response = await deletePerson(req)
        res.status(200).send("Person Deleted")
    
      } catch (error) {
        res.status(500).send({
          error
        })
    }
}

const change_person = (req,res) => {
    res.send('person updated')
}

module.exports = {
    get_people,
    get_persons,
    get_person,
    create_person,
    remove_person,
    change_person
}