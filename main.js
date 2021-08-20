let input='a whale of a deal!';
     input=input.toLowerCase();

const vowels=['a','e','i','o','u'];

let resultArray=[];

let lengthInput=input.length;
let lengthVowels=vowels.length;

for(let i=0; i<lengthInput ; i++){
 // console.log(input[i]+' is '+i);
 for(let j=0; j<lengthVowels ;j++){
  // console.log(vowels[j]+' is '+j);
  if(input[i]==vowels[j]){
 resultArray.push(input[i]);
 if(input[i]=='e' || input[i]=='u' ){
      
      resultArray.push(input[i]);
    }
   } 
   }


  
 }


console.log(resultArray.join('').toUpperCase());
