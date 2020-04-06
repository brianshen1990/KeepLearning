package demo_oop;

public class demo {
  public static void lets_demo(){
    System.out.println("------- Test for Pure Class !");  
    PureClass pc = new PureClass();
    pc.setName("PureClass 01");
    System.out.println( pc.getName() );

    System.out.println("------- Test for Inherited Class !");  
    InheritedPureClass ipc = new InheritedPureClass();
    ipc.setName("Inherited 02");
    System.out.println( ipc.getName() );

    System.out.println("------- Test for Interface !");  
    
    AgeInterfaceImpl aii = new AgeInterfaceImpl();
    aii.setAge(10);

    AgeInterface ai = aii;
    System.out.println( ai.getAge() ); 
  }
}