#include <iostream>

class A
{
  private:
    int i;
  public:
    A(int _i) { i = _i; }
};

inline bool operator==(const A& lhs, int rhs) {
  return true;
}

int main() {
  A a(1);
  if ( a== 1 && a == 2 && a == 3 ) {
    std::cout << "Success";
  }
}