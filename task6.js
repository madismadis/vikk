// Loo funktsioon, mis kirjutab 'Hello!’ n korda.
// Test andmed:
// n = undefined
// n = 2
// n = 3
// n = 12
// Muuda olemasolevat funktsiooni nii, et kui sisendeid ei ole antud, siis ta logiks ühe korra ‘Hi!’
// Muuda olemasolevat funktsiooni nii, et kui n väärtus on üle 10-ne,
// siis ta kasutaks samuti ‘Hi!’ vastav arv kordi.

function sayHello(n) {
    if (!n) {
    console.log('Hi!')
} else if (n > 10) {
    for( let i=0; i<n; i++ ) {
        console.log('Hi!')
    }
} else {
    for( let i=0; i<n; i++ ) {
        console.log('Hello!')
}
}
}

sayHello()
console.log(); // tühik vahel, mugavam lugeda
sayHello(2)
console.log();
sayHello(3)
console.log();
sayHello(12)
