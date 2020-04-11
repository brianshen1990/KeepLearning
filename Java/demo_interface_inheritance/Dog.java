package demo_interface_inheritance;

public class Dog extends Animal implements Bark, Eat {
  Dog(){
    this.name = "Cat";
  }

  @Override
  public void eat() {
    // TODO Auto-generated method stub
    System.out.println("eat meat");
  }

  @Override
  public void bark() {
    // TODO Auto-generated method stub
    System.out.println("Wang");
  }

  @Override
  String getName() {
    // TODO Auto-generated method stub
    return this.name;
  }

}