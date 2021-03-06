export class Template {
    projectColumnName: string;
    columnType: string;
    formulaValue: string;
} 
export class Column {
    columnName: string;
    columnId: number;
    columnType: string;
}
export class Type {
    label:string;
    columnType:string;
}
export class ProjectCol {
    projectColumnName:string;
    columnType:string;
    project:{
        id:number;
    }
}