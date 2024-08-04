import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildingService } from './services/building.service';
import { Stage } from './interfaces/stage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'building-progress';
  stages: Stage[] = [];
  buildingService = inject(BuildingService);
  currentStage = 1;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.stages = this.buildingService.getStages();
  }
  pad(value: number): string {
    var s = '000'+value;
    return s.substr(s.length-3);
  }
  selectStage(id: number): void {
    this.stages.forEach(element => {
      element.visible = element.id <= id;
      element.active = element.id == id;
    });
  }
}
