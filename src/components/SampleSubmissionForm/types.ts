export interface Tag {
    label: string;
    value: string;

};

export interface GenreTag extends Tag {
    subgenres?: Tag[];
};

export interface ResponseData {
    upload: File;
    moods: Tag[];
    genre: GenreTag;
    subgenre?: any;
    bpm: number;
    key: string;
    trackType: string;
};
