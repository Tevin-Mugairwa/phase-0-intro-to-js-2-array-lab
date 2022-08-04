// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
 {
   // let cats = ["Milo", "Otis", "Garfield"];
    //cats.length = 0;
//return cats.push("Milo", "Otis", "Garfield", "Ralph",);
   cats.push(name);
   return cats;
 }
 
 function destructivelyPrependCat(name)
 {
     cats.unshift(name);
    //ats=["Milo","Otis","Garfield"];
    //cats.length = -1 ;
    return cats;
 }
 function destructivelyRemoveLastCat(name)
 {
    cats.pop();
    return cats;
 }
 function destructivelyRemoveFirstCat(name)
 {
    cats.shift();
    return cats;
 }
 function appendCat(name)
 {
    let nameCat =[...cats,name];
    return nameCat;
 }
 function prependCat(name)
 {
    let nameCat2=[name, ...cats];
    return nameCat2;
 }
  function removeLastCat()
  {
    let removeCat= cats.slice(0,cats.length-1);
    return removeCat;

  }
  function removeFirstCat()
  {
    let removeCat1= cats.slice(1);
    return removeCat1;
  }

