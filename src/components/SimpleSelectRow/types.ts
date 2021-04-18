export interface SimpleSelectRowProps {
    items: any[];
    handleChange: (event: any) => void;
    selectedItem: number;
    label?: string;
};