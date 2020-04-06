package demo_class_obj;

public class demo {
  public static void lets_demo(){
    System.out.println("------- Test for Class Objects and Nested !");  

    Company compA = new Company("Covic Cure");
    Company.HR compAHr = compA.new HR(1);
    System.out.println(compA.getEmployeeCount());
    System.out.println(compAHr.printNestedAndEnclose());
    System.out.println( Company.CompanySize.LARGE );
  }
}