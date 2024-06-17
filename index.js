import { initServer } from './configs/app.js'
import { connect } from './configs/mong.js'

initServer()
connect()

import User from './src/user/user.model.js'
import { encrypt } from './src/utils/validator.js'

const registerDef = async() => {
    const encrypty = await encrypt('adminadmin')
    const newUser = new User({name: "asd",
        lastname: "asd",
        username: "admin",
        password: encrypty,
        email: "asd",
        phone: "12345678",
        role: "CLIENT"
    })
    await newUser.save()
}

registerDef()