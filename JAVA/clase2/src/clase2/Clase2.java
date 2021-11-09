
package clase2;

import java.util.Scanner;

public class Clase2 {

    public static void main(String[] args) {
        
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
        /*System.out.println("Ingrese su edad");
        int edad = entrada.nextInt();
        System.out.println("Bienvenida!" + nombre);
        System.out.println("Su edad es: " + edad);*/
        System.out.println("Ingrese su contraseña");
        String pass = entrada.nextLine();
        Ingreso ingresar = new Ingreso();
        ingresar.setUsuario(nombre);
        ingresar.setPass(pass);
        if(ingresar.validar()){
            System.out.println("Bienvenido " + ingresar.getUsuario());
        } else System.out.println("Sus datos son incorrectos");
    }
    
}
