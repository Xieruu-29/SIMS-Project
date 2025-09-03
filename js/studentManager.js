// Student Management System
let students = [];

// Add a new student to the array
function addStudent() {
    const nameInput = document.getElementById('studentName');
    const studentName = nameInput.value.trim();
    
    // Basic validation
    if (studentName === '') {
        showMessage('Please enter a student name!', 'error');
        return;
    }
    
    // Add student to array
    students.push(studentName);
    
    // Clear input and show success message
    nameInput.value = '';
    showMessage(`Student "${studentName}" added successfully!`, 'success');
    
    // Update display
    displayResults();
}

// Remove the last student from the array
function removeLastStudent() {
    if (students.length === 0) {
        showMessage('No students to remove!', 'error');
        return;
    }
    
    const removedStudent = students.pop();
    showMessage(`Student "${removedStudent}" removed successfully!`, 'success');
    
    // Update display
    displayResults();
}

// Display all students
function displayAllStudents() {
    if (students.length === 0) {
        showMessage('No students in the list!', 'info');
        return;
    }
    
    const studentList = students.map((student, index) => 
        `${index + 1}. ${student}`
    ).join('<br>');
    
    showMessage(`All Students:<br>${studentList}`, 'info');
}

// Show total count of students
function showStudentCount() {
    showMessage(`Total students: ${students.length}`, 'info');
}

// Show student at specific position
function showStudentAtPosition() {
    const positionInput = document.getElementById('positionInput');
    const position = parseInt(positionInput.value) - 1; // Convert to 0-based index
    
    if (isNaN(position) || position < 0 || position >= students.length) {
        showMessage('Please enter a valid position!', 'error');
        return;
    }
    
    showMessage(`Student at position ${position + 1}: ${students[position]}`, 'info');
}

// Join all student names
function joinStudentNames() {
    if (students.length === 0) {
        showMessage('No students to join!', 'info');
        return;
    }
    
    const joinedNames = students.join(', ');
    showMessage(`Joined names: ${joinedNames}`, 'info');
}
