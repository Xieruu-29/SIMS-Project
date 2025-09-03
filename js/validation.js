/**
 * Validation Module
 * Handles all input validation and data sanitization
 */

/**
 * Validate student name input
 * @param {string} name - The student name to validate
 * @returns {object} - Validation result with isValid boolean and message string
 */
function validateStudentName(name) {
    // Check if name is provided
    if (!name) {
        return {
            isValid: false,
            message: 'Please enter a student name.'
        };
    }
    
    // Sanitize and check if name is empty after trimming
    const trimmedName = name.trim();
    if (trimmedName === '') {
        return {
            isValid: false,
            message: 'Student name cannot be empty or just spaces.'
        };
    }
    
    // Check minimum length
    if (trimmedName.length < 2) {
        return {
            isValid: false,
            message: 'Student name must be at least 2 characters long.'
        };
    }
    
    // Check maximum length
    if (trimmedName.length > 50) {
        return {
            isValid: false,
            message: 'Student name cannot exceed 50 characters.'
        };
    }
    
    // Check for valid characters (letters, spaces, hyphens, apostrophes)
    const namePattern = /^[a-zA-Z\s\-'\.]+$/;
    if (!namePattern.test(trimmedName)) {
        return {
            isValid: false,
            message: 'Student name can only contain letters, spaces, hyphens, apostrophes, and periods.'
        };
    }
    
    // Check if name already exists (case-insensitive)
    const existingStudents = getAllStudents();
    const isDuplicate = existingStudents.some(student => 
        student.toLowerCase() === trimmedName.toLowerCase()
    );
    
    if (isDuplicate) {
        return {
            isValid: false,
            message: 'A student with this name already exists.'
        };
    }
    
    return {
        isValid: true,
        message: 'Valid student name.'
    };
}

/**
 * Validate position input for array access
 * @param {string|number} position - The position to validate
 * @param {number} arrayLength - The current length of the student array
 * @returns {object} - Validation result with isValid boolean and message string
 */
function validatePosition(position, arrayLength) {
    // Check if position is provided
    if (position === null || position === undefined || position === '') {
        return {
            isValid: false,
            message: 'Please enter a position number.'
        };
    }
    
    // Convert to number and check if it's a valid number
    const positionNum = Number(position);
    if (isNaN(positionNum)) {
        return {
            isValid: false,
            message: 'Position must be a valid number.'
        };
    }
    
    // Check if it's a positive integer
    if (!Number.isInteger(positionNum) || positionNum <= 0) {
        return {
            isValid: false,
            message: 'Position must be a positive integer (1, 2, 3, ...).'
        };
    }
    
    // Check if position is within valid range
    if (positionNum > arrayLength) {
        return {
            isValid: false,
            message: `Position ${positionNum} is out of range. There are only ${arrayLength} students.`
        };
    }
    
    return {
        isValid: true,
        message: 'Valid position.'
    };
}

/**
 * Check if the student array is empty and provide appropriate feedback
 * @returns {object} - Check result with isEmpty boolean and message string
 */
function checkArrayEmpty() {
    const isEmpty = isStudentArrayEmpty();
    
    if (isEmpty) {
        return {
            isEmpty: true,
            message: 'No students in the system. Please add some students first.'
        };
    } else {
        return {
            isEmpty: false,
            message: `There are ${getStudentCount()} students in the system.`
        };
    }
}

/**
 * Sanitize user input by trimming whitespace and normalizing format
 * @param {string} input - The input string to sanitize
 * @returns {string} - The sanitized input string
 */
function sanitizeInput(input) {
    if (!input || typeof input !== 'string') {
        return '';
    }
    
    // Trim whitespace from start and end
    let sanitized = input.trim();
    
    // Remove multiple consecutive spaces and replace with single space
    sanitized = sanitized.replace(/\s+/g, ' ');
    
    // Capitalize first letter of each word (proper case)
    sanitized = sanitized.replace(/\b\w+/g, function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    return sanitized;
}

/**
 * Validate separator input for joining names
 * @param {string} separator - The separator to validate
 * @returns {object} - Validation result with isValid boolean and separator string
 */
function validateSeparator(separator) {
    // If no separator provided, use default
    if (!separator && separator !== '') {
        return {
            isValid: true,
            separator: ', '
        };
    }
    
    // Check separator length
    if (separator.length > 10) {
        return {
            isValid: false,
            message: 'Separator cannot exceed 10 characters.',
            separator: ', '
        };
    }
    
    return {
        isValid: true,
        separator: separator
    };
}

/**
 * Validate if operation can be performed based on array state
 * @param {string} operation - The operation to validate ('remove', 'display', 'position', 'join')
 * @returns {object} - Validation result with canProceed boolean and message string
 */
function validateOperation(operation) {
    const arrayCheck = checkArrayEmpty();
    
    // Operations that require non-empty array
    const requiresStudents = ['remove', 'display', 'position', 'join'];
    
    if (requiresStudents.includes(operation) && arrayCheck.isEmpty) {
        return {
            canProceed: false,
            message: arrayCheck.message
        };
    }
    
    // Operation-specific validations
    switch (operation) {
        case 'remove':
            return {
                canProceed: true,
                message: 'Ready to remove the last student.'
            };
        case 'display':
            return {
                canProceed: true,
                message: 'Ready to display all students.'
            };
        case 'position':
            return {
                canProceed: true,
                message: 'Ready to show student at position.'
            };
        case 'join':
            return {
                canProceed: true,
                message: 'Ready to join student names.'
            };
        default:
            return {
                canProceed: true,
                message: 'Operation validated.'
            };
    }
}