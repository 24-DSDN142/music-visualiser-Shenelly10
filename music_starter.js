
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(15, 15, 37);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);


 // Number of ellipses
 let numEllipses = 10;
 let initialWidth = 700;
 let initialHeight = 350;
 let sizeIncrement = 95;
 let yOffsetIncrement = 11; // How much lower each ellipse will be

 
 // Rings (Repeated ellipses with decreasing Y position)
 strokeWeight(3);
 stroke(255, 255, 255);
 noFill();

 //Reference from chatgpt 
  // Map the drum volume to control ring movement or size
  let drumShift = map(drum, 0, 100, -20, 30);  
  
  // Introduce a time delay for each ring using the counter and the index
  for (let i = 0; i < numEllipses; i++) {
    let ellipseWidth = initialWidth + (i * sizeIncrement);
    let ellipseHeight = initialHeight + (i * sizeIncrement / 2);

    // Use a sine wave to create smooth oscillation, and phase-shift each ring differently
    let timeOffset = i * 10; 
    let timeFactor = sin(counter * 0.1 + timeOffset); 
    let ellipseY = 450 + (i * yOffsetIncrement) + drumShift * timeFactor;

    // Draw the ellipse
    ellipse(70, ellipseY, ellipseWidth, ellipseHeight);  

   
  }


//Sparkles
  push();
  let sparkleSize = map(bass, 0, 100, 0.35, 0.4)
  scale(sparkleSize);
  image(img4, 0, 100);
  pop();


//Disk
  push();
  scale(0.4);
  image(Disk, 0, -100);
  pop();


//Man on Disk
  push();
  scale(0.4);
  image(Man, 0, -100);
  pop();

//Mouth
  noStroke();
  fill(208, 168, 244);
  let mouthSize = map(vocal, -10, 100, -10, 15)
  ellipse(116, 340, 20, mouthSize);


//Turntable Hand
  push();
  let handSize = map(drum, 0, 100, 0.38, 0.4)
  scale(handSize);
  image(img3, 0, 80);
  pop();

//separate Moons
  push();
  let moon1Size = map(other, 0, 100, 0.38, 0.45)
  scale(moon1Size);
  image(moon1, -10, 100);
  pop();

  push();
  let moon2Size = map(other, 0, 100, 0.35, 0.45)
  scale(moon2Size);
  image(moon2, -10, 100);
  pop();

  push();
  let moon3Size = map(other, 0, 100, 0.38, 0.45)
  scale(moon3Size);
  image(moon3, -10, 100);
  pop();

  push();
  let moon4Size = map(other, 0, 100, 0.35, 0.45)
  scale(moon4Size);
  image(moon4, -10, 100);
  pop();

  push();
  let moon5Size = map(other, 0, 100, 0.35, 0.45)
  scale(moon5Size);
  image(moon5, -10, 100);
  pop();

  push();
  let moon6Size = map(other, 0, 100, 0.35, 0.45)
  scale(moon6Size);
  image(moon6, -10, 100);
  pop();

}

