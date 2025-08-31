const el = {
    nameInput: document.getElementById('studentName'),
    results: document.getElementById('results'),
    roster: document.getElementById('roster'),
    resetBtn: document.getElementById('resetBtn'),
};

function renderRoster() {
    el.roster.innerHTML = '';
    if (isEmpty()) {
        const p = document.createElement('p');
        p.className = 'muted';
        p.textContent = 'Class is empty.';
        el.roster.appendChild(p);
    } else {
        students.forEach((name, i) => {
            const studentItem = document.createElement('div');
            studentItem.className = 'student-item';
            studentItem.innerHTML = `<span>${name}</span> 
            <button class="remove-btn" onclick="removeStudentAt(${i})">Remove</button>`;
            el.roster.appendChild(studentItem);
        });
    }
}

function removeStudentAt(index) {
    students.splice(index, 1);
    renderRoster();
}
