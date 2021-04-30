import React from 'react'

import Header from './components/Header'
import NewHome from './components/HomeTable'
import Upper from './components/Upper'
import Grid from '@material-ui/core/Grid';
import HomeSide from './components/HomeSide'
const App = () => {
    return (<>
   <Grid item sm={12}>
        <Header />
        </Grid>
   
   <Grid container  direction='column' spacing='4' alignItems='center'>
        
        <Upper />
        <Grid  container item xs={11} spacing='4' style={{marginTop:'6rem'}} >
            <NewHome />
            <HomeSide />
        </Grid> 
    </Grid> 
    </>
    )
}

export default App
