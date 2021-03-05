const protobuf = require('protobufjs')

async function run() {
  const root = await protobuf.load('./user.proto')

  const User = root.lookupType('userpackage.User')

  return User
}

// ① type verify
// run().then((User) => {
//   console.log(User.verify({ name: 'test', age: 2 })) // null
//   console.log(User.verify({ propertyDoesntExist: 'test' })) // null
//   console.log(User.verify({ age: 'not a number' })) // "age: integer expected"
// }).catch(err => console.log(err))


// ② encoding decoding
// run().then((User) => {
//   const buf = User.encode({ name: 'Bill', age: 30 }).finish()

//   console.log(Buffer.isBuffer(buf)) // true
//   console.log(buf.toString('utf8')) // Gnarly string that contains "Bill"
//   console.log(buf.toString('hex')) // 0a0442696c6c101e

//   const obj = User.decode(buf)
//   console.log(obj) // User { name: 'Bill', age: 30 }
// }).catch(err => console.log(err))

// ③ compare with JSON
// run().then((User) => {
//   const asProtobuf = User.encode({ name: 'Joe', age: 27 }).finish()
//   const asJSON = JSON.stringify({ name: 'Joe', age: 27 })

//   console.log(asProtobuf.length) // 7
//   console.log(asJSON.length) // 23
// }).catch(err => console.log(err))