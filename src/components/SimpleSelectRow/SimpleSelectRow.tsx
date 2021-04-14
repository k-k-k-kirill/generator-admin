import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));

interface SimpleSelectRowProps {
    items: string[];
    handleChange: (event: any) => void;
    selectedItem: string;
    label?: string;
};

const SimpleSelectRow: React.FC<SimpleSelectRowProps> = (props: SimpleSelectRowProps) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="simple-select-row">{props.label}</InputLabel>
                    <Select
                        labelId="simple-select-row"
                        value={props.selectedItem}
                        onChange={props.handleChange}
                    >
                        {props.items.map((item: string) => (
                            <MenuItem value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default SimpleSelectRow;