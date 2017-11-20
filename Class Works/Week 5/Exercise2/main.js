function StorePlayerData()
{
	localStorage.setItem("playername",document.forms[0]["playername"].value)
	localStorage.setItem("playerhealth",document.forms[0]["playerhealth"].value)
	localStorage.setItem("playercolour",document.forms[0]["playercolour"].value)
	/*
	var pname = document.getElementById("playername").value;
  var colour = document.getElementById("playercolour").value;
  var health = document.getElementById("playerhealth").value;

	document.getElementById("name").innerHTML = pname;
  document.getElementById("colour").style.backgroundColor = colour;
  document.getElementById("health").innerHTML = health;
	*/
}
