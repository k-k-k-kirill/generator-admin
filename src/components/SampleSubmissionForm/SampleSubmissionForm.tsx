import React, { useState } from 'react';
import { moodsData, genresData, artistData, tonalitiesData, trackTypeData } from './data';
import { extractLabels } from '../../utils/extractLabels';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

//Components
import MultiSelectRow from '../MultiselectRow/MultiSelectRow';
import SimpleSelectRow from '../SimpleSelectRow/SimpleSelectRow';
import TextFieldRow from '../TextFieldRow/TextFieldRow';
import FileUploadRow from '../FileUploadRow/FileUploadRow';

const useStyles = makeStyles((theme) => ({
    submitButton: {
        marginLeft: 'auto',
    },
    submitButtonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(1),
        marginTop: theme.spacing(4),
    },
}));

const SampleSubmissionForm: React.FC = () => {
    const classes = useStyles();

    // Uploads input data
    const [upload, setUpload] = useState<File[]>([]);

    const handleUploadChange = (event: any) => {
        setUpload(event.target.files);
    };
    const handleUploadRemove = () => {
        setUpload([]);
    };

    // Moods data
    const selectableMoods: string[] = extractLabels(moodsData);

    const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

    const handleMoodsChange = (event: any) => {      
        setSelectedMoods(event.target.value)
    };
    const handleMoodsDelete = (chipToDelete: string) => () => {
        setSelectedMoods((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    // Genres data
    const selectableGenres: string[] = extractLabels(genresData);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const handleGenresChange = (event: any) => {      
        setSelectedGenres(event.target.value)
    };
    const handleGenresDelete = (chipToDelete: string) => () => {
        setSelectedGenres((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    //Subgenres data
    let selectableSubgenres: any[] = [];
    
    genresData.map((genre) => {
        if(selectedGenres.includes(genre.label) && genre.subgenres) {
            const newSubgenres = genre.subgenres.map((subgenre) => {
                if (!selectableSubgenres.includes(subgenre.label)) {
                    return subgenre.label;
                }
            });
            selectableSubgenres = [...selectableSubgenres, ...newSubgenres];
        }
    })

    const [selectedSubGenres, setSelectedSubGenres] = useState<string[]>([]);

    const handleSubGenresChange = (event: any) => {      
        setSelectedSubGenres(event.target.value)
    };
    const handleSubGenresDelete = (chipToDelete: string) => () => {
        setSelectedSubGenres((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    // Genres data
    const selectableArtists: string[] = extractLabels(artistData);

    const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

    const handleArtistsChange = (event: any) => {      
        setSelectedArtists(event.target.value)
    };
    const handleArtistsDelete = (chipToDelete: string) => () => {
        setSelectedArtists((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    //BPM data
    const [bpm, setBpm] = useState<number>(0);

    const handleBpmChange = (event: any) => {
        let { value } = event.target;

        if(value > 999 || value < 0 || isNaN(value)) value = 0;

        value = value ? parseInt(value, 10) : ''
        setBpm(value);
    }

    //Tonalities data
    const [selectedTonality, setSelectedTonality] = useState<string>('');
    const selectableTonalities = extractLabels(tonalitiesData);

    const handleTonalityChange = (event: any) => {
        setSelectedTonality(event.target.value);
    };

    //Track type data
    const [selectedTrackType, setSelectedTrackType] = useState<string>('');
    const selectableTrackTypes = extractLabels(trackTypeData);

    const handleTrackTypeChange = (event: any) => {
        setSelectedTrackType(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted!');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FileUploadRow item={upload} handleChange={handleUploadChange} handleRemove={handleUploadRemove} label="Upload file" />

                <MultiSelectRow label='Moods' handleChange={handleMoodsChange} handleDelete={handleMoodsDelete} selectedItems={selectedMoods} items={selectableMoods} />
                <MultiSelectRow label='Genres' handleChange={handleGenresChange} handleDelete={handleGenresDelete} selectedItems={selectedGenres} items={selectableGenres} />

                {selectableSubgenres.length > 0 ? (
                    <MultiSelectRow label='Subgenres' handleChange={handleSubGenresChange} handleDelete={handleSubGenresDelete} selectedItems={selectedSubGenres} items={selectableSubgenres} />
                ) : null}

                <MultiSelectRow label='Artists' handleChange={handleArtistsChange} handleDelete={handleArtistsDelete} selectedItems={selectedArtists} items={selectableArtists} />

                <TextFieldRow value={bpm} handleChange={handleBpmChange} label="BPM" />

                <SimpleSelectRow selectedItem={selectedTonality} handleChange={handleTonalityChange} items={selectableTonalities} label="Tonality" />

                <SimpleSelectRow selectedItem={selectedTrackType} handleChange={handleTrackTypeChange} items={selectableTrackTypes} label="Track type" />

                <Grid container>
                    <Grid item xs={7}>
                        <FormControl className={classes.submitButtonWrapper}>
                            <Button
                                size="large"
                                color="primary"
                                variant="contained"
                                component="label"
                                disabled={upload.length === 0}
                            >
                                Submit
                                <input type="submit" hidden />
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </>
    )
};

export default SampleSubmissionForm;