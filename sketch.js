var student1,student2;

function setup() {
  createCanvas(400,400);

  student1=new Student("aditi",13,10,"8th");
  student2=new Student("darshi",13,14,"9th");
}

function draw() 
{
  background(30);

  student1.show();
  
}