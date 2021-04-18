export interface MultiSelectRowProps {
    items: { label: string; value: string; }[];
    handleChange: (event: any) => void;
    selectedItems: any[];
    handleDelete: (data: any) => ((event: any) => void) | undefined;
    label?: string,
};