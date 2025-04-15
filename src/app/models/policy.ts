export interface Policy {
    number: string;
    reception: string;
    concept: string;
    companyName: string; 
    companyCuil: string; 
    insurer: string;
    states: States[];
}

export interface States {
    name:string;
    checked: boolean;
}