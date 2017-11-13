var isLightOn = true;
function ToggleLight()
{
	if (isLightOn == false) {
		document.getElementById("lightBulb").src="img/bulb-off.png"
		isLightOn = true;
	} else {
		document.getElementById("lightBulb").src="img/bulb-on.png"
		isLightOn = false;
	}
}

function AddNumbers(num1, mum2)
{
	num1 = 10;
	num2 = 20;

	console.log(num1 + num2);
	document.getElementById("numbers").innerHTML = num1 + num2

}
