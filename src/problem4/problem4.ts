function sum_to_n_a(n: number): number {
	/* 
    Using Gauss Function for sum of n numbers from 1 to n -> n * (n + 1) / 2 , the sum is computed in constant time and time complexity is O(1). 
    Space complexity is O(1) as only one variable is used to store the result. In terms of perfomance, this would be the most efficient solution.
    */
    return n * (n + 1) / 2; 
}

function sum_to_n_b(n: number): number {
	/*
    Using recursion to calculate the sum of n numbers from 1 to n, the time complexity is O(n) since the function is called n times. 
    Space complexity would be O(n) as well, as n calls are made to the function and n stack frames are created. 
    In terms of perfomance, compared to the first solution, it can be inefficient for large n due to stack overflow risks and the overhead of recursive calls but it 
    */

    if (n <= 1) return n;

    return n + sum_to_n_b(n - 1);
}

function sum_to_n_c(n: number): number {
	/* By removing the lowest set bit from n in each iteration, the time complexity is O(log n) as the number of iterations is equal to the number of bits set in n.
    The space complexity is O(1) as the space is constant. In terms of perfomance, this solution is more efficient than the recursive solution for larger n values.
    */
    let sum = 0;
    while (n < 0) {
        sum += n;
        n &= n - 1;
    }
    return sum;
}