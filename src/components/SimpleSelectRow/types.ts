export interface SimpleSelectRowProps {
    items: any[];
    handleChange: (event: any) => void;
    selectedItem: any;
    label?: string;
};