const PersonModel = require('../models/people');
const { 
    getPersonById, 
    getAllPeople, 
    deletePerson, 
    updatePerson,
    addChild,
    addChildToPerson
} = require('../utils/person_utils')

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
    // console.log("req.body", req.body)
    // Save the req.body data to variables
    const { firstName, middleName, lastName, DOB, birthCity, birthState, birthCountry } = req.body
    let person = await PersonModel.create({ 
        firstName, middleName, lastName, DOB, birthCity, birthState, birthCountry,
        events: [{"desc": "DOB", "location": `${birthCity}, ${birthCountry}`, "date": DOB}]
    })
    // console.log(person)
    
    res.redirect(`people/${person._id}`)
}

const remove_person = async (req,res) => {
    try {
        const person = await deletePerson(req)
        res.status(200).send("Person Deleted")
    
      } catch (error) {
        res.status(500).send({
          error
        })
    }
}

const edit_person = async (req, res) => {
    try {
        const person = await getPersonById(req)
        // console.log(person)
        res.status(200).render('people/edit', person )
    } catch (error) {
        res.status(500).send({
            error
        })
    }
    // res.render('people/person')
}

const update_person = async (req,res) => {
    // res.send('person updated')
    try {
        const person = await updatePerson(req)
        // console.log(person)
        res.status(200).render('people/show', person)
    
      } catch (error) {
        res.status(500).send({
          error
        })
    }
}

const add_child = (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id
    res.render('people/child', {id} )
}

const add_children = async (req, res) => {
    try {
        const { firstName, middleName, lastName, DOB, birthCity, birthState, birthCountry } = req.body
        let child = await PersonModel.create({ 
            firstName, middleName, lastName, DOB, birthCity, birthState, birthCountry, 
            events: [{"desc": "DOB", "location": `${birthCity}, ${birthCountry}`, "date": DOB}]
        })
        const childId = child.id

        const parent = await getPersonById(req)
        const parentId = parent.id

        // const updatedParent = await PersonModel.findByIdAndUpdate(parentId, {$push: {"children": [childId]}})
        parent.children.push(childId);
        parent.events.push({"desc": "Birth of Child", "location": `${birthCity}, ${birthCountry}`, "date": DOB})
        parent.save();
        console.log(parent)

        res.status(200).render('people/show', child)
        
      } catch (error) {
        res.status(500).send({
          error
        })
    }
}

const add_event_form = async (req, res) => {
    const id = req.params.id
    res.render('people/event', {id})
}

const add_event = async (req, res) => {
    console.log("req.body", req.body)
    // Save the req.body data to variables
    const event = req.body
    
    const person = await getPersonById(req)
    person.events.push(event)
    person.save()
    console.log(person)
    res.redirect('/people/all')
    
}

module.exports = {
    get_people,
    get_persons,
    get_person,
    create_person,
    remove_person,
    update_person,
    edit_person,
    add_child,
    add_children,
    add_event,
    add_event_form
}