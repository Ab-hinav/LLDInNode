import { UUID, randomUUID } from "crypto";
import { Student } from "./Student";

export class StudentBuilder{

    public name:string;
    public age:number;
    public grade:number;
    public gender:string;
    public address:string;
    public id:UUID;
    public subjects:string[];

    constructor(){
        this.name = '';
        this.age = 0;
        this.gender = 'M';
        this.address = '';
        this.grade = 0;
        this.address = '';
        this.id = randomUUID();
        this.subjects = [];
    }

    public setName(name:string):StudentBuilder{
        this.name = name;
        return this;
    }

    public setAge(age:number):StudentBuilder{
        this.age = age;
        return this;
    }

    public setGrade(grade:number):StudentBuilder{
        this.grade = grade;
        return this;
    }

    public setGender(gender:string):StudentBuilder{
        this.gender = gender;
        return this;
    }

    public setAddress(address:string):StudentBuilder{
        this.address = address;
        return this;
    }

    public setSubjects(subjects:string[]):StudentBuilder{
    
        this.subjects = subjects;
        return this;
    }

    public addSubject(subject:string):StudentBuilder{
        this.subjects.push(subject);
        return this;

    }



    public build():Student{
        return new Student(this);
    }



}