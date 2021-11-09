
package mi_primer_aplicacion;

import accesorios.Auto;


public class Mi_primer_aplicacion {
    
    
    
    public static void main(String[] args) {
        // TODO code application logic here
        // Las variables pueden comenzar con $ _ minúscula pero nunca con números
        int numero;
        String nombre;
        float promedio;
        char caracter;
        boolean llueve = true;
        numero = 10;
        float resultado;
        resultado = numero + 15;
        promedio = (numero + 4) / 2;
        System.out.println("Hola Mundo");  //sout+TAB para imprimir 
        System.out.println("La suma de 10 + 15 es: " + resultado);
        System.out.println("El promedio es: " + promedio);
        System.out.println(60 > 19 && 5 != 4);
        if (llueve == true){
            System.out.println("Esta lloviendo");
        } else {
            System.out.println("No llueve");
        }
        
        Juego jugador = new Juego(0,3,"Mario","Hongos","Martillo");
        Juego jugador2 = new Juego(0,2,"Raul","Hongos","Martillo");
        Juego jugador3 = new Juego(0,1,"José","Hongos","Martillo");
        System.out.println("Mi nombre es " + jugador.personaje);
        System.out.println("Tengo: " + jugador.getVidas() + " vidas" );
        System.out.println(jugador.mostrarSaludo());
        System.out.println(jugador2.mostrarSaludo());
        System.out.println(jugador3.mostrarSaludo());
        
        Auto miAuto = new Auto(120,2,"rojo","deportivo","2020","WJA 958");
        miAuto.setEncendido(true);
        miAuto.encender_auto();
        
    }
    
    
    
    
       
}
