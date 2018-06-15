var arr=[0,0,0,0,0,0];
function setcolor(numblocks){
	for (var i=0;i<numblocks;i++){
		var r=Math.floor(Math.random()*256).toString();
		var g=Math.floor(Math.random()*256).toString();
		var b=Math.floor(Math.random()*256).toString();
		console.log(r,g,b);
		arr[i]=`RGB(${r},${g},${b})`;
	}
	console.log(arr);
	document.querySelector(".resetcolor").innerHTML=arr[Math.floor(Math.random()*numblocks)];
	document.getElementById("box1").style.backgroundColor=arr[0];
	document.getElementById("box2").style.backgroundColor=arr[1];
	document.getElementById("box3").style.backgroundColor=arr[2];
	document.getElementById("box4").style.backgroundColor=arr[3];
	document.getElementById("box5").style.backgroundColor=arr[4];
	document.getElementById("box6").style.backgroundColor=arr[5];
}
function chkcolor(blocknum){
	reslt.style.visibility= "visible";
	if(arr[blocknum-1]==document.querySelector(".resetcolor").textContent){
		console.log("here");
		reslt.innerHTML= "Correct";
		ng.innerHTML="Play Again";
		b1.style.backgroundColor= arr[blocknum-1];
		b2.style.backgroundColor= arr[blocknum-1];
		b3.style.backgroundColor= arr[blocknum-1];
		b4.style.backgroundColor= arr[blocknum-1];
		b5.style.backgroundColor= arr[blocknum-1];
		b6.style.backgroundColor= arr[blocknum-1];
	}
	else{
		document.getElementById(`box${blocknum}`).style.backgroundColor="black";
		reslt.innerHTML= "Try again";
	}
}
setcolor(6);
var ng= document.getElementById("newgame");
var reslt= document.getElementById("result");
var esy= document.getElementById("easy");
var hrd= document.getElementById("hard");
var b1= document.getElementById("box1");
var b2= document.getElementById("box2");
var b3= document.getElementById("box3");
var b4= document.getElementById("box4");
var b5= document.getElementById("box5");
var b6= document.getElementById("box6");
var difficulty= "hard";
var numblocks= 6;

hrd.style.backgroundColor= "blue";
hrd.style.color= "white";

ng.addEventListener("click",()=>{
	setcolor(numblocks);
	reslt.style.visibility="hidden";
	ng.innerHTML="New Game";
	b1.style.display= "inline-block";
	b2.style.display= "inline-block";
	b3.style.display= "inline-block";
	if(difficulty=="hard"){
		b4.style.display= "inline-block";
		b5.style.display= "inline-block";
		b6.style.display= "inline-block";
	}
});

esy.addEventListener("click",()=>{
	setcolor(3);
	numblocks=3;
	hrd.style.color= "black";
	hrd.style.backgroundColor= "white";
	esy.style.color= "white";
	esy.style.backgroundColor= "blue";
	b4.style.display= "none";
	b5.style.display= "none";
	b6.style.display= "none";
	difficulty= "easy";
});

hrd.addEventListener("click",()=>{
	setcolor(6);
	numblocks=6;
	hrd.style.backgroundColor= "blue";
	hrd.style.color= "white";
	esy.style.color= "black";
	esy.style.backgroundColor="white";
	b4.style.display= "inline-block";
	b5.style.display= "inline-block";
	b6.style.display= "inline-block";
	difficulty= "hard";
});

reslt.innerHTML= "Try again";
reslt.style.visibility="hidden";

b1.addEventListener("click",()=>{
	chkcolor(1);
})
b2.addEventListener("click",()=>{
	chkcolor(2);
})
b3.addEventListener("click",()=>{
	chkcolor(3);
})
b4.addEventListener("click",()=>{
	chkcolor(4);
})
b5.addEventListener("click",()=>{
	chkcolor(5);
})
b6.addEventListener("click",()=>{
	chkcolor(6);
})
