'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({firstName: 'Julianne', lastName: 'Crawford', email: 'julianne.marik@gmail.com', imageUrl: 'https://media.licdn.com/dms/image/C5603AQGfbDyRLQO6jQ/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=2SFa6RHddKIIfn5-4UBpMTJGxyO7qprpPW1A64qq0-Q', password: '1b10a0b474027a053317957c4a0c3f0c70eb851c9a3fc1d95dfbdf6a7987c308', salt: 'k3fmFaQkkQ69YBOMxy+R8w=='}),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
