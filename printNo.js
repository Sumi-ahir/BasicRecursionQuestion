function printNumber(n) {
    if (n === 0) return;   // Base Case

    printNumber(n - 1);    // Recursive Call (first smaller numbers print કરશે)
    console.log(n);        // પછી current number print કરશે
}

printNumber(8);
