// DOM Handler Functions

// Display results in the results section
function displayResults() {
    const resultsDiv = document.getElementById('results');
    
    if (students.length === 0) {
        resultsDiv.innerHTML = '<div class="empty-state">No students added yet. Start by adding some students!</div>';
        return;
    }
    
    const studentList = students.map((student, index) => 
        `<div class="student-item">${index + 1}. ${student}</div>`
    ).join('');
    
    resultsDiv.innerHTML = `
        <div class="student-list">
            <h3>Current Students (${students.length}):</h3>
            ${studentList}
        </div>
    `;
}

// Show messages to the user
function showMessage(message, type = 'info') {
    const resultsDiv = document.getElementById('results');
    
    // Create message element with appropriate styling
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    
    // Add to results
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(messageDiv);
    
    // Auto-clear after 3 seconds for success/error messages
    if (type === 'success' || type === 'error') {
        setTimeout(() => {
            displayResults();
        }, 3000);
    }
}
