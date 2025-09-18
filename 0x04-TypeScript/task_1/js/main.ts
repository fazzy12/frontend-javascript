interface Teacher {
    readonly firstName : string;
    readonly lastname : string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher1: Teacher = {
    firstName: "jane",
    lastname: "kalu",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Abuja"
}

const teacher2 : Teacher = {
    firstName: "bee",
    lastname: "vera",
    fullTimeEmployee: false,
    location: "Aba",
    contract: true,
}

console.log(teacher1)
console.log(teacher2)