const students = [];

function normalizeName(name) {
    return name.replace(/\s+/g, ' ').trim();
}

function isEmpty() {
    return students.length === 0;
}

function handleAction(action) {
    switch (action) {
        case 'add':
            addStudent(el.nameInput.value);
            break;
        case 'remove':
            removeStudent();
            break;
        default:
            console.log('Unknown action:', action);
    }
}
