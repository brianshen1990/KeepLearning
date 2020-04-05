package demo;

public class AgeInterfaceImpl implements AgeInterface {
  Integer age = 0;

  public void setAge(Integer age) {
    this.age = age;
  }

  public Integer getAge(){
    return this.age;
  }
}