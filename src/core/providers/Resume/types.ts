export interface Contact {
  name: string;
  type: string;
  value: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  name: string;
  fromDate: string;
  toDate: string;
}

export interface Education {
  name: string;
  fromDate: string;
  toDate: string;
  labels: string[];
}

export interface BestProject {
  name: string;
  description: string;
  tools: Tool[];
  fromDate: string;
  toDate: string;
  position: string;
}

export interface Resume {
  firstname: string;
  lastname: string;
  avatar: string;
  age: number;
  location: string;
  profession: string;
  contacts: Contact[];
  skills: Skill[];
  tools: Tool[];
  experience: Experience[];
  education: Education[];
  bestProjects: BestProject[];
}
