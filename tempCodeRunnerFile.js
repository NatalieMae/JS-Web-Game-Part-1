function newImage (url, left, bottom) {
    let assets = document.createElement('img')
assets.src = url
assets.style.position = 'fixed'
assets.style.left = left + 'px'
assets.style.bottom = bottom + 'px'
document.body.append(assets)
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425)
console.log(newImage)