import { Injectable } from "@angular/core";

// @Injectable({providedIn: 'root'})
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.log('input message:',message);
    console.log('lastlog:',this.lastlog);
    this.lastlog = message;
  }
}