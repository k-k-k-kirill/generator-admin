export interface SimpleSelectRowProps {
    items: string[];
    handleChange: (event: any) => void;
    selectedItem: string;
    label?: string;
};