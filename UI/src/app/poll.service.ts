import { PollResponseDto } from './models/PollResponseDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  private ApiUrl: string = 'http://localhost:5007/api/poll';

  constructor(private http: HttpClient) {}

  startPolling(): Observable<PollResponseDto> {
    return new Observable((observer) => {
      this.http.get<PollResponseDto>(this.ApiUrl).subscribe((response) => {
        observer.next(response);
      });
    });
  }
}
