const userData = [
  {
    firstName: 'Julianne',
    lastName: 'Crawford',
    email: 'julianne@email.com',
    imageUrl:
      'https://media.licdn.com/dms/image/C5603AQGfbDyRLQO6jQ/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=2SFa6RHddKIIfn5-4UBpMTJGxyO7qprpPW1A64qq0-Q',
    password:
      '3e89dbdbf7bb3654c2e5a28bdab51afd525c0f7903a85b35bbd3bdb57b02fe30',
    salt: '6PHe8oLWLkc6yZ0+E/i/9w=='
  },
  {
    firstName: 'Cati',
    lastName: 'Crawford',
    email: 'cati@email.com',
    imageUrl:
      'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/41804857_10156058765013759_2301523101042606080_o.jpg?_nc_cat=102&_nc_ht=scontent-ort2-2.xx&oh=c36e8da44854d4e632ce4259b857c1d9&oe=5C97896B',
    password:
      '22237ab79807cd52a3ad02bfcf8da6e425dc6003123e6831e8430fd37d53df03',
    salt: 'c34qk49Nv+eTtgEhkTjExw=='
  }
]

const schoolData = [
  {name: 'UCSF'},
  {name: 'Mount Sinai'},
  {name: 'UCLA'},
  {name: 'University of Colorado'},
  {name: 'Northwestern University'},
  {name: 'University of Chicago'},
  {name: 'Cornell University'}
]

const listData = [
  {schools: ['UCSF', 'Mount Sinai', 'University of Chicago', 'Northwestern University', 'Cornell Univerity', 'UCLA', 'University of Colorado']}
]


module.exports = {
  userData,
  schoolData,
  listData
}
