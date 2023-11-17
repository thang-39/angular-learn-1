import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: `<p>This is a warning, you are in danger!</p>`,
    styles: [`
      p {
        padding: 20px;
        color: yellow;
        border: 1px solid red;
      }
    `]
})
export class WarningAlertComponent {

}