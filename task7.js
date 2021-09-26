// Loo funktsioon mis genereerib suvalise numbri 1-100 vahel
// Loo array, mis koosneb 5-st suvalisest numbrist, kasutades eelnevalt loodud funktsiooni
// Loo funktsioon, mis leiab suurima numbri array-s ja kutsu funktsioon välja ja logi tulemust
// Loo funktsioon, mis leiab väikseima numbri array-s ja kutsu funktsioon välja ja logi tulemust
// Logi välja, mitu array väärtustest on paarisarvud (selleks tee funktsioon, mis kontrollib kas on paarisarv, 
//saad array true/false väärtustega ja loe kokku mitu true väärtust on)


function Random (min, max){
     return Math.floor(Math.random() * (max-min) + min);
    }
    console.log("Suvaline number: ", Random(1,100))


var MyArray = Array(5).fill().map(() => Random(1,100))
console.log("Suvalistest numbritest array: ", MyArray)


function maxValue (array){
    return Math.max.apply(null, array)
}
    console.log("Max arv arrayst: ", maxValue(MyArray));

function minValue (array){
    return Math.min.apply(null, array)
}
console.log("Min arv arrayst: ", minValue(MyArray));

function Count (array){
    var count = 0
    for (var i = 0; i < array.length; i++) {
        if (checkEven(array [i])==true) {
            count+=1
        }       
        }
    return count
    }

function checkEven (input){
    if (input % 2 === 0) { 
        return true
    }else{
        return false
    }
}
console.log("Paarisarvud kokku: ", Count(MyArray));