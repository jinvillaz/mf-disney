export interface Character {
  _id: string;
  imageUrl: string;
  name: string;
}

export interface DataList {
  data: Character[]
  pages: number
}
