import { Button } from '@mui/material';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { Component } from 'react'
import './navbar.css'


interface NavBarProps {
    title: string,
    isVisible: boolean;
    handleEvent: any
}


class Navbar extends Component<NavBarProps, any>{

    constructor(props: NavBarProps) {
        super(props);
        this.state = {
            navTitle: props.title,
            isVisible: props.isVisible
        }
    }

    changeNavTitle(newName: string) {
        // Callback function will call the parent class function from here
        // Here data flow from child to parent with the help of callback function
        this.setState({ navTitle: newName }) 
        // this.props.handleEvent(newName);
    }

    renderButton(isVisible: boolean) {
        if (isVisible) {
            return <Button onClick={() => this.changeNavTitle("Developer")}
                sx={{
                    color: 'white', width: '220px', fontSize: '16px', fontWeight: '600',
                    fontFamily: 'Segoe UI'
                }}> Change Title </Button>
        }
        return null;
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
