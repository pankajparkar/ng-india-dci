import { Component } from '@angular/core';
import { CdkMenuItem, CdkMenuModule } from '@angular/cdk/menu';

@Component({
  selector: 'my-menu-item',
  standalone: true,
  imports: [
    CdkMenuModule,
  ],
  hostDirectives: [
    CdkMenuItem,
  ],
  template: `
    <ng-content></ng-content>
  `,
})
export class MenuItemComponent { }