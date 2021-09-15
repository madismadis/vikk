/*Write a function greet(name) that logs name in a simple greeting. For example, when name is "Bob",
the method should return a string "Hello, Bob.".
Invoke the function and log it out.
Handle nulls by introducing a stand-in. For example, when name is undefined, 
then the method should return the string "Hello, my friend.” 
Handle two names of input. When name is an array of two names 
(or, in languages that support it, varargs or a splat), then both names should be printed. 
For example, when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."
*/

/*function Greet(name) {
    
  if (name == null) {
   return ('Hello, my friend!')
   } else {
    return ("Hello, " + name + "!")
    }
}
console.log(Greet("madsi"))*/

function Greet(name) {
    
    if (name == null) {
        return ('Hello, my friend!')
    } else if (name instanceof Array) {
        if(name.length >= 1){ 
             return ("Hello, " + name[0] + " and " + name [1] + "!")
        }
             } else {
                return ("Hello, " + name + "!")
            }
  }

  console.log(Greet(["madis", "kati"])) //Hello, madis and kati!
  console.log(Greet("madsi")) //Hello, madsi!
  console.log(Greet()) //Hello, my friend!
