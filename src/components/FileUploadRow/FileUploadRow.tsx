import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { FileUploadRowProps } from './types';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    upload: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadButtonWrapper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(4),
    }
}));

const FileUploadRow: React.FC<FileUploadRowProps> = (props: FileUploadRowProps) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.uploadButtonWrapper}>
            <Grid item xs={2} className={classes.upload}>
                <FormControl>
                    <Button
                        size="small"
                        variant="contained"
                        component="label"
                        disabled={props.item.length > 0}
                    >
                        {props.label}
                        <input
                            type="file"
                            hidden
                            onChange={props.handleChange}
                        />
                    </Button>
                </FormControl>
            </Grid>
            <Grid item xs={6} className={classes.upload}>
                {props.item.length > 0 ? (
                    <>
                        <Typography>
                            {props.item[0].name}
                        </Typography>
                        <IconButton onClick={props.handleRemove} aria-label="delete">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </>
                ) : null }
            </Grid>
        </Grid>
    );
};

export default FileUploadRow;