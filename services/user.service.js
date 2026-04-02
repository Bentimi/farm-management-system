const { prisma } = require("../lib/prisma.js")
const bcryptjs = require("bcryptjs");


const createUser = async (data) => {
    if (!data.last_name || !data.first_name || !)
    // const user = await prisma.user.
}

module.exports = {
    createUser
}