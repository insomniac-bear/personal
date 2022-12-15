import { FC, useState,useEffect } from 'react';
import { Button } from '../../button/button';
import { SkillItem } from './skill-item/skill-item';
import { SkillsDTO } from './util/skills-dto';
import skillsData from '../../../util/data/skills-data.json';
import styles from './skills.module.css';

const SkillsData = new SkillsDTO(skillsData);
const initialSkills = SkillsData.setFirstSevenSkills();

export const Skills: FC = () => {
  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    const intervalSkillChange = setInterval(() => {
      SkillsData.updateSkillsToRender();
      setSkills([...SkillsData.getSkills()]);
    }, 5000);
    return () => clearInterval(intervalSkillChange);
  }, [skills]);

  return(
    <div className={styles.skills} aria-label='About skills'>
      <ul className={styles.skills_list}>
        {
          skills && skills.map((skill) => {
            return (
              <SkillItem
                key={skill.id}
                icon={skill.icon}
                text={skill.description}
              />
            );
        })}
      </ul>
      <footer className={styles.skills_footer}>
        <Button
          text='Show full skills information'
          onClick={() => {}}
        />
      </footer>
    </div>
  );
};