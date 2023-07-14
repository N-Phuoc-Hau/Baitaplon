#include <iostream>
#include <iomanip>
#include <ctime>
using namespace std;
const int MAXROW = 10;
const int MAXCOL = 15;

void Input(int arr[MAXROW][MAXCOL], int r, int c)
{
	srand(time(0));
	for (int i = 0; i < r; i++)
		for (int j = 0; j < c; j++)
			arr[i][j] = rand() % 100 + 1;
}
void Output(int arr[MAXROW][MAXCOL], int r, int c)
{
	for (int i = 0; i < r; i++)
	{
		for (int j = 0; j < c; j++)
			cout << setw(4) << arr[i][j];
		cout << endl;
	}

}
int Tong(int arr[MAXROW][MAXCOL], int r, int c)
{
	int sum = 0;
	for (int i = 0; i<r; i++)
		for (int j = 0; j < c; j++)
		{
			sum += arr[i][j];
		}
	cout << "Tong : " << sum << endl;
	return sum;
}
void MAXMIN(int arr[MAXROW][MAXCOL], int r, int c)
{
	int max, min, hang, cot;
	max = arr[0][0];
	min = arr[0][0];
	for (int i = 0; i<r; i++)
		for (int j = 0; j < c; j++)
		{
			if (max < arr[i][j])
			{
				max = arr[i][j];
				cot = j;
				hang = i;
			}
		}
	cout << "Max : " << max << endl;
	cout << "Vi tri Max : " << hang << " " << cot << endl;
	for (int i = 0; i<r; i++)
		for (int j = 0; j < c; j++)
		{
			if (min > arr[i][j])
			{
				min = arr[i][j];
				cot = j;
				hang = i;
			}
		}
	cout << "Min : " << min << endl;
	cout << "Vi tri Min : " << hang << " " << cot << endl;
}
int main()
{
	int arr[MAXROW][MAXCOL];
	int r, c;
	cout << "Nhap so dong va so cot : ";
	cin >> r >> c;
	while ((r > 10 || r < 0) || (c < 0 || c > 15))
	{
		cout << "Nhap lai : ";
		cin >> r >> c;
	}
	Input(arr, r, c);
	Output(arr, r, c);
	Tong(arr, r, c);
	MAXMIN(arr, r, c);

	return 0;
}