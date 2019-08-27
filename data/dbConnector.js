import mongoose from "mongoose"
import Sequelize from "sequelize"
import _ from "lodash"
import casual from "casual"


mongoose.connect('mongod://localhost/friends')

const friendSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
       type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
})

const Friends = mongoose.model('friends', friendSchema)

//. SQL
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite'
})

const Aliens = sequelize.define('aliens', {
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING }
})

Aliens.sync({ force: true }).then(() => {
    _.times(10, () => {
        Aliens.create({
            firstname: casual._first_name,
            lastname: casual._last_name,
            planet: casual.word
        })
    })
})

export { Friends, Aliens }