//As you may have noticed, we have quite a bit of repeated code after Step 2. Let's re-use our code instead with a function.

//Define a function at the top of index.js named newImage.
//Copy and paste the code for creating the character into the 
//function body.
//Identify which parts of the code changed when you created the 
//pine tree. Replace those parts of the code in your function with 
//parameters.
//Delete the code creating the character outside your function. 
//In its place, invoke newImage, passing the appropriate arguments.
//Delete the code creating the pine tree outside your function. 
//In its place, invoke newImage, passing the appropriate arguments.

function newImage (url, left, bottom) {
    let assets = document.createElement('img')
assets.src = url
assets.style.position = 'fixed'
assets.style.left = left + 'px'
assets.style.bottom = bottom + 'px'
document.body.append(assets)
}

 newImage("assets/green-character.gif", 100, 100)
 newImage("assets/pine-tree.png", 450, 200)
 newImage("assets/tree.png", 200, 300)
 newImage("assets/pillar.png", 350, 100)
 newImage("assets/crate.png", 150, 200)
 newImage("assets/well.png", 500, 425)

 function newItem (url, left, bottom) {
    let item = document.createElement('img')
 item.src = url
 item.style.position = 'fixed'
 item.style.left = left +  'px'
 item.style.bottom = bottom + 'px'
 document.body.append(item)
 }

 newItem("assets/sword.png", 500, 405)
 newItem("assets/sheild.png", 165, 185)
 newItem("assets/staff.png", 600, 100)

item.addEventListener('click', function() {
        remove.item()
    })
 //unable to get the darn thing to work! :) I believe I am using the wrong element, but newItem didn't work in the 
 //event listener when I tried so I am not sure what else I can use. 


// let newImage = document.createElement('img')
// newImage.src = 'assets/img.png'
// newImage.style.position = 'fixed'
// newImage.style.left = '100px'
// newImage.style.bottom = '100px'
// document.body.append(newImage)

// // let pineTree = document.createElement('img')
// // pineTree.src = 'assets/pine-tree.png'
// // pineTree.style.position = 'fixed'
// // pineTree.style.left = '450px'
// // pineTree.style.bottom = '200px'
// // document.body.append(pineTree)

