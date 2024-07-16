import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const palleteType = darkMode ? 'dark' : 'light';

    const theme = createTheme({
        palette: {
            mode: palleteType,
            background: {
                default: (palleteType === 'light') ? '#eaeaea' : '#121212'
            }
        }
    })

    function handleThemeChange() {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Container>
                <Routes>
                    <Route path='/' Component={HomePage}/> // exact matching in v6
                    <Route path='/catalog' Component={Catalog}/> // exact matching in v6
                    <Route path='/catalog/:id' Component={ProductDetails}/>
                    <Route path='/about' Component={AboutPage}/>
                    <Route path='/contact' Component={ContactPage}/>
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App