import { TSkills } from '../types/skills.type';
import { getRandom } from '../../../../util';

export class SkillsDTO {
  private skills: TSkills[];
  private skillsToRender: TSkills[];

  constructor(jsonData: any) {
    this.skills = jsonData;
    this.skillsToRender = [];
  }

  public setFirstSevenSkills() {
    for (let i = 0; i < 7; i++) {
      this.skillsToRender.push(this.skills[i]);
    }
    return this.skillsToRender;
  }

  public getSkills() {
    return this.skillsToRender;
  }

  public updateSkillsToRender() {
    const notRenderedSkills: TSkills[] = this.skills.filter((skill) => {
      let isNotMatch = false;
      for (let i = 0; i < this.skillsToRender.length; i++) {
        if (this.skillsToRender[i].id === skill.id) {
          return false;
        }
        isNotMatch = true
      }
      return isNotMatch;
    });

    const newSkillIndex = getRandom(notRenderedSkills.length - 1, 0);
    const skillIndexForRemove = getRandom(this.skillsToRender.length - 1, 0);
    this.skillsToRender[skillIndexForRemove] = notRenderedSkills[newSkillIndex];
  }
};
