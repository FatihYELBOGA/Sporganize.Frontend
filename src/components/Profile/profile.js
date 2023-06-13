import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Grid, Avatar, IconButton } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Layout from '../Sidebar/Layout';
import Sidebar from '../Sidebar/Sidebar';

// Here we are simulating provinces, districts and streets data
const addressData = {
  "İstanbul": {
    "Kadıköy": ["Acıbadem", "Moda", "Erenköy"],
    "Beşiktaş": ["Levent", "Etiler", "Ortaköy"],
  },
  "Ankara": {
    "Çankaya": ["Kızılay", "Dikmen", "Ayrancı"],
    "Mamak": ["Altındağ", "Demetevler", "Başak"],
  }
};

const Profile = (props) => {

  // Initial values
  const initialValues = {
    avatar: '',
    firstName: '',
    lastName: '',
    username: '',
    birthdate: null,
    email: '',
    phone: '',
    province: '',
    district: '',
    street: '',
  };

  // Handle form submission
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Layout setUserId={props.setUserId} setRole={props.setRole}>
      <Sidebar />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>

              {/* Avatar section */}
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar src={values.avatar} alt="Profile photo" />
                  </Grid>
                  <Grid item>
                    <IconButton color="primary" component="label">
                      <input
                        type="file"
                        hidden
                        onChange={(e) => {
                          setFieldValue("avatar", e.target.files[0]);
                          // Here we are assuming you are storing the image as a local URL
                          setFieldValue("avatar", URL.createObjectURL(e.target.files[0]));
                        }}
                      />
                      <PhotoCamera />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              {/* Name section */}
              <Grid item xs={6}>
                <Field name="firstName" as={TextField} label="First Name" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Field name="lastName" as={TextField} label="Last Name" fullWidth />
              </Grid>

              {/* Username and Birthdate section */}
              <Grid item xs={6}>
                <Field name="username" as={TextField} label="Username" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Birthdate"
                    value={values.birthdate}
                    onChange={(value) => {
                      setFieldValue("birthdate", value);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Email and Phone section */}
              <Grid item xs={6}>
                <Field name="email" as={TextField} label="Email" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Field name="phone" as={TextField} label="Phone Number" fullWidth />
              </Grid>

              {/* Address section */}
              <Grid item xs={4}>
                <Field
                  name="province"
                  as={TextField}
                  label="Select Province"
                  select
                  fullWidth
                  SelectProps={{ native: true }}
                >
                  {Object.keys(addressData).map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="district"
                  as={TextField}
                  label="Select District"
                  select
                  fullWidth
                  SelectProps={{ native: true }}
                >
                  {values.province && Object.keys(addressData[values.province]).map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="street"
                  as={TextField}
                  label="Select Street"
                  select
                  fullWidth
                  SelectProps={{ native: true }}
                >
                  {values.district && addressData[values.province][values.district].map((street) => (
                    <option key={street} value={street}>{street}</option>
                  ))}
                </Field>
              </Grid>

              {/* Submit button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Profile;
