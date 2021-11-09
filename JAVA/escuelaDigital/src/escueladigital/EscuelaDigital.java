
package escueladigital;

import alumnos.Alumno;
import docente.Docente;


public class EscuelaDigital {
   
    public static void main(String[] args) {
        Docente docente1 = new Docente(36,"Luis","Navas",48);
        Alumno alumno1 = new Alumno(20,"Natalia","Diez",10,29);
        Campus campus = new Campus(20, "Web");
        campus.setPassword("123456");
        Campus docente = new Campus(12,"Web");
        docente.setPassword("146872");
        System.out.println(docente.ingresar(12,"146872"));
    }
    
}
