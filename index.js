if (document.images){
  pic= new Image(); 
  pic.src="images/cow/icon-wake.gif"; 
  pic= new Image(); 
  pic.src="images/cow/stand2graze.gif"; 
  pic= new Image(); 
  pic.src="images/cow/graze2stand.gif"; 
  pic= new Image(); 
  pic.src="images/cow/walk.gif"; 
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/ne.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/nw.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/se.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/sw.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/n.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/s.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/e.gif";
  pic= new Image(); 
  pic.src="images/borders/fluct-moving/w.gif";
}


function cowIconSleep(){
	document.getElementById('cow_icon').src="images/cow/icon-sleep.gif";
}

function cowIconWake(){
	document.getElementById('cow_icon').src="images/cow/icon-wake.gif";
}

function grazeCow(){
	document.getElementById('cow_img').src="images/cow/stand2graze.gif";	
	setTimeout('wakeCow()',2500);
}

function wakeCow(){
	document.getElementById('cow_img').src="images/cow/graze2stand.gif";	
	setTimeout('walkCow()',1500);
}

function walkCow(){
	x=parseInt(document.getElementById('cow_div').style.left);
	if ((x == -66)||(x%201==153)){
		document.getElementById('cow_img').src="images/cow/walk.gif";	
		document.getElementById('cow_div').style.left=String(x+3)+"px";
		document.getElementById('moo_div').style.visibility="hidden";
		setTimeout('walkCow()',50);
		if (x == 354) {
   		setTimeout('moveUFO()',50);
		}
	} else if (x%201 == 150) {
		document.getElementById('cow_div').style.left=String(x+3)+"px";
		document.getElementById('moo_div').style.left=String(x+60)+"px";
		document.getElementById('moo_div').style.visibility="visible";
		setTimeout('grazeCow()',50);
	} else if (x < 459) {
		document.getElementById('cow_div').style.left=String(x+3)+"px";
		setTimeout('walkCow()',50);
	}	else {
		document.getElementById('cow_img').src="images/cow/stand.gif";	
	}
}

function moveUFO(){
	x=parseInt(document.getElementById('ufo_top').style.left);
	if (x==-160) {
		document.getElementById('ufo_top').style.visibility="visible";
		document.getElementById('ufo_bottom').style.visibility="visible";
	}
	if (x<405) {
		document.getElementById('ufo_top').style.left=String(x+5)+"px";
		document.getElementById('ufo_bottom').style.left=String(x+5)+"px";
		y=180+((x-405)*(x-405))/500;
		document.getElementById('ufo_top').style.bottom=String(y+40)+"px";
		document.getElementById('ufo_bottom').style.bottom=String(y)+"px";
		
		setTimeout('moveUFO()',40);		
	} else {
		document.getElementById('lower_beam').style.visibility="visible";
		document.getElementById('upper_beam').style.visibility="visible";
		setTimeout('raiseCow()',40);	
	}
}

function raiseCow(){
	y=parseInt(document.getElementById('cow_div').style.bottom);
	if (y<194) {
		document.getElementById('cow_div').style.bottom=String(y+2)+"px";
		setTimeout('raiseCow()',40);		
		document.getElementById('cow_img').width=65*(250-y)/250;
		document.getElementById('cow_img').height=40*(250-y)/250;
		w=parseInt(document.getElementById('cow_img').width);
		document.getElementById('cow_div').style.left=String(459+(65-w)/2)+"px";
	} else {
		document.getElementById('cow_div').style.visibility="hidden";
		document.getElementById('lower_beam').style.visibility="hidden";
		document.getElementById('upper_beam').style.visibility="hidden";
		setTimeout('UFOCircle()',40);	
	}
}

theta=-Math.PI/2;

function UFOCircle(){
	if (theta<3*Math.PI/2) {
		x=Math.round(400*Math.cos(theta)+405);
		y=Math.round(400*Math.sin(theta)+400+180);			
		document.getElementById('ufo_top').style.left=String(x)+"px";
		document.getElementById('ufo_top').style.bottom=String(y+40)+"px";
		document.getElementById('ufo_bottom').style.left=String(x)+"px";
		document.getElementById('ufo_bottom').style.bottom=String(y)+"px";
		theta+=Math.PI/80;
		setTimeout('UFOCircle()',40);
	} else {
		document.getElementById('ufo_top').style.left="405px";
		document.getElementById('ufo_top').style.bottom="220px";
		document.getElementById('ufo_bottom').style.left="405px";
		document.getElementById('ufo_bottom').style.bottom="180px";		
		document.getElementById('lower_beam').style.visibility="visible";
		document.getElementById('upper_beam').style.visibility="visible";
		document.getElementById('cow_div').style.visibility="visible";
		setTimeout('lowerCow()',40);		
	}
}

function lowerCow(){
	y=parseInt(document.getElementById('cow_div').style.bottom);
	if (y>0) {
		document.getElementById('cow_div').style.bottom=String(y-2)+"px";
		document.getElementById('cow_img').width=65*(250-y)/250;
		document.getElementById('cow_img').height=40*(250-y)/250;		
		w=parseInt(document.getElementById('cow_img').width)
		document.getElementById('cow_div').style.left=String(459+(65-w)/2)+"px";
		setTimeout('lowerCow()',40);		
	} else {
		document.getElementById('lower_beam').style.visibility="hidden";
		document.getElementById('upper_beam').style.visibility="hidden";
		setTimeout('document.getElementById("math_moo_div").style.visibility="visible"',2000);
		setTimeout('raiseUFO()',40);	
	}
}

function raiseUFO(){
	x=parseInt(document.getElementById('ufo_top').style.left);
	if (x>-160) {
		document.getElementById('ufo_top').style.left=String(x-5)+"px";
		document.getElementById('ufo_bottom').style.left=String(x-5)+"px";
		y=180+((x-405)*(x-405))/800;
		document.getElementById('ufo_top').style.bottom=String(y+40)+"px";
		document.getElementById('ufo_bottom').style.bottom=String(y)+"px";
		
		setTimeout('raiseUFO()',40);		
	} else {
		document.getElementById('ufo_top').style.visibility="hidden";
		document.getElementById('ufo_bottom').style.left="hidden";
	}
}

function animateFluct(){
	document.getElementById('fluct_nw').src="images/borders/fluct-moving/nw.gif";
	document.getElementById('fluct_sw').src="images/borders/fluct-moving/sw.gif";
	document.getElementById('fluct_ne').src="images/borders/fluct-moving/ne.gif";
	document.getElementById('fluct_se').src="images/borders/fluct-moving/se.gif";	
	
	document.getElementById('fluct_n').style.background= "url(images/borders/fluct-moving/n.gif)"; 
	document.getElementById('fluct_w').style.background= "url(images/borders/fluct-moving/w.gif)"; 
	document.getElementById('fluct_e').style.background= "url(images/borders/fluct-moving/e.gif)"; 
	document.getElementById('fluct_s').style.background= "url(images/borders/fluct-moving/s.gif)"; 
}



function cowIconClicked(){
	document.getElementById('grass_div').style.visibility="visible";
	animateFluct();
	walkCow();
}



function displayOther(){
	document.getElementById('math_div').style.display="none";
	document.getElementById('other_div').style.display="block";
}

function displayMath(){
	document.getElementById('math_div').style.display="block";
	document.getElementById('other_div').style.display="none";
}
