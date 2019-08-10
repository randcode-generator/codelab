import { Component } from '@angular/core';
import { QuestionsService } from '@codelab/utils/src/lib/sync/components/questions/common/questions.service';

@Component({
  selector: 'slides-questions-viewer',
  templateUrl: './questions-viewer.component.html',
  styleUrls: ['./questions-viewer.component.css']
})
export class QuestionsViewerComponent {
  constructor(public readonly questionsService: QuestionsService) {
  }
}
