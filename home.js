function ageInDays(){
   var birthYear = prompt("When were you born ...good friend?");
   var days = (2022 - birthYear)*365;
   var h1 = document.createElement("h1");
   var textAnswer = document.createTextNode("You are "+ days + " old days");
   h1.setAttribute("id",'ageInDays');
   h1.appendChild(textAnswer);
   document.getElementById("flex_box_result").appendChild(h1);


}
function  reset(){
    document.getElementById("ageInDays").remove();
    
}



