import { Injectable } from '@angular/core';
import { Stage } from '../interfaces/stage';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }
  getStages(): Stage[] {
    const stages = [];
    for (let index = 0; index < 10; index++) {
      const element: Stage = {
        id: index + 1,
        title: this.getStageTitle(index),
        description: 'lorem ipsum' + (index + 1),
        visible: index==0,
        active: index==0
      };
      stages.push(element);
    }
    return stages;
  }
  private getStageTitle(index: number): string {
    const stages = ['Проект', '1 поверх','2 поверх','3 поверх','4 поверх','технічний поверх','двері','вікна','внутрішні комунікації','зовнішні комунікації'];
    return stages[index].toString();
  }
}
