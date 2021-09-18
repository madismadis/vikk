/*Logi välja for loopi abil erinevad väljundid:
"Red,Green,White,Black."
"Red,Green,White,Black,"
"Red+Green+White+Black+”*/

const colors = ["Red", "Green", "White", "Black"]
for (let i =0; i < colors.length; i++){
    if(i ===1)
    break
console.log('"'+colors[0]+','+colors[1]+','+colors[2]+','+colors[3]+'.'+ '"')
console.log('"'+colors[0]+','+colors[1]+','+colors[2]+','+colors[3]+','+ '"')
console.log('"'+colors[0]+'+'+colors[1]+'+'+colors[2]+'+'+colors[3]+'+'+ '"')
}

