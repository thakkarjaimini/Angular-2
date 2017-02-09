import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
//import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses>`,   
    directives: [CoursesComponent]
    //, AuthorComponent]
})
export class AppComponent { }