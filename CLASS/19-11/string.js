// find true lenght of sting using prototype and inheritance

let user1="vj";
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length of string is ${this.trim().length}`);
}
user1.trueLength();
"vijay".trueLength();