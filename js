// case.js
const skins = [
  { name: "AK-47 | Redline", value: 25 },
  { name: "AWP | Asiimov", value: 60 },
  { name: "Glock-18 | Fade", value: 120 },
  { name: "★ Karambit | Doppler", value: 950 }
];

function openCase() {
  const roll = Math.random();
  let skin;
  if (roll < 0.7) skin = skins[0];
  else if (roll < 0.9) skin = skins[1];
  else if (roll < 0.98) skin = skins[2];
  else skin = skins[3];

  alert("You won: " + skin.name + " ($" + skin.value + ")");
}

