// https://stackoverflow.com/questions/37263357/how-to-declare-and-import-typescript-interfaces-in-a-separate-file
export default interface Hang { date: string; activity: string; didHang: boolean };
export default interface Friend { name: string; frequency: number; id: number; hangs: Hang[] };
// https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types
export default interface handleCreateFunction {
  (newRecord:object) : object
}
