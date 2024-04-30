export class Project {
  title: string;
  topics: string[];
  urlImage: string;
  idProject: number;
}

export class ProjectDetail {
  title: string;
  topics: string[];
  dsTopics: string[];
  urlImage: string;
  idProject: number;
  description: string;
  urls: Link[];
}

export class Link {
  name: string;
  url: string;
}

export class Skill {
  name: string;
  urlImage: string;
}

export class SkillTools {
  programming: Skill[];
  development: Skill[];
  others: Skill[];
}

export class TimeLineRow {
  date: string;
  title: string;
  description: string;
  topics: string[];
}
