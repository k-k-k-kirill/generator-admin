import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";

//Components
import Layout from '../../components/Layout/Layout';
import SampleSubmissionForm from '../../components/SampleSubmissionForm/SampleSubmissionForm';

const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
});

const Home: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                <Typography variant="h3" component="h1" gutterBottom>
                    Submit samples
                </Typography>
                <SampleSubmissionForm />
            </Layout>
        </ThemeProvider>
    )
};

export default Home;