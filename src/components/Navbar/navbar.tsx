import { Button } from '@mui/material';
import { Component } from 'react'
import { DevPerformanceService } from '../../services/DevPerformance.services';
import './navbar.css'

interface NavBarProps {
    title: string,
    isVisible: boolean;
    handleEvent: any
}

class Navbar extends Component<NavBarProps, any>{  
    devPObject : DevPerformanceService;

    constructor(props: NavBarProps) {
        super(props);
        this.state = {
            navTitle: props.title,
            isVisible: props.isVisible
        }
        this.devPObject = DevPerformanceService.getInstance();
    }
     
    changeNavTitle(newName: string) {
        this.setState({ navTitle: newName, isVisible: false });
    }

    sendDatatoParent = () => {
        this.props.handleEvent("Hi from child!");
    }

    renderButton(isVisible: boolean) {
        let element : any = null;
        if (isVisible) {
            element = <Button onClick={() => this.sendDatatoParent()}
                sx={{
                    color: 'white', width: '220px', fontSize: '16px', fontWeight: '600',
                    fontFamily: 'Segoe UI'
                }}> Get Data </Button>
        }
        return element;
    }

     

    render() {
        return (
            <div className="navbar">
                <div className="nameSection">
                    {this.state.navTitle}
                    {this.renderButton(this.state.isVisible)}
                </div>
            </div>
        )
    }
}

export default Navbar;
