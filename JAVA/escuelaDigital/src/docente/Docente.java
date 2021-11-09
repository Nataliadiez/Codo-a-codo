
package docente;

public class Docente {
    public String nombre, apellidos;
    public int edad,id;
    
    public Docente(int id, String nombre, String apellidos,int edad){ // constructor
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}
