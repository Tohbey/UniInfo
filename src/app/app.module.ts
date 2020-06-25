import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './header/header.component';
import { ResultComputationComponent } from './result-computation/result-computation.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourselistComponent } from './courselist/courselist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { ProgrammeComponent } from './programme/programme.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { ProgrammelistComponent } from './programmelist/programmelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule,
 MatButtonModule,
 MatSortModule,
 MatPaginatorModule,
 MatTableModule 
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DepartmentComponent,
    HeaderComponent,
    ResultComputationComponent,
    StudentComponent,
    StudentListComponent,
    CourselistComponent,
    DepartmentlistComponent,
    ProgrammeComponent,
    FacultyComponent,
    FacultylistComponent,
    ProgrammelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
