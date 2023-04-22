import { Component } from '@angular/core';
import { LessonsService } from 'src/app/services/lessons.service';
import { Lesson } from 'src/app/models/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  lesson!: Lesson;
  constructor(private lessonsService: LessonsService) { }
  ngOnInit(): void {
    this.getLesson();
  }

  getLesson() {
    this.lessonsService.getLessons('644418e48ebc89029594f7a7').subscribe((data) => {
      this.lesson = data.body;
      console.log(this.lesson);

    });
  }
}
