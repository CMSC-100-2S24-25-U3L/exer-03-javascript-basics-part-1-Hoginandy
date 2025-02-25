#include <stdio.h>
#include <time.h>

void main(){

	int n = 1e5;	//increase until your machine clocks 1 second
	int i, j;

	double t;

	// time_t t1, t2;
	clock_t t1,t2;
	
	/* START CLOCK*/
	// time(&t1); 			//time_t
	t1 = clock();		//clock_t

	//linear algorithm
	// for(i=0;i<n;i++){
	// 	printf(".");
	// }
	

	//quadratic algorithm

	for (i=0;i<n;i++)
	{
		for (j=0;j<n;j++)
		{
			printf(".");
		}
	}

	/* STOP CLOCK*/
	// time(&t2);			//time_t
	// t = difftime(t2,t1);

	t2 = clock();		//clock_t
	t = (double) (t2-t1)/ (double)CLOCKS_PER_SEC;
	
	printf("\nTime elapsed: %0.2f\n", t);
}