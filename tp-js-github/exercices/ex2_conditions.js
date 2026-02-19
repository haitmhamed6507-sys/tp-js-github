function fizzBuzz(n){
    for(let i = 0 ; i < n ;i++){
        if(n % 3 == 0){
            console.log("Fizz");

        }
        else if (n % 5 == 0) {
            console.log("Buzz");
        } 
        else if (n % 5 == 0 && n % 3 == 0 ) {
            console.log("FizzBuzz");
        } 
        else{
            console.log(n);
        }
    }

}
fizzBuzz(15);