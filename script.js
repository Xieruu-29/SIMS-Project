

let students = [];


function addStudent() {
  const input = document.getElementById('inputField').value.trim();
  const resultBox = document.getElementById('resultBox');

  if (input) {
    students.push(input);
    resultBox.textContent = `Student "${input}" added successfully.`;
  } else {
    resultBox.textContent = 'Please enter a valid student name.';
  }

  document.getElementById('inputField').value = '';
}


function removeLastStudent() {
  const resultBox = document.getElementById('resultBox');

  if (students.length > 0) {
    const removedStudent = students.pop();
    resultBox.textContent = `Student "${removedStudent}" removed successfully.`;
  } else {
    resultBox.textContent = 'No students to remove.';
  }
}


function displayAllStudents() {
  const resultBox = document.getElementById('resultBox');

  if (students.length > 0) {
    resultBox.textContent = `Students: ${students.join(', ')}`;
  } else {
    resultBox.textContent = 'No students found.';
  }
}


function showStudentCount() {
  const resultBox = document.getElementById('resultBox');
  resultBox.textContent = `Total Students: ${students.length}`;
}


function showStudentAtPosition() {
  const input = document.getElementById('inputField').value.trim();
  const resultBox = document.getElementById('resultBox');
  const position = parseInt(input, 10);

  if (!isNaN(position) && position > 0 && position <= students.length) {
    resultBox.textContent = `Student at position ${position} is "${students[position - 1]}".`;
  } else {
    resultBox.textContent = 'Invalid position or no student found at that position.';
  }

  document.getElementById('inputField').value = '';
}


function joinStudentNames() {
  const resultBox = document.getElementById('resultBox');

  if (students.length > 0) {
    resultBox.textContent = `Joined Names: ${students.join(', ')}`;
  } else {
    resultBox.textContent = 'No students to join.';
  }
}