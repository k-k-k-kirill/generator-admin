import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldRowProps } from './types';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
}));


const TextFieldRow: React.FC<TextFieldRowProps> = (props: TextFieldRowProps) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <FormControl className={classes.formControl}>
                    <TextField
                        className={classes.textField}
                        label={props.label}
                        value={props.value}
                        onChange={props.handleChange}
                        defaultValue={0}
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default TextFieldRow;