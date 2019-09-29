// https://stackoverflow.com/questions/37263357/how-to-declare-and-import-typescript-interfaces-in-a-separate-file
export interface Hang {
  id: number;
  type: string;
  attributes: {
    friend_id: number;
    date: string;
    activity: string;
    didHang: boolean;
  };
  relationships: {
    friend: Friend;
  };
}

export interface Friend {
  id: number;
  type: string;
  attributes: {
    name: string;
    desiredFrequency: number;
    id: number;
    lastDateSeen: string;
    notes: string;
    user_id: number;
  };
  relationships: Hang[];
}

export interface User {
  id: number;
  type: string;
  attributes: {
    email: string;
    encrypted_password: string;
    username: string;
    password: string;
    avatar_url: string;
  };
  relationships: Friend[];
}
// https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types
export interface handleCreateFunction {
  (newRecord: object): object;
}
