const player1=prompt("ENTER NAME OF FIRST PLAYER");
const player2=prompt("ENTER NAME OF SECOND PLAYER");

let score1=0;
let score2=0;

let P1=document.getElementById('P1');
let P2=document.getElementById('P2');

P1.innerHTML="Score of " + player1 + " is : " + score1;
P2.innerHTML="Score of " + player2 + " is : " + score2;

 


let count=1;
function fill(haris) {
						if(checkwin()){
						// alert("Winner");
						reset();
			}
			else{
		if(count<=9){
		if (count%2!=0) {
			document.getElementById(haris.id).innerHTML='X';
			
			// const myTimeout = setTimeout(myGreeting, 5000);
			checkwin();
		}
		else{
			document.getElementById(haris.id).innerHTML='O';
			checkwin();
		}
		count++;
		
	}
	else{
		alert("Match Draw");
		reset();
	}
	}
}

//------- RESET-------------------------------------------
function reset(){
	for( let i=1;i<=9 ;i++){
		document.getElementById("MINI"+i).innerHTML="";
		count=1;
	}
}
//----------CHECKWIN-------------------------------------------
function checkwin(){
	if(
		document.getElementById("MINI1").innerHTML=='X' &&
		document.getElementById("MINI2").innerHTML=='X' &&
		document.getElementById("MINI3").innerHTML=='X' ||

		document.getElementById("MINI4").innerHTML=='X' &&
		document.getElementById("MINI5").innerHTML=='X' &&
		document.getElementById("MINI6").innerHTML=='X' || 

		document.getElementById("MINI7").innerHTML=='X' &&
		document.getElementById("MINI8").innerHTML=='X' &&
		document.getElementById("MINI9").innerHTML=='X' ||

		document.getElementById("MINI1").innerHTML=='X' &&
		document.getElementById("MINI4").innerHTML=='X' &&
		document.getElementById("MINI7").innerHTML=='X' ||

		document.getElementById("MINI2").innerHTML=='X' &&
		document.getElementById("MINI5").innerHTML=='X' &&
		document.getElementById("MINI8").innerHTML=='X' ||

		document.getElementById("MINI3").innerHTML=='X' &&
		document.getElementById("MINI6").innerHTML=='X' &&
		document.getElementById("MINI9").innerHTML=='X'||

		document.getElementById("MINI1").innerHTML=='X' &&
		document.getElementById("MINI5").innerHTML=='X' &&
		document.getElementById("MINI9").innerHTML=='X' ||

		document.getElementById("MINI3").innerHTML=='X' &&
		document.getElementById("MINI5").innerHTML=='X' &&
		document.getElementById("MINI7").innerHTML=='X'
		){
			setTimeout(() => {
				alert(`${player1}  Wins`);
				let updatescore=score1+1;
				score1=updatescore;
				P1.innerHTML="Score of " +player1+ " is : " + score1;
				reset();
				return true;
				
			  }, 100);

			 
		
		
	}
	else if(
		document.getElementById("MINI1").innerHTML=='O' &&
		document.getElementById("MINI2").innerHTML=='O' &&
		document.getElementById("MINI3").innerHTML=='O' ||

		document.getElementById("MINI4").innerHTML=='O' &&
		document.getElementById("MINI5").innerHTML=='O' &&
		document.getElementById("MINI6").innerHTML=='O' || 

		document.getElementById("MINI7").innerHTML=='O' &&
		document.getElementById("MINI8").innerHTML=='O' &&
		document.getElementById("MINI9").innerHTML=='O' ||

		document.getElementById("MINI1").innerHTML=='O' &&
		document.getElementById("MINI4").innerHTML=='O' &&
		document.getElementById("MINI7").innerHTML=='O' ||

		document.getElementById("MINI2").innerHTML=='O' &&
		document.getElementById("MINI5").innerHTML=='O' &&
		document.getElementById("MINI8").innerHTML=='O' ||

		document.getElementById("MINI3").innerHTML=='O' &&
		document.getElementById("MINI6").innerHTML=='O' &&
		document.getElementById("MINI9").innerHTML=='O'||

		document.getElementById("MINI1").innerHTML=='O' &&
		document.getElementById("MINI5").innerHTML=='O' &&
		document.getElementById("MINI9").innerHTML=='O' ||

		document.getElementById("MINI3").innerHTML=='O' &&
		document.getElementById("MINI5").innerHTML=='O' &&
		document.getElementById("MINI7").innerHTML=='O'
		){
			setTimeout(() => {
				alert(`${player2} Wins`);
				let updatescore2=score2+1;
				score2=updatescore2;
				P2.innerHTML="Score of " +player2+ " is : " + score2;
				reset();
				return true;
				
			  }, 100);
	
	}
}