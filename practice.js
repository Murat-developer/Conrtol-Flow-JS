// Logical Operators

// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE;

// NOT (!) Operator

const highIncome = false;
const creditScore = false;
const eligibleForLoan = highIncome || creditScore;
console.log('Eligible For Loan', eligibleForLoan);

// NOT (!) Operators

const applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
