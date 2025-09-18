interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "john",
    lastname: "doe",
    age: 29,
    location: "New york",
}

const student2: Student = {
    firstname: "ifeanyi",
    lastname: "kalu",
    age: 53,
    location: "Lagos"
}

const studentsList: Student[] = [student1, student2]


const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstname;

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = student.lastname;

    const ageCell = document.createElement("td");
    ageCell.textContent = student.age.toString();

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;


    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);
    
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);