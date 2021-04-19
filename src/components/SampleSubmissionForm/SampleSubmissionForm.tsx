import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

//Components
import MultiSelectRow from '../MultiselectRow/MultiSelectRow';
import SimpleSelectRow from '../SimpleSelectRow/SimpleSelectRow';
import TextFieldRow from '../TextFieldRow/TextFieldRow';
import FileUploadRow from '../FileUploadRow/FileUploadRow';
import GroupedMultiSelectRow from '../GroupedMultiselectRow/GroupedMultiselectRow';
import {
    addMood,
    removeMood,
    addArtist,
    removeArtist,
    setBpm,
    setKey,
    setTrackType,
    addGenre,
    removeGenre,
    addGenresSubgenresCombination,
    removeGenresSubgenresCombination,
    populateSubgenres,
    uploadSample,
} from '../../redux/slices/sample/sample';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';

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
    const dispatch = useDispatch();

    // Uploads input data
    const [upload, setUpload] = useState<File[]>([]);

    const handleUploadChange = (event: any) => {
        setUpload(event.target.files);
    };
    const handleUploadRemove = () => {
        setUpload([]);
    };

    // Moods data
    const moods = useSelector((state: RootState) => state.sample.moods);
    const moodsOptions = useSelector((state: RootState) => state.options.moods);

    // Genre data
    const genres = useSelector((state: RootState) => state.sample.genres);
    const genresOptions = useSelector((state: RootState) => state.options.genres);
    const subgenresOptions = genresOptions.filter((item: any) => !!item.subgenres && genres.find((subItem) => subItem.label === item.label));
    const genreSubgenreCombinations = useSelector((state: RootState) => state.sample.genresSubgenresCombinations);

    const handleGenresSubgenresCombbinationChange = (item: any) => {
        dispatch(addGenresSubgenresCombination(item));
        dispatch(populateSubgenres(item));
    }
    const handleGenresSubgenresCombinationDelete = (item: any) => {
        dispatch(removeGenresSubgenresCombination(item));
        dispatch(populateSubgenres(item));
    }

    // Artists data
    const artistsOptions = useSelector((state: RootState) => state.options.artists);
    const artists = useSelector((state: RootState) => state.sample.artists);

    // BPM data
    const bpm = useSelector((state: RootState) => state.sample.bpm);

    // Keys data
    const key = useSelector((state: RootState) => state.sample.key);
    const keyOptions = useSelector((state: RootState) => state.options.keys);

    // Track type data
    const trackType = useSelector((state: RootState) => state.sample.trackType);
    const trackTypeOptions = useSelector((state: RootState) => state.options.trackTypes);

    // Handle submit of the form, prepare data.
    const handleSubmit = (event: any) => {
        event.preventDefault();

        dispatch(uploadSample());
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FileUploadRow item={upload} handleChange={handleUploadChange} handleRemove={handleUploadRemove} label="Upload file" />

                <MultiSelectRow label='Moods' handleChange={(e: any) => dispatch(addMood(e.target.value))} handleDelete={(item: any) => dispatch(removeMood(item))} selectedItems={moods} items={moodsOptions} />

                <MultiSelectRow selectedItems={genres} handleChange={(e: any) => dispatch(addGenre(e.target.value))} handleDelete={(item: any) => dispatch(removeGenre(item))} items={genresOptions} label="Genres" />

                {subgenresOptions.length > 0 ? (
                    <GroupedMultiSelectRow selectedItems={genreSubgenreCombinations} items={subgenresOptions} handleChange={(e: any) => handleGenresSubgenresCombbinationChange(e.target.value)} handleDelete={(item: any) => handleGenresSubgenresCombinationDelete(item)} label='Subgenres' />
                ) : null}

                <MultiSelectRow label='Artists' handleChange={(e: any) => dispatch(addArtist(e.target.value))} handleDelete={(item: any) => dispatch(removeArtist(item))} selectedItems={artists} items={artistsOptions} />

                <TextFieldRow value={bpm} handleChange={(e) => dispatch(setBpm(e.target.value))} label="BPM" />

                <SimpleSelectRow selectedItem={key} handleChange={(e: any) => dispatch(setKey(e.target.value))} items={keyOptions} label="Key" />

                <SimpleSelectRow selectedItem={trackType} handleChange={(e: any) => dispatch(setTrackType(e.target.value))} items={trackTypeOptions} label="Track type" />

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