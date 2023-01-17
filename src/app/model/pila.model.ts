export class Pila
{
   
  vec:string[]=[];
    constructor(){
       
    }
    public insertar(x: string) {
        this.vec.push(x);
       
    }

    public extraer() {
        if (this.vec.length>0)
         return this.vec.pop();
       else
         return ""; 
    }

}