import React, { useState } from 'react';
import moodsData from '../../redux/slices/data/moodsData';
import genresData from '../../redux/slices/data/genresData';
import artistData from '../../redux/slices/data/artistData';
import tonalitiesData from '../../redux/slices/data/tonalitiesData';
import trackTypeData from '../../redux/slices/data/trackTypeData';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { ResponseData } from './types';

//Components
import MultiSelectRow from '../MultiselectRow/MultiSelectRow';
import SimpleSelectRow from '../SimpleSelectRow/SimpleSelectRow';
import TextFieldRow from '../TextFieldRow/TextFieldRow';
import FileUploadRow from '../FileUploadRow/FileUploadRow';
import GroupedMultiSelectRow from '../GroupedMultiselectRow/GroupedMultiselectRow';

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
    const [selectedMoods, setSelectedMoods] = useState<any>([]);

    const handleMoodsChange = (event: any) => {      
        setSelectedMoods(event.target.value)
    };
    const handleMoodsDelete = (chipToDelete: string) => () => {
        setSelectedMoods((chips: any) => chips.filter((chip: any) => chip !== chipToDelete));
    };

    // Genre data
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const handleGenresChange = (event: any) => {      
        setSelectedGenres(event.target.value)
    };

    const handleGenresDelete = (chipToDelete: string) => () => {
        setSelectedGenres((chips: any) => chips.filter((chip: any) => chip !== chipToDelete));
    };

    //Subgenres data
    const subgenresData = selectedGenres.filter((genreIndex: any) => !!genresData[genreIndex].subgenres).map((genreIndex: number) => genresData[genreIndex]);

    const [selectedSubgenres, setSelectedSubGenres] = useState<string[]>([]);

    const handleSubGenresChange = (event: any) => {
        setSelectedSubGenres(event.target.value)
    };

    const handleSubgenresDelete = (chipToDelete: string) => () => {
        setSelectedSubGenres((chips: any) => chips.filter((chip: any) => chip !== chipToDelete));
    };
    // Artists data
    const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

    const handleArtistsChange = (event: any) => {      
        setSelectedArtists(event.target.value)
    };
    const handleArtistsDelete = (chipToDelete: string) => () => {
        setSelectedArtists((chips: any) => chips.filter((chip: any) => chip !== chipToDelete));
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
    const [selectedTonality, setSelectedTonality] = useState<number>(-1);

    const handleTonalityChange = (event: any) => {
        setSelectedTonality(event.target.value);
    };

    //Track type data
    const [selectedTrackType, setSelectedTrackType] = useState<number>(-1);

    const handleTrackTypeChange = (event: any) => {
        setSelectedTrackType(event.target.value);
    };

    // Handle submit of the form, prepare data.
    const handleSubmit = (event: any) => {}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FileUploadRow item={upload} handleChange={handleUploadChange} handleRemove={handleUploadRemove} label="Upload file" />

                <MultiSelectRow label='Moods' handleChange={handleMoodsChange} handleDelete={handleMoodsDelete} selectedItems={selectedMoods} items={moodsData} />

                <MultiSelectRow selectedItems={selectedGenres} handleChange={handleGenresChange} handleDelete={handleGenresDelete} items={genresData} label="Genre" />

                {subgenresData.length > 0 ? (
                    <GroupedMultiSelectRow selectedItems={selectedSubgenres} items={subgenresData} handleChange={handleSubGenresChange} handleDelete={handleSubgenresDelete} label='Subgenres' />
                ) : null}

                <MultiSelectRow label='Artists' handleChange={handleArtistsChange} handleDelete={handleArtistsDelete} selectedItems={selectedArtists} items={artistData} />

                <TextFieldRow value={bpm} handleChange={handleBpmChange} label="BPM" />

                <SimpleSelectRow selectedItem={selectedTonality} handleChange={handleTonalityChange} items={tonalitiesData} label="Key" />

                <SimpleSelectRow selectedItem={selectedTrackType} handleChange={handleTrackTypeChange} items={trackTypeData} label="Track type" />

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