function loadHtml(filename){
	document.getElementById('cover').style.animation = "switch 1.2s linear";
	setTimeout(function(){document.getElementById('main').innerHTML = '<iframe class="iframe" frameborder="0" src="'+filename+'">';}, 481);
	setTimeout(function(){document.getElementById('cover').style.animation = "none";}, 1201);
}
function resetCur(){
	document.getElementById('home').classList.remove('curr');
	document.getElementById('proj').classList.remove('curr');
	document.getElementById('about').classList.remove('curr');
	document.getElementById('contact').classList.remove('curr');
}
function setCur(idname){
	document.getElementById(idname).classList.add('curr');
}
