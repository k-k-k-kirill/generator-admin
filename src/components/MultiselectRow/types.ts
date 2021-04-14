export interface MultiSelectRowProps {
    items: string[];
    handleChange: (event: any) => void;
    selectedItems: string[];
    handleDelete: (data: string) => ((event: any) => void) | undefined;
    label?: string,
};