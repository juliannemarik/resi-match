'use strict'
const db = require('../server/db')
const {userData, schoolData, listData} = require('./seed-data')
const {User, School, List} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const userPromise = User.bulkCreate(userData, {returning: true})
  const schoolPromise = School.bulkCreate(schoolData, {returning: true})
  const listPromise = List.bulkCreate(listData, {returning: true})

  await Promise.all([userPromise, schoolPromise, listPromise])

  const cati = await User.findOne({
    where: {
      firstName: 'Cati'
    }
  })
  const lists = await List.findAll()
  const schools = await School.findAll()

  async function seedCati() {
    for (let i = 0; i < schools.length; i++) {
      await schools[i].setUsers(cati)
    }
    await lists[0].setUser(cati)
    return schools
  }
  await seedCati()


  await db.sync()
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
