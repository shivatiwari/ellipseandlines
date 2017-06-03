
function setup()
{
    createCanvas(outerWidth,outerHeight);
    background(random(255));
}
function draw()
{
     //background(255);
   //if(mouseIsPressed)
    //    {
    fill(255);
    strokeWeight(5);
    stroke(random(255,0,0));
    line(mouseX,mouseY,random(0,1000),random(0,1000));
    //stroke(255,0,0);
    line(mouseX,mouseY,random(0,width),random(0,height));
    
    ellipse(mouseX,mouseY,40,40);
//}
}
