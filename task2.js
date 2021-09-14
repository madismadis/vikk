/*Loo muutujad, mille väärtused on:
Sinu eesnimi
Sinu sünni päev
Sinu sünni kuu
Sinu sünni aasta
Sinu hobid (vähemalt 2)
Objekt, mille sees on Sinu eesnimi, sünnipäev (päev.kuu.aasta), Sinu hobid
Logi välja oma sünnipäev (päev.kuu.aasta)
Jooksuta oma koodi (node task2.js)*/

const firstName = 'Madis'
const birthDay = 5
const birthMonth = 11
const birthYear = 1981
let Hobbies= [ 'codehacking', 'codecracking' ]
let dateOfBirth = birthDay+'.'+birthMonth+'.'+birthYear
const about = { firstName: firstName, dateOfBirth: dateOfBirth, Hobbies: Hobbies }
console.log(dateOfBirth)
