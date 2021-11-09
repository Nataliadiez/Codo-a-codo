
package actividad.practica.obligatoria.javau2;

import java.util.Scanner;

public class ActividadPracticaObligatoriaJavau2 {

   
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.next();
        
        System.out.println("Ingrese su apellido");
        String apellido = entrada.next();
        
        System.out.println("Ingrese su edad");
        int edad = entrada.nextInt();
        
        System.out.println("Ingrese su hobbie");
        String hobbie = entrada.next();
        
        System.out.println("Ingrese su editor de código preferido");
        String editorDeCodigo = entrada.next();
        
        System.out.println("Ingrese su sistema operativo de uso");
        String sistemaOperativo = entrada.next();
        
        System.out.println("Corrobore que los datos ingresados son correctos: \nNombre: "+nombre+ "\nApellido: "+apellido+"\nEdad: "+edad+"\nHobbie: "+hobbie+"\nEditor de código: "+editorDeCodigo+"\nsistemaOperativo: "+sistemaOperativo);
    }
    
}


 /*Crear un programa en java en el cual se pida al usuario 
 ingresar su nombre, apellido, edad, hobbie, editor de código preferido, 
sistema operativo que utiliza, luego deberá mostrarse por consola los datos ingresados.
El programa deber ser subido a un repositorio de GitHub, pegar el link del ejercicio 
        resuelto en el siguiente recuadro*/