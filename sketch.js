var c�o,c�oTriste,c�oFeliz,database;
var foodC,estoqueComida;
var adicionarComida;
var comidaObj;

//crie as vari�veis alimentado e alimentadoUlt aqui


function preload() {
    c�oTriste=loadImage("C�o.png");
    c�ofeliz=loadImage("C�o Feliz.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  comidaObj = new Food();

  estoqueComida=database.ref('Comida');
  foodStock.on("value",readStock);
  
    dog = createSprite(800, 200, 150, 150);
    dog.addImage(c�otriste);
  dog.scale=0.15;

  //creie o bot�o de alimenar o cachorro aqui

  addFood=createButton("Adicionar comida");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //escreva o c�digo para ler o valor "fedtime" da base de dados
  
 
  //escreva o c�digo para dispor o texto "lastFed" aqui

 
  drawSprites();
}

//fun��o para ler o estoque de comida
function readStock(data){
  foodC=data.val();
    comidaObj.estoqueComida(foodC);
}


function feedDog(){
  dog.addImage(c�oFeliz);

  //escreva o c�digo aqui para atualizar o estoque de comida e o tempo de �ltima vez alimentado

}

//fu~��o para adicionar comida ao estoque
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
