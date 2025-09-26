import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

 transform(exams: any[], searchText: string): any[] {
    if(!exams || !searchText) {
    return exams;
  }
  searchText = searchText.toLowerCase();
  return exams.filter(exam => {
    return exam.id.toLowerCase().includes(searchText) ||
    exam.student.toLowerCase().includes(searchText)
  }
)
}
}
