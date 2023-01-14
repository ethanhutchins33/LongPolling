# LongPolling Example

A simple example application that uses an Angular frontend to long poll an ASP.NET Core Web API backend every 1000ms for a new random number and display it to the page.

## UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

Switch to the UI project folder `cd UI`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## API

This is an ASP.NET Core 7 Web API project.

Switch to the API project folder `cd API`.

Run `dotnet run` for a local dev server. You may need to find the URL within the output of the application and place this into the angular application within `poll.service.ts`.
