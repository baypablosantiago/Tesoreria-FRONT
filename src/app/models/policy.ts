export interface Policy {
    number: string;
    receipt_date: string;
    concept: string;
    companyName: string; 
    companyCuil: string; 
    insurer: string;
    states: { name: string; checked: boolean }[];
}
