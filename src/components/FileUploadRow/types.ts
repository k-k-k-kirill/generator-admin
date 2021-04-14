export interface FileUploadRowProps {
    item: File[];
    handleChange: (event: any) => void;
    handleRemove: () => void;
    label?: string;
};