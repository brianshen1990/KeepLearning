package demo_class_obj;

public class Company {

  public enum CompanySize {
    SMALL, MEDIUM, LARGE, XLARGE
  }

  String name = "";
  int employeeCount = 0;

  private static int numberOfCompanies = 0;
  static final double PI = 3.141592653589793;

  public Company(String name) {
    this.name = name;
    numberOfCompanies++;
  }

  public Company() {
    this("Unknown Name");
  }

  int getEmployeeCount(){
    return this.employeeCount;
  }

  class HR {
    int number = 0;
    public HR(int number) {
      this.number = number;
    }

    String printNestedAndEnclose() {
      return Company.this.name + " - HR : " + this.number; 
    }

  }

}