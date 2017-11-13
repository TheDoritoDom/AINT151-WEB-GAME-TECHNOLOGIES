function CreatePlayer()
{
  var pname = document.getElementById("playername").value;
  var colour = document.getElementById("playercolour").value;
  var health = document.getElementById("playerhealth").value;
  var weapon = document.getElementById ("playerweapon").value;

  document.getElementById("name").innerHTML = pname;
  document.getElementById("colour").style.backgroundColor = colour;
  document.getElementById("health").innerHTML = health;

  if (weapon == 1) {
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
  }
  else if (weapon == 2){
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
  }
  else if (weapon == 3) {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
  }
}
