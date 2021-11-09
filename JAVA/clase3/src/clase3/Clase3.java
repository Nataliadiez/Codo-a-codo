
package clase3;

import personal.Departamento;
import personal.Personal;
import recursosHumanos.Finanzas;

public class Clase3 {

    public static void main(String[] args) {
        Personal administrativo = new Personal("Natalia","Diez","Corvalán 2990",29);
        administrativo.setSueldo(35000);
        System.out.println("Nombre: " + administrativo.nombre + "\nApellido: " + administrativo.apellido);
        System.out.println("Sueldo: $" + administrativo.getSueldo());
        
        Personal it = new Personal("Elias","Maestri","Calle 147",26);
        it.setSueldo(250000);
        System.out.println("Nombre: " + it.nombre + "\nApellido: " + it.apellido);
        System.out.println("Sueldo: $" + it.getSueldo());
        Departamento legales = new Departamento("Lucrecia","Casas","Calle 32",25,"Legales");
        legales.setSueldo(250000);
        System.out.println(legales.mostrarDatos());
        Finanzas juana = new Finanzas("Juana","Diaz","Calle 250",35,"Desarrollo","gerente");
        System.out.println("Le abonamos el sueldo a: " + juana.nombre + "por la cantidad de $" + juana.AbonarSueldo());
        
    }
    
    //Extension Pack for Java para Visual Studio
}
