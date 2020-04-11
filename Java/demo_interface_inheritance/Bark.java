package demo_interface_inheritance;

public interface Bark {
  void bark();
  default void barkLoad(){
    System.out.println("Load Wang!");
  }
}