package demo_basics;

import demo_oop.*;

public class demo {

  public static void lets_demo() {
    demo_varibales();
    demo_operator();
    demo_control_flow();

  }

  static void demo_varibales() {
    int[] firArray = new int[10];
    firArray[1] = 1;
    System.out.println(firArray[1]);

    int[] secArray = { 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 };
    System.out.println(secArray[0]);
  }

  static void demo_operator() {
    int result = 1 + 2;
    result = result / 2;
    result++;
    result = result >= 0 ? result : 0;
    System.out.println(result);

    final InheritedPureClass ipc = new InheritedPureClass();
    System.out.println((ipc instanceof InheritedPureClass));
    System.out.println((ipc instanceof PureClass));

    /**
     * ~ Unary bitwise complement << Signed left shift >> Signed right shift >>>
     * Unsigned right shift & Bitwise AND ^ Bitwise exclusive OR | Bitwise inclusive
     * OR
     */
    int bitmask = 0x000F;
    int val = 0x2222;
    // prints "2"
    System.out.println(val & bitmask);

  }

  static void demo_control_flow() {
    int testscore = 76;
    char grade;

    // if then else 
    if (testscore >= 90) {
      grade = 'A';
    } else if (testscore >= 80) {
      grade = 'B';
    } else if (testscore >= 70) {
      grade = 'C';
    } else if (testscore >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    System.out.println(testscore + " Grade = " + grade);

    // switch 
    int month = 8;
    String monthString;
    switch (month) {
      case 1:
        monthString = "January";
        break;
      case 2:
        monthString = "February";
        break;
      case 3:
        monthString = "March";
        break;
      case 4:
        monthString = "April";
        break;
      case 5:
        monthString = "May";
        break;
      case 6:
        monthString = "June";
        break;
      case 7:
        monthString = "July";
        break;
      case 8:
        monthString = "August";
        break;
      case 9:
        monthString = "September";
        break;
      case 10:
        monthString = "October";
        break;
      case 11:
        monthString = "November";
        break;
      case 12:
        monthString = "December";
        break;
      default:
        monthString = "Invalid month";
        break;
    }
    System.out.println(month + " is " + monthString);

    // while
    int count = 1;
    while (count < 11) {
      System.out.println("Count is: " + count);
      count++;
    }

    // for
    for(int i=1; i<11; i++){
      System.out.println("Count is: " + i);
    }

  }

}