function sum_to_n_a(n) {
    /*
    Using Gauss Function for sum of n numbers from 1 to n -> n * (n + 1) / 2 , the sum is computed in constant time and time complexity is O(1).
    Space complexity is O(1) as only one variable is used to store the result. In terms of perfomance, this would be the most efficient solution.
    */
    return n * (n + 1) / 2;
}
function sum_to_n_b(n) {
    /*
    Using recursion to calculate the sum of n numbers from 1 to n, the time complexity is O(n).
    Space complexity would be O(n) as well, as n calls are made to the function and n stack frames are created.
    Compared to the first solution, it can be inefficient for large n due to stack overflow risks and the overhead of recursive calls
    */
    if (n <= 1)
        return n;
    return n + sum_to_n_b(n - 1);
}
function sum_to_n_c(n) {
    /*
    Using iterative approach, the time complexity is O(n).
    Space complexity is O(1) as only one variable is used to store the result.
    This solution is more efficient than the recursive solution, as it avoids the overhead of recursive calls and stack frames.
    */
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15
