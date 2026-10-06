// Complete the TODO sections. Do not rename the required functions.

const STUDENT_NUMBER_REGEX = /^\d{2}-\d{4}-\d{3}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidName(value) {
  const STUDENT_NUMBER_REGEX = /^\d{2}-\d{4}-\d{3}$/;
}

function isValidStudentNumber(value) {
  // TODO: use STUDENT_NUMBER_REGEX and return true/false.
}

function isValidEmail(value) {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}

function getCourseFee(courseValue) {
  // TODO: return the correct numeric course fee or 0.
}

function calculatePayment(courseValue, categoryValue) {
  // TODO: return an object with: baseFee, discount, finalPayment.
}

// Browser-only code belongs inside this guard so function tests can load this file in Node.
if (typeof document !== 'undefined') {
  // TODO: get the required DOM elements by ID/name.

  // TODO: initialize the result/payment display.

  // TODO: add change/input listeners for validation and dynamic calculations.

  // TODO: add submit handling. Prevent reload, validate, and display the summary.

  // TODO: add Clear button handling to restore the initial state.
}

// Keep this export block. The autograder uses it for Function tests.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isValidName,
    isValidStudentNumber,
    isValidEmail,
    getCourseFee,
    calculatePayment
  };
}