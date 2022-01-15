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

