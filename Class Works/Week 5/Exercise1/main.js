var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for(var i = 0; i < weaponsArray.length; i++)
	{
		var weaponTag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		console.log(weaponTag)
		document.forms[0]["weapons"] += weaponTag;
	}

}


function SelectWeapon()
{
	var index = document.forms[0]["weapons"].value;
	document.getElementById("currentWeapon").innerHTML = weaponsArray[index];

}
