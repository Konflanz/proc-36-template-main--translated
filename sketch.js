var cão,cãoTriste,cãoFeliz,database;
var foodC,estoqueComida;
var adicionarComida;
var comidaObj;

//crie as variáveis alimentado e alimentadoUlt aqui


function preload() {
    cãoTriste=loadImage("Cão.png");
    cãofeliz=loadImage("Cão Feliz.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  comidaObj = new Food();

  estoqueComida=database.ref('Comida');
  foodStock.on("value",readStock);
  
    dog = createSprite(800, 200, 150, 150);
    dog.addImage(cãotriste);
  dog.scale=0.15;

  //creie o botão de alimenar o cachorro aqui

  addFood=createButton("Adicionar comida");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //escreva o código para ler o valor "fedtime" da base de dados
  
 
  //escreva o código para dispor o texto "lastFed" aqui

 
  drawSprites();
}

//função para ler o estoque de comida
function readStock(data){
  foodC=data.val();
    comidaObj.estoqueComida(foodC);
}


function feedDog(){
  dog.addImage(cãoFeliz);

  //escreva o código aqui para atualizar o estoque de comida e o tempo de última vez alimentado

}

//fu~ção para adicionar comida ao estoque
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
