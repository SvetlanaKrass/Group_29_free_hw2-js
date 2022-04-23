

//задание 2*
let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function (age) {

    if (typeof age == "number") {
    
        if (age < age_2) {
          console.log("You don't have access ause your age is " + age + " It's less then");
        }
        else if (age >= age_2 && age < age_3) {
            console.log("Welcome !")
          }
        else if (age > age_3) {
          console.log("Keep calm and look Culture channel");
             }
         else {
             console.log("Technical work!");
           }
    }
    else {
        console.log("Check age!"); 
    }
    }
      
//checkAge (18);
checkAge ("22");