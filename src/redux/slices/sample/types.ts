export interface sampleState {
    moods: Tag[];
    artists: Tag[];
    bpm: number;
    key: Tag | null;
    trackType: Tag | null;
    genres: Genre[];
    genresSubgenresCombinations: GenreSubgenreCombination[];
};

export interface Tag {
    label: string;
    value: string;
};

export interface Genre extends Tag {
    subgenres?: Tag[];
};

export interface GenreSubgenreCombination {
    genre: String;
    subgenre: Tag;
}