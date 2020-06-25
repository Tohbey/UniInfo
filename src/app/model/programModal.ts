import { Courses } from './courseModal';

export class ProgramModal{
    department:string;
    programe:string;
    faculty:string;
    courses:{
        courseID:string,
        courseUnit:number,
        courseTitle:string,
    }[];
}