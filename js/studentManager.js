// Student Management System
let students = [];

// Helper functions for validation module
function getAllStudents() {
    return students;
}

function getStudentCount() {
    return students.length;
}

function isStudentArrayEmpty() {
    return students.length === 0;
}

// Add a new student to the array
function addStudent() {
    const nameInput = document.getElementById('studentName');
    const studentName = nameInput.value;
    
    // Use validation module
    const validation = validateStudentName(studentName);
    if (!validation.isValid) {
        showMessage(validation.message, 'error');
        return;
    }
    
    // Sanitize the input
    const sanitizedName = sanitizeInput(studentName);
    
    // Add student to array
    students.push(sanitizedName);
    
    // Clear input and show success message
    nameInput.value = '';
    showMessage(`Student "${sanitizedName}" added successfully!`, 'success');
    
    // Update display
    displayResults();
}

// Remove the last student from the array
function removeLastStudent() {
    // Use validation module
    const validation = validateOperation('remove');
    if (!validation.canProceed) {
        showMessage(validation.message, 'error');
        return;
    }
    
    const removedStudent = students.pop();
    showMessage(`Student "${removedStudent}" removed successfully!`, 'success');
    
    // Update display
    displayResults();
}

// Display all students
function displayAllStudents() {
    // Use validation module
    const validation = validateOperation('display');
    if (!validation.canProceed) {
        showMessage(validation.message, 'error');
        return;
    }
    
    const studentList = `
        <table class="student-table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                ${students.map((student, index) =>
                    `<tr>
                        <td>${index + 1}</td>
                        <td>${student}</td>
                    </tr>`
                ).join('')}
            </tbody>
        </table>
    `;
    
    showMessage(`All Students:<br>${studentList}`, 'info');
}

// Show total count of students
function showStudentCount() {
    showMessage(`Total Students: ${students.length}`, 'info');
}

// Show student at specific position
function showStudentAtPosition() {
    const positionInput = document.getElementById('positionInput');
    const position = positionInput.value;
    
    // Use validation module
    const validation = validatePosition(position, students.length);
    if (!validation.isValid) {
        showMessage(validation.message, 'error');
        return;
    }
    
    const positionIndex = parseInt(position) - 1; // Convert to 0-based index
    showMessage(`Student at position ${position}: ${students[positionIndex]}`, 'info');
}

// Join all student names
function joinStudentNames() {
    // Use validation module
    const validation = validateOperation('join');
    if (!validation.canProceed) {
        showMessage(validation.message, 'error');
        return;
    }
    
    const joinedNames = students.join(', ');
    showMessage(`Joined Names: ${joinedNames}`, 'info');
}
