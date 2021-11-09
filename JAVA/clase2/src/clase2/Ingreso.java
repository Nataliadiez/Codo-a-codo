
package clase2;

public class Ingreso {
    private String usuario,pass;
    private String miUsuario = "Natt";
    private String miPass = "123456";

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
    
    
    public String getUsuario(){
        return usuario;
    }
    public void setUsuario(String us){
        usuario = us;
    }
    
    public boolean validar(){
        return usuario.equals(miUsuario) && pass.equals(miPass);
            
    }
}

