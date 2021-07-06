import React from 'react'
import{ Grid} from '@material-ui/core'

const SearchBar = () => {
    return (
        <Grid container item sm={11} spacing={2}>
         <Grid item   xs={12} lg={4}>
         <input type="text" style={{
             width:'100%',
             padding:'6px 12px',
             height:'38px',
             fontSize:'18px',
             borderRadius:'4px'
             
             
             
             }}></input>
         </Grid>
         <Grid item   xs={12} lg={6}>
         <select style={{
             padding:'0.5rem',
             fontSize:'18px ',
             margin:' 0 0.3rem'
             
             }}>
             <option value="Difficulty">Difficulty</option>
             <option value='hard'>Hard</option>
             <option value='medium'>medium</option>
         </select>
         <select style={{
             padding:'0.5rem',
             fontSize:'18px',
             margin:' 0 0.3rem'
             
             }}>
             <option value="Difficulty">Tag</option>
             <option value='hard'>Hard</option>
             <option value='medium'>medium</option>
         </select>
         <select style={{
             padding:'0.5rem',
             fontSize:'18px',
             margin:' 0 0.3rem'
             
             }}>
             <option value="Difficulty">Type</option>
             <option value='hard'>Hard</option>
             <option value='medium'>medium</option>
         </select>
         </Grid>
        </Grid>
            
        
    )
}

export default SearchBar
