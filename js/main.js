game = new Game();

var bc1 = ["cursor", "yoza", "yinza", "unja", "xas", "popup", "zzz", "eleza", "pra"]
var idName = ["cost1", "cost2", "cost3", "cost4", "cost5", "cost6", "cost7", "cost8", "cost9"]
var bc2 = ["dc1", "dc2", "dc3", "dc4", "dc5", "dc6", "dc7", "dc8", "dc9"]

document.getElementById("clicker").onclick = () => {
  game.downloads = game.downloads.add(1)
  document.getElementById("downloads").innerHTML = game.downloads + " Downloads."
}

let classic;

switch(game.methods) {
  case "Home":
      classic = "Method"
      break;
  case "Cursor":
      classic = "My Method Cursor"
      break;
  case "Grandma":
      classic = "My Method Grandma"
      break;
  case "Farm":
      classic = "My Method Farm"
      break;
  case "Publications":
      classic = "Prestige Layer Method"
      break;
  case "1%":
      classic = "1%"
      break;
  case "2%":
      classic = "2%"
      break;
  case "3%":
      classic = "3%"
      break;
  case "4%":
      classic = "4%"
      break;
  case "5%":
      classic = "5%"
      break;
  case "6%":
      classic = "6%"
      break;
  case "7%":
      classic = "3%"
      break;
  case "8%":
      classic = "8%"
      break;
  case "9%":
      classic = "9%"
      break;
  case "10%":
      classic = "10%"
      break;
  case "11%":
      classic = "11%"
      break;
  case "12%":
      classic = "12%"
      break;
  case "13%":
      classic = "13%"
      break;
  case "14%":
      classic = "14%"
      break;
  case "15%":
      classic = "15%"
      break;
  case "16%":
      classic = "16%"
      break;
  case "17%":
      classic = "17%"
      break;
  case "18%":
      classic = "18%"
      break;
  case "19%":
      classic = "19%"
      break;
  case "20%":
      classic = "20%"
      break;
  case "21%":
      classic = "21%"
      break;
  case "22%":
      classic = "22%"
      break;
  case "23%":
      classic = "23%"
      break;
  case "24%":
      classic = "24%"
      break;
  case "25%":
      classic = "25%"
      break;
  case "26%":
      classic = "26%"
      break;
  case "27%":
      classic = "27%"
      break;
  case "28%":
      classic = "28%"
      break;
  case "29%":
      classic = "29%"
      break;
  case "30%":
      classic = "30%"
      break;
  case "31%":
      classic = "31%"
      break;
  case "32%":
      classic = "32%"
      break;
  case "33%":
      classic = "33%"
      break;
  case "34%":
      classic = "34%"
      break;
  case "35%":
      classic = "35%"
      break;
  case "36%":
      classic = "36%"
      break;
  case "37%":
      classic = "37%"
      break;
  case "38%":
      classic = "38%"
      break;
  case "39%":
      classic = "39%"
      break;
  case "40%":
      classic = "40%"
      break;
  case "41%":
      classic = "41%"
      break;
  case "42%":
      classic = "42%"
      break;
  case "43%":
      classic = "43%"
      break;
  case "44%":
      classic = "44%"
      break;
  case "45%":
      classic = "45%"
      break;
  case "46%":
      classic = "46%"
      break;
  case "47%":
      classic = "47%"
      break;
  case "48%":
      classic = "48%"
      break;
  case "49%":
      classic = "49%"
      break;
  case "50%":
      classic = "50%"
      break;
}

//All 9 Buttons Upgrades

for (let i = 0; i < 9; i++) {
document.getElementById(idName[i]).onclick = () => {
  if (game.downloads.gte(game[bc2[i]]) == true) {
    game.downloads = game.downloads.sub(game[bc2[i]])
    game[bc2[i]] = game[bc2[i]].mul(1.15)
    game.dps = game.dps.add(1)
    game[bc1[i]].level = game[bc1[i]].level.add(1)
  }
}
}

//NICE