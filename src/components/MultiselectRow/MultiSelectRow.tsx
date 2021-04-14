import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { MultiSelectRowProps } from './types';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyleType: 'none',
      padding: '1rem',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
}));

const MultiSelectRow: React.FC<MultiSelectRowProps> = (props: MultiSelectRowProps) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-name-label">{props.label}</InputLabel>
                    <Select
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        multiple
                        value={props.selectedItems}
                        onChange={props.handleChange}
                        input={<Input />}
                    >
                        {props.items.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                {props.selectedItems.length > 0 && <Paper component="ul" className={classes.chips}>
                    {props.selectedItems.map((data) => {
                        return (
                            <li key={data}>
                                <Chip
                                    label={data}
                                    onDelete={props.handleDelete(data)}
                                />
                            </li>
                        );
                    })}
                </Paper>}
            </Grid>
        </Grid>
    )
}

export default MultiSelectRow;