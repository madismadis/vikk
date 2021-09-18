// Loo funktsioon mis kontrollib kas väärtus (string) on tühi või ei.
// Kontrolli ja logi välja sisenditega:
// ’’
// ‘tere’
// 'minu nimi on John’
// Tulemus peaks olema: true, false

// Loo funktsioon, mis teeb kõikide stringide väärtused suure algus tähega. Kasuta samu väärtuseid, mis eelnevalt defineeritud. Tulemus peaks olema:
// ’’
// ‘Tere’
// ‘Minu nimi on John’
// Lae uus kood üles githubi


function checking(string) { 
    return (!string || string.length === 0)}

console.log(checking(""))
console.log(checking("tere"))
console.log(checking("minu nimi on John"))

function UpperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
console.log(UpperFirst("tere"))
console.log(UpperFirst('minu nimi on John'))
