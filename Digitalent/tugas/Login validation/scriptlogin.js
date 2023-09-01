function validasi() {
	let email =  'admin@gmail.com';
	let password = 'admin123';

	let Email = document.getElementById('email').value;
	let Password = document.getElementById('password').value;
	
	if((email == Email) && (password == Password)){
		alert("Anda berhasil login");
		window.location.href = 'orderform.html';
	}else {
		const show = document.getElementById('message');
		show.style.display = 'block';
	}
}
