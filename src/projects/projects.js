import starPathfinder from './a-star-pathfinder.json';
import emailTemplate from './html-email-template.json';
import snake from './snake.json';
import tetris from './tetris.json';
import notePad from './notepad.json';
import arkanoid from './arkanoid.json';
import leBrignolaisSportif from './le-brignolais-sportif.json';
import sharcade from './sharcade.json';
import lesJardinsDeLalandette from './les-jardins-de-lalandette.json';

let ProjectsArray = [];

ProjectsArray.push(
  starPathfinder, 
  emailTemplate, 
  snake, 
  tetris, 
  notePad, 
  arkanoid, 
  leBrignolaisSportif, 
  sharcade, 
  lesJardinsDeLalandette,
);

const Projects = ProjectsArray.reverse()

export default Projects;