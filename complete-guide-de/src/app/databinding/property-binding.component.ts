import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
})
export class PropertyBindingComponent  {
  @Input () name: string;
}
