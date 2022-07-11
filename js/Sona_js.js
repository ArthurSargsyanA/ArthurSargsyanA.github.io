const buttons = document.querySelectorAll(".but");
const advertisement = document.querySelector(".advertisement_parent");
const images = document.querySelectorAll(".n");
const left_button = document.querySelector(".left");
const right_button = document.querySelector(".right");
const advertisement_but = document.getElementsByClassName("advertisement_but");

function light(a ,b ,c){
	a.style.backgroundColor = "#FECE47";
	b.style.backgroundColor = "#bbb"
	c.style.backgroundColor = "#bbb"
}
buttons[0].addEventListener("click" ,() => {
	light(buttons[0] , buttons[1] , buttons[2]);
});
buttons[1].addEventListener("click" , () =>{
	light(buttons[1] , buttons[0] , buttons[2]);
});
buttons[2].addEventListener("click" , () =>{
	light(buttons[2] , buttons[1] , buttons[0]);
});

for(let i = 0 ; i < advertisement_but.length ; i++){
	advertisement_but[i].addEventListener("click" , () =>{
		advertisement.style.display = "flex";
	});
}

right_button.addEventListener("click" ,() =>{
	let first_img = images[0].src;
	for(let i = 0 ; i < images.length ; i++){
		if (i === 4){
			images[i].src = first_img;
		}
		else{
			images[i].src = images[i + 1].src;
		}
	}
});

left_button.addEventListener("click" ,() =>{
	let last_img = images[4].src;
	for(let i = images.length - 1 ; i >= 0 ; i--){
		if (i === 0){
			images[i].src = last_img;
		}
		else{
			images[i].src = images[i - 1].src;
		}
	}
});

