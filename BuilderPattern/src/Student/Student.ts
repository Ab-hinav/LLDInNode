import { UUID } from "crypto";
import { StudentBuilder } from "./StudentBuilder";

export class Student{

    private name:string;
    private age:number;
    private grade:number;
    private gender:string;
    private address:string;
    private id:UUID;
    private subjects:string[];


    constructor(studentBuilder:StudentBuilder){
        this.name = studentBuilder.name;
        this.age = studentBuilder.age;
        this.grade = studentBuilder.grade;
        this.gender = studentBuilder.gender;
        this.address = studentBuilder.address;
        this.id = studentBuilder.id;
        this.subjects = studentBuilder.subjects;
    }
    

}