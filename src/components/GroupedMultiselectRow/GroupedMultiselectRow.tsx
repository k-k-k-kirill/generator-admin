import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';

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

interface GroupedMultiSelectRowProps {
    items: any[];
    label?: string;
    selectedItems: any;
    handleChange: (event: any) => void;
    handleDelete: (event: any) => ((event: any) => void) | undefined;
};

const GroupedMultiSelectRow: React.FC<GroupedMultiSelectRowProps> = (props: GroupedMultiSelectRowProps) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-name-label">{props.label}</InputLabel>
                    <Select
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name-akr"
                        multiple
                        value={props.selectedItems}
                        onChange={props.handleChange}
                        input={<Input />}
                    >
                        {props.items.map((item: any, genreIndex: number) => {
                                return [
                                    <ListSubheader>{item.label}</ListSubheader>,
                                    item.subgenres.map((subgenre: any, subgenreIndex: number) => <MenuItem key={`${genreIndex}-${subgenreIndex}`} value={`${genreIndex}-${subgenreIndex}`}>{subgenre.label}</MenuItem>)
                                ];
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                {props.selectedItems.length > 0 && <Paper component="ul" className={classes.chips}>
                    {props.selectedItems.map((item: any) => {
                        const indices = item.split('-');
                        const genre = props.items[parseInt(indices[0])];
                        const subgenre = genre.subgenres[parseInt(indices[1])];

                        return (
                            <li key={item}>
                                <Chip
                                    label={`${genre.label} : ${subgenre.label}`}
                                    onDelete={props.handleDelete(item)}
                                />
                            </li>
                        );
                    })}
                </Paper>}
            </Grid>
        </Grid>
    )
}

export default GroupedMultiSelectRow;