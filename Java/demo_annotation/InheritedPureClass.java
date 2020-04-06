package demo_annotation;

public class InheritedPureClass extends PureClass {

  @Override
  public String getName(){
    return "Inherited from Pure Class: " + this.name;
  }

}