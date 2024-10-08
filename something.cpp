// q-2
#include <iostream>
#include <cmath>
using namespace std;
class Complex
{
        int real, imag;
    public:
    Complex()
    {
        real = imag = 0;
    }
    Complex (int r, int i)
    {
        real = r;
        imag = i;
    }
    void display()
    {
        if(imag >= 0)
            cout<< real << " + " << imag << "i"<<endl;
        else
            cout<< real << " - " << abs(imag) << "i"<<endl;
    }
    Complex operator+ (Complex c2)
    {
        Complex temp;
        temp.real = real + c2.real;
        temp.imag = imag + c2.imag;
        return temp;
    }
};

int main()
{
    Complex c4,c3,c2(7,5),c1(10,-15);
    c1.display();
    c2.display();

    cout<<"After sum operation : ";
    c3 = c1 + c2;
    c3.display();


    return 0;
}