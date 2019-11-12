ShowPage(), $("#ContentPlaceHolder1_txtEmailForLogin").keypress(function (a) {
	var b = a.keyCode || a.which;
	13 === b && $("#ContentPlaceHolder1_btnLogin").click()
}), $("#ContentPlaceHolder1_txtPasswordForLogin").keypress(function (a) {
	var b = a.keyCode || a.which;
	13 === b && $("#ContentPlaceHolder1_btnLogin").click()
}), $("#ContentPlaceHolder1_txtEmailForForgotPassword").keypress(function (a) {
	var b = a.keyCode || a.which;
	13 === b && $("#ContentPlaceHolder1_btnForgotPassword").click()
});
