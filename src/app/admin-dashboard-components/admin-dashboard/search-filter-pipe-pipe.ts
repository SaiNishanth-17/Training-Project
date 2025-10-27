import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(records: any[], searchText: string): any[] {
    // 1. Handle edge cases: return the full array if no array or no search text is provided.
    if (!records || !searchText) {
      return records;
    }

    // 2. Normalize the search term for case-insensitive matching.
    searchText = searchText.toLowerCase();

    // 3. Filter the array based on 'firstname' OR 'role'.
    return records.filter(record => {
      // Check if the exam object or its properties exist before calling toLowerCase()
      const firstNameMatch = record.firstname && record.firstname.toLowerCase().includes(searchText);
      const roleMatch = record.role && record.role.toLowerCase().includes(searchText);
      
      // Return true if EITHER the first name OR the role contains the search text.
      return firstNameMatch || roleMatch;
    });
  }
}