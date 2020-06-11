/*function multiply()
	{
		var a=10,b=20;
		alert(a*b);
		console.log(a*b);
		return(a*b);
}
multiply() ;
*/
//------------------DOM SELECTORS--------------------
var button =document.querySelector("Button");
var input=document.querySelector("input");
//console.log(button);
//console.log(input);
//window.document.getElementsByTagName('h1');
//-------------------DOM EVENTS-------------------------
/*
1) 
button.addEventListener("click",function(){

	console.log("hey");
})

console.log(input.value);
*/
var ul=document.querySelector("ul");
button.addEventListener("click",function(){
	if(input.value.length>0)
	{
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";

	}
})
input.addEventListener("keypress",function(event)
{
 if(input.value.length>0 && event.keyCode==13)
  var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
})






