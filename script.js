let div1 = document.getElementById("background");


let div2 = document.createElement("div");
div2.id = "logindiv";


window.onload = () =>{
loginPage();
}


var array = [{"emailid":"shobika","pwd":"sappa"},{"emailid":"shreya","pwd":"aaya"}];


var logintext = document.createElement("p");
var loginid = document.createElement("input");
var loginpwd = document.createElement("input");
var loginbtn = document.createElement("button");
var loginlink = document.createElement("p");

function loginPage()
{

	logintext.innerHTML = "User Login";
	logintext.id = "logintext";
	logintext.class = "pfont";

	loginid.placeholder = "Username";
	loginid.id = "loginid";
	loginid.classList.add("loginfield");

	loginpwd.placeholder = "Password";
	loginpwd.type = "password";
	loginpwd.id = "loginpwd";
	loginpwd.classList.add("loginfield");

	loginbtn.innerHTML = "Login";
	loginbtn.id = "loginbtn"; 
	loginbtn.span = "hover";
	loginbtn.setAttribute("onclick","loginvalidate()");

	loginlink.innerHTML = "New User/Register";
	loginlink.id = "loginlink";
	loginlink.setAttribute("onclick","registerPage()");

}



div2.appendChild(logintext);
div2.appendChild(loginid);
div2.appendChild(loginpwd);
div2.appendChild(loginbtn);
div2.appendChild(loginlink);
div1.appendChild(div2);
document.body.appendChild(div1);


function loginvalidate()
{
	var useremail = document.getElementById("loginid").value;
	var userpwd = document.getElementById("loginpwd").value;
	var flag=0;

	for(let i in array){
		if(useremail==array[i].emailid)
			{ flag = 1;break;}
	}
		
	if(flag==1)
	{
		for(let i in array)
		{
			if(userpwd==array[i].pwd)
			{flag = 2; break;}
		}
		if(flag==2)
		{
			alert("Login successful!");
			playerDetailsPage();
		}
		else
		alert("Incorrect password. Please try again");
	}
	else
	alert("Incorrect username. Please try again");
}


var regtext = document.createElement("p");
var regid = document.createElement("input");
var regpwd = document.createElement("input");
var regbtn = document.createElement("button");
var reglink = document.createElement("p");

function registerPage()
{
	regtext.innerHTML = "User Registration";
	regtext.id = "regtext";
	regtext.class = "pfont";


	regid.placeholder = "Username";
	regid.id = "regid";
	regid.classList.add("regfield");


	regpwd.placeholder = "Password";
	regpwd.type = "password";
	regpwd.id = "regpwd";
	regpwd.classList.add("regfield");


	regbtn.innerHTML = "Register";
	regbtn.id = "regbtn"; 
	regbtn.span = "hover";
	regbtn.setAttribute("onclick","regvalidate()");


	reglink.innerHTML = "";
	reglink.id = "reglink";
	
	div2.replaceChild(regtext,logintext);
	div2.replaceChild(regid,loginid);
	div2.replaceChild(regpwd,loginpwd);
	div2.replaceChild(regbtn,loginbtn);
	div2.replaceChild(reglink,loginlink);
}




function regvalidate()
{
	var newemail = document.getElementById("regid").value;
	var newpwd = document.getElementById("regpwd").value;
	var flag =0;
	var regobj = {"emailid" : newemail,"pwd" : newpwd};

	for(let i in array){
		if((newemail == array[i].emailid)&&(newpwd == array[i].pwd))
			{ flag=1; break;}
		
	}
	if(flag==1)
	alert("Already exists!")
    else{
		array.push(regobj);
		alert("Registered successfully!");
		document.getElementById("regid").value = ' ';
		document.getElementById("regpwd").value = ' ';
	
		backToLoginPage();
	}
	
	
}

 
function backToLoginPage()
{
	div2.replaceChild(logintext,regtext);
	div2.replaceChild(loginid,regid);
	div2.replaceChild(loginpwd,regpwd);
	div2.replaceChild(loginbtn,regbtn);
	div2.replaceChild(loginlink,reglink);
}

var playertext = document.createElement("p");
var playerOne = document.createElement("input");
var playerTwo = document.createElement("input");
var playbtn = document.createElement("button");

function playerDetailsPage(){
	playertext.innerHTML = "Player Details";
	playertext.id = "logintext";
	playertext.class = "pfont";

	playerOne.placeholder = "Player One Name";
	playerOne.id = "playerOne";
	playerOne.classList.add("loginfield");

	playerTwo.placeholder = "Player Two Name";
	playerTwo.id = "playerTwo";
	playerTwo.classList.add("loginfield");

	playbtn.innerHTML = "Play";
	playbtn.id = "loginbtn"; 
	playbtn.span = "hover";
	playbtn.setAttribute("onclick","gamePage()");

	div2.replaceChild(playertext,logintext);
	div2.replaceChild(playerOne,loginid);
	div2.replaceChild(playerTwo,loginpwd);
	div2.replaceChild(playbtn,loginbtn);
	div2.replaceChild(loginlink,loginlink);
}


function gamePage(){
	div1.removeChild(div2);
	var gamepage = document.createElement("section");
	var gametitle = document.createElement("h1");
	gametitle.classList.add("gametitle");
	gametitle.innerHTML = "Tic Tac Toe";
	gamepage.appendChild(gametitle);

	var gamecontainer =  document.createElement("div");
	gamecontainer.classList.add("gamecontainer");

	var cell0 = document.createElement("div");
	cell0.setAttribute("data-cell-index","0");
	cell0.classList.add("cell");
	gamecontainer.appendChild(cell0);

	var cell1 = document.createElement("div");
	cell1.setAttribute("data-cell-index","1");
	cell1.classList.add("cell");
	gamecontainer.appendChild(cell1);

	var cell2 = document.createElement("div");
	cell2.setAttribute("data-cell-index","2");
	cell2.classList.add("cell");
	gamecontainer.appendChild(cell2);

	var cell3 = document.createElement("div");
	cell3.setAttribute("data-cell-index","3");
	cell3.classList.add("cell");
	gamecontainer.appendChild(cell3);

	var cell4 = document.createElement("div");
	cell4.setAttribute("data-cell-index","4");
	cell4.classList.add("cell");
	gamecontainer.appendChild(cell4);

	var cell5 = document.createElement("div");
	cell5.setAttribute("data-cell-index","5");
	cell5.classList.add("cell");
	gamecontainer.appendChild(cell5);

	var cell6 = document.createElement("div");
	cell6.setAttribute("data-cell-index","6");
	cell6.classList.add("cell");
	gamecontainer.appendChild(cell6);

	var cell7 = document.createElement("div");
	cell7.setAttribute("data-cell-index","7");
	cell7.classList.add("cell");
	gamecontainer.appendChild(cell7);

	var cell8 = document.createElement("div");
	cell8.setAttribute("data-cell-index","8");
	cell8.classList.add("cell");
	gamecontainer.appendChild(cell8);

    gamepage.appendChild(gamecontainer);
	
	var gamestatus = document.createElement("h2");
	gamestatus.classList.add("gamestatus");
	gamepage.appendChild(gamestatus);

	var gamerestart = document.createElement("button");
	gamerestart.classList.add("gamerestart");
	gamerestart.innerHTML = "Restart Game";
	gamepage.appendChild(gamerestart);
	div1.appendChild(gamepage);


	/* Game logic */
	const statusDisplay = document.querySelector('.gamestatus');
	let gameActive = true;
	var currentPlayer = 'X';
	var player1 = playerOne.value;
	var player2 = playerTwo.value;
	var nowPlaying = playerOne.value;
	let gameState = ["", "", "", "", "", "", "", "", ""];
	const winningMessage = () => `Player ${nowPlaying} has won!`;
	const drawMessage = () => `Game ended in a draw!`;
	const currentPlayerTurn = () => `It's ${nowPlaying}'s turn`;
	statusDisplay.innerHTML = currentPlayerTurn();
	document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', afterCellClick));
	document.querySelector('.gamerestart').addEventListener('click', restartGame);
	
	function afterCellClick(clickedCellEvent) {
		const clickedCell = clickedCellEvent.target;
		const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
		if (gameState[clickedCellIndex] !== "" || !gameActive) {
			return;
		}
		cellPlayed(clickedCell, clickedCellIndex);
      	resultValidation();
	}

	function cellPlayed(clickedCell, clickedCellIndex) {
		gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;

	}

	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	function resultValidation() {
		let roundWon = false;
		for (let i = 0; i <= 7; i++) {
			const winCondition = winningConditions[i];
			let a = gameState[winCondition[0]];
			let b = gameState[winCondition[1]];
			let c = gameState[winCondition[2]];
			if (a === '' || b === '' || c === '') {
				continue;
			}
			if (a === b && b === c) {
				roundWon = true;
				break
			}
		}
		if (roundWon) {
			statusDisplay.innerHTML = winningMessage();
			gameActive = false;
			return;
		}
		let roundDraw = !gameState.includes("");
    	if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
		}
	playerChange();
}

function playerChange() {
	nowPlaying = currentPlayer === "X" ? player2 : player1;
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	statusDisplay.innerHTML = currentPlayerTurn();
  }

  function restartGame() {
	gameActive = true;
	currentPlayer = "X";
	gameState = ["", "", "", "", "", "", "", "", ""];
	statusDisplay.innerHTML = currentPlayerTurn();
	document.querySelectorAll('.cell')
			   .forEach(cell => cell.innerHTML = "");
  }
}

