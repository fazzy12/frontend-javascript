interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [propName: string]: any;
}


const t1: Teacher = {
    firstName: 'Melina',
    lastName: 'Burghall',
    fullTimeEmployee: true,
    location: 'Guangping',
    contract: true,
};
