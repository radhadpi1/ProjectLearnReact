let dayOfWeek = 'friday'
let message =''
switch(dayOfWeek){
    case 'Wednesday': message ='Go to work and attend a meeting today'
                        break
    case 'Saturday': 
    case 'Sunday': message = 'Enjoy your weekend'
                    break;
    case 'friday': message ='go to work and have fun too'
                    break;
    default: 
        message ='go to work'
}
console.log(message)
message =''

let age = 23
let label =''
switch(age>0) {
 case age < 18 : label = 'minor'
                 break
 case age >= 18 && age <= 65: (age>21)?label = 'Over 21 and Adult': label = 'Adult'
                    break
 default :
        label = "Senior citizen"

}
console.log(label)


age = 23
switch(age>0) {
    case age < 21 : message = 'Any Non-alchoholic beverage'
                    break
    
    case age >= 21: (age == 21)?message = ' beer for age 21': (age == 22)? message = 'coktail for age 22':message = 'Any alcholic beverage'
                      break
    default :
           message = "any alcholic beverage"
   
   }
   console.log('U can order '+message)