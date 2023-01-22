import { Box, Tab, Tabs, Typography } from '@mui/material';
import { color } from '@mui/system';
import React from 'react';
import { Component, ReactNode } from 'react';
import { DevPerformanceService } from '../../services/DevPerformance.services';
import ListBox from '../ListBox/ListBox';
import Navbar from '../Navbar/navbar';
import './performanceBoard.css';

interface PerformanceProps {
    selectedUser?: string
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

class Performance extends Component<PerformanceProps, any> {
    devPObject: DevPerformanceService;
    navBarRef: any;

    constructor(props: PerformanceProps) {
        super(props);
        this.state = {
            selectedDevName: props.selectedUser ?? "Performance : Selected Developer",
            value: 0
        }
        this.devPObject = DevPerformanceService.getInstance();
        this.navBarRef = React.createRef();

    }

    componentDidMount(): void {
        console.log("Componenet Mounted");
        this.devPObject.subject.subscribe((data) => {
            if (data !== "") {
                data = "Performance : " + data;
                this.navBarRef.current.changeNavTitle(data);
            }
        });
    }

    componentWillUnmount(): void {
        console.log("Componenet UnMounted")
        // this.devPObject.clearSubscription();
    }

    handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        this.setState({ value: newValue });
    }

    handleChange = (event: React.SyntheticEvent, newValue: number) => {
        this.setState({ value: newValue });
    };

    TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div 
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other} 
                style={{width:"100%"}}
            >
                {value === index && (
                    children
                )}
            </div>
        );
    }

    a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    render(): ReactNode {
        return (
            <div className='mainContainerPer'>
                <Navbar ref={this.navBarRef} title={this.state.selectedDevName} isVisible={false} handleEvent="" />
                <div className="childContainerPer">
                <Tabs
                        value={this.state.value}
                        variant="fullWidth"
                        onChange={this.handleTabChange}
                        sx={{ color: "#4e9ae6" }}
                        aria-label="secondary tabs example"
                    >
                        <Tab  label={(<span className='labelStyle'>Completed Tasks</span>)} />
                        <Tab  label={(<span className='labelStyle'>Most Rated Tasks</span>)} />
                    </Tabs>

                    <this.TabPanel value={this.state.value} index={0}>
                       <div className="listItems">
                        <ListBox/>
                        <ListBox/>
                        <ListBox/> 
                       </div>
                    </this.TabPanel>
                    <this.TabPanel value={this.state.value} index={1}>
                    <div className="listItems">
                        <ListBox/>
                       </div>
                    </this.TabPanel> 
                </div> 
            </div>
        )
    }
}

export default Performance;