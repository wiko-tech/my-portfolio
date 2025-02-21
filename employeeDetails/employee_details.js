const employees = [
    { id: 1, name: 'Alice Johnson', department: 'HR', salary: 50000, specialization: 'Recruitment' },
    { id: 2, name: 'Bob Smith', department: 'Engineering', salary: 70000, specialization: 'JavaScript' },
    { id: 3, name: 'Charlie Brown', department: 'Engineering', salary: 75000, specialization: 'JavaScript' },
    { id: 4, name: 'Diana Rose', department: 'Finance', salary: 60000, specialization: 'Financial Analysis' },
    { id: 5, name: 'Eve Adams', department: 'Engineering', salary: 80000, specialization: 'Python' }
];

// Function to display all employees
function displayEmployees() {
    const employeeList = employees.map(employee =>
        `<p><strong>ID:</strong> ${employee.id} | <strong>Name:</strong> ${employee.name} | 
        <strong>Department:</strong> ${employee.department} | <strong>Salary:</strong> $${employee.salary} |
        <strong>Specialization:</strong> ${employee.specialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = employeeList;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display only HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrList = hrEmployees.map(employee =>
        `<p><strong>ID:</strong> ${employee.id} | <strong>Name:</strong> ${employee.name} | 
        <strong>Department:</strong> ${employee.department} | <strong>Salary:</strong> $${employee.salary} |
        <strong>Specialization:</strong> ${employee.specialization}</p>`
    ).join('');
    
    document.getElementById('employeesDetails').innerHTML = hrList || "No employees found in HR department.";
}

// Function to find an employee by ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p><strong>ID:</strong> ${foundEmployee.id} | <strong>Name:</strong> ${foundEmployee.name} | 
            <strong>Department:</strong> ${foundEmployee.department} | <strong>Salary:</strong> $${foundEmployee.salary} |
            <strong>Specialization:</strong> ${foundEmployee.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = "No employee found with this ID.";
    }
}

// Function to display employees specialized in JavaScript
function displayJavaScriptSpecialists() {
    const jsEmployees = employees.filter(employee => employee.specialization.toLowerCase() === "javascript");

    if (jsEmployees.length > 0) {
        const employeeDetails = jsEmployees.map(employee =>
            `<p><strong>ID:</strong> ${employee.id} | <strong>Name:</strong> ${employee.name} | 
            <strong>Department:</strong> ${employee.department} | <strong>Salary:</strong> $${employee.salary} |
            <strong>Specialization:</strong> ${employee.specialization}</p>`
        ).join('');
        
        document.getElementById('employeesDetails').innerHTML = employeeDetails;
    } else {
        document.getElementById('employeesDetails').innerHTML = "No employees found with specialization in JavaScript.";
    }
}
