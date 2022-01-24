import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomeTextField'
const AddressForm = () => {
    const methods = useForm()
    return (
        <>
          <Typography variant='h5' gutterBottom>
              Shipping Address
              </Typography> 
              <FormProvider {...methods}>
                  <form onSubmit=''>
<Grid container spacing={3}>
<FormInput required name = 'firstName' label = 'First Name'/>
<FormInput required name = 'lastname' label = 'Last Name'/>
<FormInput required name = 'email' label = 'email'/>
<FormInput required name = 'address' label = 'address'/>
<FormInput required name = 'city' label = 'city'/>
<FormInput required name = 'zip' label = 'zip'/>
</Grid>
<br />
          <div style={{ display: 'flex', justifyContent:'space-between' , padding : '20px'  }}>
            <Button   component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button component={Link} variant="contained" color="primary" to="/review">Next</Button>
          </div>
                  </form>
                  </FormProvider> 
        </>
    )
}

export default AddressForm
