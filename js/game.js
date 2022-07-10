function Game() {
  this.mod = new Mod();
  this.downloads = new Decimal(0)
  this.dps = new Decimal(0)
  this.dpc = new Decimal(1)
  this.cursor = new Cursor();
  this.methods = "20%"
  this.dc1 = new Decimal(100)
  this.dc2 = new Decimal(10000)
  this.dc3 = new Decimal(1e6)
  this.dc4 = new Decimal(1e9)
  this.dc5 = new Decimal(1e12)
  this.dc6 = new Decimal(1e15)
  this.dc7 = new Decimal(1e18)
  this.dc8 = new Decimal(1e20)
  this.dc9 = new Decimal(1e25)
}

function Mod() {
  this.name = "My Idle"
  this.id = "?"
  this.version = "1.0.0"
  this.versionName = "Nothing"
  this.packageFiles = ["?"]
}

function Cursor() {
  this.price = new Decimal(100)
  this.level = new Decimal(0)
}

function Update() {
  game.downloads = game.downloads.add(game.dps)
  document.getElementById("downloads").innerHTML = game.downloads + " Downloads."
}

setInterval(Update, 100)