function scuberGreetingForFeet(feet){
  // Write your code here!
    if(feet<=400){
    console.log("This one is one me!")
   }else if(feet> 400){
    return "That will be 2000"
   }else if(feet>1000 && feet<= 1500){
   return "That will be 3000!"
   }else{
    return "Sorry we don`t do that"
}

}
scuberGreetingForFeet(1000); 


function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
      return "This one is on me!";
  } else if (feet<=2000) {
      return "That will be twenty bucks.";
  } else if (feet>2000 && feet<= 2500) {
      return "I will gladly take your thirty bucks.";
  } else {
      return "No can do.";
  }
}
console.log(scuberGreetingForFeet(3000)); 


 function ternaryCheckCity(city){
    return city=== "NYC" ? "Ok, sounds good." : "No go.";
 }

 function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}