function addStudent(nameRaw) {
    const name = normalizeName(nameRaw || '');
    if (!name) {
        alert('⚠️ Please enter a non-empty name.');
        return;
    }

    if (students.includes(name)) {
        alert('⚠️ Duplicate name: "' + name + '" already exists.');
        return;
    }

    students.push(name);
    renderRoster();
    el.nameInput.value = '';
    el.nameInput.focus();
}

function removeStudent() {
    if (isEmpty()) {
        alert('ℹ️ Cannot remove: class is empty.');
        return;
    }
    students.pop();
    renderRoster();
}
