export interface Tag {
    label: string;
    value: string;

};

export interface GenreTag extends Tag {
    subgenres?: Tag[];
};