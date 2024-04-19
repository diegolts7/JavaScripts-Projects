

function imprimir (){
   return new Promise(resolve => {
      setTimeout(()=>{
         console.log("imprimiu");
         resolve();
      },5000);
   })
}
async function esperar(){
   console.log("vai imprimir");
   await imprimir();
   console.log("esperou");
}
esperar();

 