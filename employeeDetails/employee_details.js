// Sample employee data
const employees = [
    { id: 1, name: "John Doe", department: "Engineering", salary: 75000 },
    { id: 2, name: "Jane Smith", department: "Marketing", salary: 68000 },
    { id: 3, name: "Alice Johnson", department: "Finance", salary: 72000 },
    { id: 4, name: "Bob Brown", department: "HR", salary: 65000 },
    { id: 5, name: "Emma Wilson", department: "HR", salary: 67000 }
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map((employee, index) => 
            `<p><strong>Employee ${index + 1}</strong>: ID ${employee.id}, ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        )
        .join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display only HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees
        .map((employee, index) => 
            `<p><strong>HR Employee ${index + 1}</strong>: ID ${employee.id}, ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        )
        .join('');

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find an employee by ID
function findEmployeeById(employeeId = null) {
    if (!employeeId) {
        const inputId = prompt("Enter Employee ID:");
        if (!inputId) return; // Exit if input is empty or canceled
        employeeId = parseInt(inputId);
    }

    const foundEmployee = employees.find(employee => employee.id === employeeId);
    
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = 
            `<p><strong>Found Employee</strong>: ID ${foundEmployee.id}, ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = '<p style="color:red;">No employee found with this ID.</p>';
    }
}

// Call the function to display all employees when the script loads
displayEmployees();
