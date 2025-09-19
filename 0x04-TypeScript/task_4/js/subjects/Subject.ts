/// <reference path="Teacher.ts" />

namespace subjects {
    export class subject {
        protected teacher: Teacher;
    }

    setTeacher(teacher: Teacher); void {
        this.teacher = teacher;
    }
}