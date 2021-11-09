
package personal;

public class Departamento extends Personal{
    
    public Departamento(String nombre, String apellido, String domicilio, int edad, String departamento) {
        super(nombre, apellido, domicilio, edad);
    }
    
    public String mostrarDatos() {
        return "\nNombre: " + nombre + "\nApellido: " + apellido + "\nDomicilio: " + domicilio +
                "\nEdad: " + edad + "\nSueldo: $" + getSueldo();
    }
}
