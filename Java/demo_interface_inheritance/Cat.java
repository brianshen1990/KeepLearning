package demo_interface_inheritance;

public class Cat extends Animal implements Bark, Eat {
  Cat(){
    this.name = "Cat";
  }

  @Override
  public void eat() {
    // TODO Auto-generated method stub
    System.out.println("eat fish");
  }

  @Override
  public void bark() {
    // TODO Auto-generated method stub
    System.out.println("Mow");
  }

  @Override
  String getName() {
    // TODO Auto-generated method stub
    return this.name;
  }
  
}