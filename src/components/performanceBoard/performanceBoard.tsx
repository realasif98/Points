import { Component, ReactNode } from 'react';
import Navbar from '../Navbar/navbar';
import './performanceBoard.css';

class Performance extends Component {

    selectedUserName: string;
    constructor(props: any) {
        super(props);
        this.selectedUserName = props.selectedUser ?? "Performance";
    }

    render(): ReactNode {
        return (
            <div className='mainContainerPer'>
                <Navbar title={this.selectedUserName} isVisible={false} handleEvent=""/>
                <div className="childContainer">
                </div>
            </div>
        )
    }
}

export default Performance;