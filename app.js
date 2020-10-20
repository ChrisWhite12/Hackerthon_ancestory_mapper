const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
// const MongoStore = require("connect-mongo")(session)
const passport = require('passport');
// handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
//method override
const methodOverride = require('method-override');

const app = express()
const port = process.env.PORT || 3000

const dbConn = 'mongodb://localhost/ancestry_app'
const pageRoutes = require('./routes/pages_routes')
const peopleRoutes = require('./routes/people_routes')
const authRoutes = require('./routes/auth_routes')

app.use( express.urlencoded( {extended: true }) )
app.use( express.json() )

app.engine('handlebars', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

// Install middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    // resave and saveUninitialized set to false for deprecation warnings
    secret: "Express is awesome",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1800000
    }
    // store: new MongoStore({
    //     mongooseConnection: mongoose.connection
    // })
}));

require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());

// use means its a middle ware
// app.use( (req, res, next) => {
//     console.log('Middle-ware running.')
//     next()
// })

// app.engine('handlebars', exphbs())
// app.set('view engine', 'handlebars')

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/pages', pageRoutes)
app.use('/people', peopleRoutes)
app.use('/user', authRoutes)

app.listen(port, () => {
    console.log('listening on port:' + port)
})


