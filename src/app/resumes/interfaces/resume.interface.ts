export interface Resume {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  address: string;
  studies?: Study[];
  experience?: Experience[];
  skills?: Skill[];
}

export interface Experience {
  id?: number;
  institution: string;
  job: string;
  date: string;
  descripcion: string;
}

export interface Skill {
  id?: number;
  descripcion: string;
  valor: number;
}

export interface Study {
  id?: number;
  institution: string;
  date: string;
  profesion: string;
}
