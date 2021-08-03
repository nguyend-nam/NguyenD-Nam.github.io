var menu = false;
var submenu = false;
var subnav = false;
function showmenu(){
	menu = true;
	document.getElementById('menu').style.transition = '0.15s';
	document.getElementById('menu').style.opacity = '1';
	setTimeout(function() {
		document.getElementById('menu').style.right = '0';
	}, 10);
	setTimeout(function() {
		document.getElementById('menu').style.transition = '0s';
	}, 250);
}
function hidemenu(){
	menu = false;
	document.getElementById('menu').style.transition = '0.15s';
	setTimeout(function() {
		document.getElementById('menu').style.right = '100vw';
	}, 10);
	setTimeout(function() {
		document.getElementById('menu').style.transition = '0s';
	}, 250);
}
function showsub(){
	if(submenu == false){
		document.getElementById('socials1').innerHTML = 'Socials & Links <i class="fas fa-angle-up"></i>';
		document.getElementById('submenu').style.display = 'block';
		submenu = true;
	}
	else if(submenu == true){
		document.getElementById('socials1').innerHTML = 'Socials & Links <i class="fas fa-angle-down"></i>';
		document.getElementById('submenu').style.display = 'none';
		submenu = false;
	}
}
function showsubnav(){
	if(subnav == false){
		document.getElementById('socials').innerHTML = 'Socials & Links <i class="fas fa-angle-up"></i>';
		document.getElementById('subnav').style.display = 'block';
		subnav = true;
	}
	else if(subnav == true){
		document.getElementById('socials').innerHTML = 'Socials & Links <i class="fas fa-angle-down"></i>';
		document.getElementById('subnav').style.display = 'none';
		subnav = false;
	}
}
