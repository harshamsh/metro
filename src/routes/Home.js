import { Button } from '@mui/material';
import React from 'react'
import { Link} from 'react-router-dom';
import Header from '../components/Header';
function Home() {
  return (
    
    <div>
        <div className='header'>
        <Header/>
        </div>
        <div className='content'style={{margin:50}}>
        <div style={{}}>
            <h1>
                Metro Conultancy Services
            </h1>
            <h4>
              MCS is a group of no-settle experts specialising in staffing clients 
              who are on the forefront of modern technology and creative
            </h4>
            <p>
                Every corporate front line staffing is the key to display the best of their business' services.
                Our professional staff stands at the center of employee recruitment, benefits managenment and more.<br/> At our full-range Metro Consultancy services, our exclusve focus is assiting our corporate partners in finding the most experienced, resourceful and productive talent available.
            </p>
            <h1>
                For Our Clients, We Take Hiring Personal
            </h1>
            <div style={{display:'flex'}}>
            <div style={{flexDirection:'row', marginLeft:'auto',marginRight:'auto'}}>
           
                 <Button component={Link} to="/company" style={{margin:10,borderColor:'#540B0D',color:'white',backgroundColor:'#540B0D'}}>
                    Get Staff
                  </Button>
                  
                  <Button component={Link} to="/staff" style={{margin:10,borderColor:'#540B0D',color:'#540B0D'}}>
                    Get Hired
                  </Button>
                        
                    
                
                    
                        
                    
            </div>
            </div>
        </div>
        {/* <img style={{width:'65%',height:'auto'}}src={require('../assets/home1.jpg')} /> */}
        </div>
       
    </div>
    
    
  )
}

export default Home