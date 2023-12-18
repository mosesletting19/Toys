function generateStudentGrade() {
    // Prompt the user to input student marks
    const userInput = prompt('Enter student marks (between 0 and 100):');

    // Convert user input to a number
    const marks = parseFloat(userInput);

    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert('Invalid input. Please enter a valid number between 0 and 100.');
        return;
    }

    // Determine the grade based on the input marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the result
    alert(`Student Grade: ${grade}`);
}

// Call the function to generate student grade
generateStudentGrade();