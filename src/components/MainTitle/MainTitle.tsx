import React from 'react';
import Typography from '@material-ui/core/Typography';
import { MainTitleProps } from './types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'block',
        marginBottom: theme.spacing(8),
    }
}))

const MainTitle: React.FC<MainTitleProps> = (props: MainTitleProps) => {
    const classes = useStyles();

    return (
        <div className={classes.title}>
            <Typography variant="h4" component="h1" gutterBottom>
                {props.label}
            </Typography>
        </div>
    );
};

export default MainTitle;