function opacEveryMapCell(){
	var cell = '';
	for(a=0; a<4; a++){
		cell = alphabet[a];
		// console.log(string);
		for(i=1; i<5; i++){
			cell += i;
			// console.log(string);
			$(cell).classList.toggle("opacMapCell");
			cell = alphabet[a];
		}
	$('a1').classList.remove("opacMapCell");
	}
}
