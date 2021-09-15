/*Loo muutujad, mille väärtused on:
Sinu eesnimi
Sinu sünni päev
Sinu sünni kuu
Sinu sünni aasta
Sinu hobid (vähemalt 2)
Objekt, mille sees on Sinu eesnimi, sünnipäev (päev.kuu.aasta), Sinu hobid
Logi välja oma sünnipäev (päev.kuu.aasta)
Jooksuta oma koodi (node task2.js)*/

//yl.2
/*const firstName = 'Madis'
const birthDay = 5
const birthMonth = 11
const birthYear = 1981
let Hobbies= ['codehacking', 'codecracking']
let dateOfBirth = birthDay+'.'+birthMonth+'.'+birthYear
const about = { firstName: firstName, dateOfBirth: dateOfBirth, Hobbies: Hobbies }
console.log(dateOfBirth)
console.log(about)*/

//yl.2.1
const firstName = 'Madis'
const dateOfBirth = new Date (1981,11,5)
const date = dateOfBirth.getDate ()
const month= dateOfBirth.getMonth ()
const fullyear = dateOfBirth.getFullYear ()
let Hobbies= [ 'codehacking', 'codecracking' ]
const about = { firstName: firstName, dateOfBirth: date+'.'+month+'.'+fullyear, Hobbies: Hobbies }
console.log(date+'.',month+'.',fullyear);
console.log(about);
