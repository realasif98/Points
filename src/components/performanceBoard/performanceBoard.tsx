import React from 'react';
import { Component, ReactNode } from 'react';
import { DevPerformanceService } from '../../services/DevPerformance.services';
import Navbar from '../Navbar/navbar';
import './performanceBoard.css';

interface PerformanceProps{
    selectedUser? : string
}

class Performance extends Component<PerformanceProps, any> {
    devPObject : DevPerformanceService;
    navBarRef : any;
    
    constructor(props: PerformanceProps) {
        super(props);  
        this.state = {
            selectedDevName : props.selectedUser ?? "Performance : Selected Developer"
        }
        this.devPObject = DevPerformanceService.getInstance();
        this.navBarRef=React.createRef();
        
    }

    componentDidMount(): void {
        console.log("Componenet Mounted"); 
        this.devPObject.subject.subscribe((data) => {
            if(data !== ""){
                data = "Performance : " + data;
                this.navBarRef.current.changeNavTitle(data);
            }
       });
    }

    componentWillUnmount(): void {
        console.log("Componenet UnMounted")
       // this.devPObject.clearSubscription();
    }

    render(): ReactNode {
        return (
            <div className='mainContainerPer'>
                <Navbar ref={this.navBarRef} title={this.state.selectedDevName} isVisible={false} handleEvent=""/>
                <div className="childContainer">
                </div>
            </div>
        )
    }
}

export default Performance;