
package operaciones;

public class Operaciones {
    public float num,num2;
    public String op;
    
    public Operaciones(float num, float num2,String op){
        this.num = num;
        this.num2 = num2;
        this.op = op;
    }
    
    public float operacion() {
        switch (op) {
            case "+":
                return num + num2;
            case "-":
                return num - num2;
            case "/":
                return num / num2;
            case "*":
                return num * num2;
            default:
                return 0;
        }
    }
}
