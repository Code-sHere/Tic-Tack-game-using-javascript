let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContanier = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerO

const winPaterns = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8]
];

const restgame = () => {
	turnO = true;
	enableBoxes();
	msgContanier.classList.add("hide");
};

boxes.forEach((box) => {
	box.addEventListener("click",() =>{
		console.log("");
		if (turnO) {
			box.innerText = "O";
			box.color="red";
			turnO = false;
		} else {
			box.innerText = "X";
			turnO = true;
		}
		box.disabled = true;
		check();
	});
});


const disableBoxes = () => {
	for(let box of boxes){
		box.disabled = true;
	}
};

const enableBoxes = () => {
	for(let box of boxes){
		box.disabled = false;
		box.innerText = "";
	}
};


const showWinner = (winner) => {
	msg.innerText = `Congratulations, Winner is ${winner}`;
	msgContanier.classList.remove("hide");
	disableBoxes();
}

const check = () => {
	for(let patterns of winPaterns)	 {
		let pos1Val= boxes[patterns[0]].innerText;
		let pos2Val= boxes[patterns[1]].innerText;
		let pos3Val= boxes[patterns[2]].innerText;

		if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
			if(pos1Val === pos2Val && pos2Val === pos3Val) {
				console.log("winner",pos1Val);
				showWinner(pos1Val);
			}
		}
	}
};


newBtn.addEventListener("click",restgame);
restBtn.addEventListener("click",restgame);