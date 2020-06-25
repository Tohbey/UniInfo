export class Student{
    studentid:number;
    surname:string;
    firstname:string;
    faculty:string;
    department:string;
    programme:string;
    level:number;
    course:{
        courseID:string;
        courseUnit:number;
        courseTitle:string;
        offered:boolean;
    }[];
}