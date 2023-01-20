import { Button, TextField } from '@mui/material';
import { Component } from 'react';
import Navbar from '../Navbar/navbar';
import './developerBoard.css';

class DeveloperBoard extends Component<{ name: string[] }, any>{


    constructor(props: { name: string[] }) {
        super(props);

        this.state ={

            userNames : props.name

        }
    }

    render() {
        return (
            <div className='mainContainerDev'>
                <Navbar />
                <div className="childContainer">
                    <div className="headingSection">
                        <TextField select id="outlined-basic" label="Select Team" variant="outlined" sx={{ width: '220px' }} />
                    </div>
                    <div className='contentSection'>
                        {this.state.userNames.map((val: string) => (
                            <Button variant="contained" sx={{ width: '220px', fontSize: '16px', fontWeight: '600', fontFamily: 'Segoe UI' }}>
                                {val}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DeveloperBoard;