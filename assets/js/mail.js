function sendEmail() {
    var emailName = document.getElementById("email-name").value;
	var emailCategory = document.getElementById("email-category").value;
	var emailBody = document.getElementById("email-body").value;
    window.location.href = "mailto:rueil-music@wanadoo.fr?subject=" + emailCategory + " - " + emailName + "&body=" + emailBody;
}