export interface MultiSelectRowProps {
    items: { label: string; value: string; }[];
    handleChange: any;
    selectedItems: any[];
    handleDelete: any;
    label?: string,
};