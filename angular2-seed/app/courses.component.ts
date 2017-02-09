import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto_grow.directive'

@Component({
    selector:'courses',
    template:`
    <h2>Courses</h2>
    {{title}}
    <ul>
        <input type = "text" autoGrow/>
        <li *ngFor = "#course of courses">
        {{course}}
        </li>
     </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent{
 title : string="The title of the course page";
 courses;// = ["Course1", "Course2","Course3"];

 constructor(courseService : CourseService){
     this.courses = courseService.getCourses();
 }
}