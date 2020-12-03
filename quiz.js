console.log("Hi, My name is Ritika Awasthy")
var readLineSync= require("readline-sync");
var userName= readLineSync.question("What is your name? ");
console.log("Namastey! "+ userName);
var score=0;

var ans1= readLineSync.question("Is my age greater than 25?: ");
if(ans1=='no'){
  console.log("You are right  :) ");
  score= score+1;
}
else {
  console.log("You are wrong :( ");
  score=score-1;
}

var ans2= readLineSync.question("Is my hometown Delhi?: ");
if(ans2=='yes'){
  console.log("You are right  :) ");
  score=score+1
}
else {
  score=score-1;
  console.log("You are wrong :( ");
}
console.log("Your score is: "+ score);

function add(num1,num2){
  return num1+num2;
}

console.log("Addition of 5 and 5 is " +add(5,5));

function prod(n1,n2){
  return n1*n2;
  }

var n1= readLineSync.question("Enter 1st number for multiplication: ");
var n2= readLineSync.question("Enter 2nd number for multiplication: ");

console.log("The product of "+n1+" and "+ n2+ " is: " + prod(n1,n2));


function check(question,answer){
  var ans= readLineSync.question(question)
  if(ans=answer){
    score++;
    console.log("Yay! You are right :) Score: "+score);

  }
  else {
     score--;
     console.log("You are wrong :( Score: "+ score);
  }
}

check("Where Do i live? ", "delhi")  ;
check ("Whats the color of my phone cover? ", "pink")

for( i=0;i<5;i++){
 console.log("Ritika Awasthy");
}

for(i=1;i<=10;i++){
  console.log(22+i);
}

var no= readLineSync.question("How many stars do you want? ");
str="*"

for(i=1;i<=no;i++){
  console.log("*".repeat(i))
}
console.log("Inverted stars")

for(i=no;i>=0;i--){
 console.log("*".repeat(i));
}

var groceryList= ["Milk","Cookies","Chocolates","Beans","Yogurt"];
console.log("First item: "+groceryList[0]);
console.log("Third item: "+groceryList[2]);
console.log("last item: "+groceryList[groceryList.length -1]);
console.log("List of Items:")
for(i=0;i<groceryList.length;i++){
  console.log(groceryList[i])
}

/*Array of superheros*/

var batman={
  name: "Batman",
  color: "black",
  power: "technology"
}
var superman={
  name:"Superman",
  color: "blue",
  power:"fly"
}
var spiderman={
  name:"Spiderman",
  color:"red",
  power: "spider-web"
}
var flash={
  name:"Flash",
  color:"yellow",
  power:"speed"
}

superheroes=[batman,superman,spiderman,flash];
console.log("\n")
for(i=0;i<superheroes.length;i++){
  console.log(superheroes[i].name+"  ");
  console.log(superheroes[i].color);
  console.log("-----------------");
}

 var questions=[ {
   que: "Do i love cheesecake?",
   ans: "yes"
 },
 {
   que: "Do i love dark chocolate?",
   ans: "no"
 }]

 /* Using check function on the line 45 */

 for(i=0;i<2;i++){
   var q = questions[i].que;
   var a= questions[i].ans;
   check(q,a);
 }
