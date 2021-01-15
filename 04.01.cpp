#include <stdio .h>  

#include <time .h>  



int main()
{ 
	clock_t start = clock(); 
	
	int i;
		int sum;

		for (i = 5, sum = 5; i < 150; i += 5)
		{
			sum += i;
		}

		printf("sum = %d\n", sum);
 
		clock_t end = clock(); 

	double seconds = (double)(end - start) / CLOCKS_PER_SEC; 
 printf("The time: %f seconds\n", seconds); 

}
