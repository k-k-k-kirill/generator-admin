import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SimpleSelectRowProps } from './types';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

const SimpleSelectRow: React.FC<SimpleSelectRowProps> = (props: SimpleSelectRowProps) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="simple-select-row">{props.label}</InputLabel>
                    <Select
                        labelId="simple-select-row"
                        value={props.selectedItem}
                        onChange={props.handleChange}
                    >
                        {props.items.map((item: any, index: number) => (
                            <MenuItem key={item.value} value={index}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default SimpleSelectRow;