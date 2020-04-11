package demo_interface_inheritance;

public class demo {
  public static void lets_demo(){
    System.out.println("------- Test for Pure Class !");  
    Bark bk = new Dog();
    bk.bark();
    bk.barkLoad();

    bk = new Cat();
    bk.bark();
  }
}