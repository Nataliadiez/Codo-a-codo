
package alumnos;

public class Alumno {
    public String nombre,apellidos;
    public float notas;
    public int edad,id;
    
    public Alumno(int id, String nombre, String apellidos,float notas, int edad){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.notas = notas;
        this.edad = edad;
    }
}
