import { PollService } from './poll.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UI';
  number: number = 0;
  subscription!: Subscription;
  private intervalId: NodeJS.Timeout | undefined;

  constructor(private readonly pollService: PollService) {}

  ngOnInit(): void {}

  startPolling() {
    this.subscription = new Subscription();
    this.intervalId = setInterval(() => {
      this.subscription.add(
        this.pollService
          .startPolling()
          .subscribe((response) => (this.number = response.number))
      );
    }, 1000);
  }

  stopPolling() {
    clearInterval(this.intervalId);
    this.subscription.unsubscribe();
  }
}
