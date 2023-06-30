import React, { useState, useEffect } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, Container, createTheme, ThemeProvider } from '@mui/material';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { green } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
        },
    },
});

function About() {
    const [facility, setFacility] = useState({
        name: '',
        sports: [],
        phone: '',
        province: '',
        district: '',
        street: '',
        hours: '',
        photo: null,
    });

    const handleChange = (event) => {
        setFacility({
            ...facility,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        setFacility({
            ...facility,
            photo: URL.createObjectURL(event.target.files[0]),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" style={{marginTop: "50px"}}>
                <form>
                    <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
                        {facility.photo && <img src={facility.photo} alt="facility" style={{maxWidth: "100%", maxHeight: "400px"}}/>}
                        <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                        <label htmlFor="icon-button-file">
                            <Button variant="contained" color="primary" component="span" startIcon={<PhotoCamera />}>
                                Fotoğraf Yükle
                            </Button>
                        </label>
                    </Box>

                    <Box mb={4}>
                        <TextField
                            name="name"
                            label="Tesis Adı"
                            value={facility.name}
                            onChange={handleChange}
                            fullWidth
                            color="primary"
                        />
                    </Box>

                    <Box mb={4}>
                        <FormControl fullWidth>
                            <InputLabel id="sports-label">Spor Faaliyetleri</InputLabel>
                            <Select
                                labelId="sports-label"
                                multiple
                                value={facility.sports}
                                onChange={handleChange}
                                name="sports"
                                renderValue={(selected) => selected.join(', ')}
                                color="primary"
                            >
                                <MenuItem value={"Football"}>Football</MenuItem>
                                <MenuItem value={"Basketball"}>Basketball</MenuItem>
                                <MenuItem value={"Tennis"}>Tennis</MenuItem>
                                <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box mb={4}>
                        <TextField
                            name="phone"
                            label="Telefon"
                            value={facility.phone}
                            onChange={handleChange}
                            fullWidth
                            color="primary"
                        />
                    </Box>

                    <Box mb={4}>
                        <TextField
                            name="province"
                            label="Province"
                            value={facility.province}
                            onChange={handleChange}
                            fullWidth
                            color="primary"
                        />
                    </Box>

                    <Box mb={4}>
                        <TextField
                            name="district"
                            label="District"
                            value={facility.district}
                            onChange={handleChange}
                            fullWidth
                            color="primary"
                        />
                    </Box>

                    <Box mb={4}>
                        <TextField
                            name="street"
                            label="Street"
                            value={facility.street}
                            onChange={handleChange}
                            fullWidth
                            color="primary"
                        />
                    </Box>

                    <Box mb={4}>
                        <TextField
                            name="hours"
                            label="Açılış - Kapanış Saatleri"
                            value={facility.hours}
                            onChange={handleChange}
                            fullWidth
                            color="primary"
                        />
                    </Box>

                    <Box display="flex" justifyContent="center" mb={6}>
                        <Button variant="contained" style={{backgroundColor: green[500], color: 'white'}}>
                            Bilgileri Kaydet
                        </Button>
                    </Box>
                </form>
            </Container>
        </ThemeProvider>
    );
}

export default About;
