let notes = [12, 8, 15, 10, 7];
let c = 0;
for(let i = 0; i < notes.length; i++){
    c += notes[i];

}
console.log(c);
let moyenne;
moyenne = c / notes.length;
console.log(moyenne);
let variable = 0;
for(let i = 0; i < notes.length; i++){
    if(notes[i] > variable){
        variable = notes[i];

    }


}
console.log(variable);

let d = 0;
for(let i = 0; i < notes.length; i++){
    if(notes[i] >= 10){
        d += 1;
    }
}
console.log(d);