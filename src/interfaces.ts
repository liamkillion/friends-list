// https://stackoverflow.com/questions/37263357/how-to-declare-and-import-typescript-interfaces-in-a-separate-file
export interface Hang {
  id: number;
  friend_id: number;
  date: string;
  activity: string;
  didHang: boolean;
}
export interface Friend {
  id: number;
  type: string;
  attributes: {
    name: string;
    desiredFrequency: number;
    id: number;
    lastDateSeen: string;
    hangs: Hang[];
    notes: string;
  };
  relationships: Hang[];
}
// https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types
export interface handleCreateFunction {
  (newRecord: object): object;
}
