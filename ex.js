function pw(){
	var pw = document.getElementById('pw').value;
	if ( pw == 'dlathdgml' )
	{
		document.getElementById('indexWrap').className='indexWrap indexMenuOn';
	}
	else {
		alert('관계자외 출입금지!!!');
	}
}

function enter(){
	if (event.keyCode == 13) {
		pw();
	}
}

function toggleMy(obj){
	if ( obj.parentNode.className == 'my-wrap' )
	{
		obj.parentNode.className = 'my-wrap my-on';
	}
	else {
		obj.parentNode.className = 'my-wrap';
	}
}

function toggleMy2(obj){
	if ( obj.parentNode.className == 'my-wrap2' )
	{
		obj.parentNode.className = 'my-wrap2 my2-on';
	}
	else {
		obj.parentNode.className = 'my-wrap2';
	}
}