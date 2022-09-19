export interface IProjectItem {
  id: string;
  name: string;
  jobs: number | string;
}

export interface IProject {
  id: string;
  name: string;
  spaces: IProjectItem[];
}
