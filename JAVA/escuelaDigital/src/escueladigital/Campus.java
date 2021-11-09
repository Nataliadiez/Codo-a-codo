
package escueladigital;

public class Campus {
    public int id;
    public String nombre;
    private String password;
    public void setPassword(String password){
        this.password = password;
    }
    public String getPassword(){
        return this.password;
    }
    public Campus(int id, String nombre){
        this.id = id;
        this.nombre = nombre;
    }
    public boolean ingresar(int id, String password,int miId, String miPassword){
        if(this.id == id && (this.password == null ? password == null : this.password.equals(password))) {
            return true;
        } else {
            return false;
        }
    }

    boolean ingresar(int i, String string) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
