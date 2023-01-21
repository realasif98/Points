import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { Component } from 'react';
import { DevPerformanceService } from '../../services/DevPerformance.services';
import Navbar from '../Navbar/navbar';
import './developerBoard.css';


class DeveloperBoard extends Component<{ name: string[] }, any>{
    devPObject : DevPerformanceService;

    constructor(props: { name: string[] }) {
        super(props);
        this.state = {
            developerNames : props.name
        } 
        this.devPObject = DevPerformanceService.getInstance();
    }

    passDeveloperName(name: string){
        this.devPObject.subject.next(name);
    }

    getDataFromChild = (name?: string) => {
        alert(name);
    }

    render() {
        return (
            <div className='mainContainerDev'>
                <Navbar title="DevBoard" isVisible={true}  handleEvent={this.getDataFromChild} />
                <div className="childContainer">
                    <div className="headingSection">
                        <TextField key="team" select id="outlined-basic" label="Select Team" variant="outlined" defaultValue="GAP ADMIN" sx={{ width: '220px' }} >
                        <MenuItem key="admin" value="GAP ADMIN">GAP ADMIN</MenuItem>
                        <MenuItem key="endUser" value="GAP END USER">GAP END USER</MenuItem>
                        <MenuItem key="baraccuda" value="GAP BARACCUDA">GAP BARACCUDA</MenuItem>
                        </TextField>
                    </div>
                    <div className='contentSection'>
                        {this.state.developerNames.map((val: string) => (
                            <Button key={val} onClick={() => this.passDeveloperName(val)} variant="contained" sx={{ width: '220px', fontSize: '16px', fontWeight: '600', fontFamily: 'Segoe UI' }}>
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