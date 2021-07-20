class Food {
    constructor(){
    this.estoqueComida=0;
    this.lastFed;
    this.image=loadImage('Leite.png');
    }

    updateFoodStock(estoqueComida){
        this.estoqueComida=estoqueComida;
   }

    getFedTime(alimentadoUlt){
        this.alimentadoUlt=alimentadoUlt;
   }

   deductFood(){
       if (this.estoqueComida>0){
           this.estoqueComida = this.estoqueComida-1;
     }
    }

    getestoqueComidak(){
        return this.estoqueComida;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}
