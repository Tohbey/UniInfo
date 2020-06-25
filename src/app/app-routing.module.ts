import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ResultComputationComponent } from './result-computation/result-computation.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { CourselistComponent } from './courselist/courselist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammelistComponent } from './programmelist/programmelist.component';


const routes: Routes = [
  {path:'',redirectTo:'/students',pathMatch:'full'},
  {path:'students',component:StudentListComponent},
  {path:'createStudent',component:StudentComponent},
  {path:'student/:studentid',component:StudentComponent},
  {path:'courses',component:CourseComponent},
  {path:'courses/:courseid',component:CourseComponent},
  {path:'department',component:DepartmentComponent},
  {path:'department/:departmentName',component:DepartmentComponent},
  {path:'result-computation',component:ResultComputationComponent},
  {path:'course-list',component:CourselistComponent},
  {path:'department-list',component:DepartmentlistComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'faculty/:facultyName',component:FacultyComponent},
  {path:'faculty-list',component:FacultylistComponent},
  {path:'programme',component:ProgrammeComponent},
  {path:'programme/:programeName',component:ProgrammeComponent},
  {path:'programme-list',component:ProgrammelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
