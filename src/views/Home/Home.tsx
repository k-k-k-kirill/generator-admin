import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";

//Components
import Layout from '../../components/Layout/Layout';
import SampleSubmissionForm from '../../components/SampleSubmissionForm/SampleSubmissionForm';
import MainTitle from '../../components/MainTitle/MainTitle';

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
                <MainTitle label="Submit new sample" />
                <SampleSubmissionForm />
            </Layout>
        </ThemeProvider>
    )
};

export default Home;