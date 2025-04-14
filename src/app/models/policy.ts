export interface Policy {
    number: string;
    reception: string;
    concept: string;
    companyName: string; 
    companyCuil: string; 
    insurer: string;
    states: { name: string; checked: boolean }[];
}