import React from 'react';
import '../Task/Task.scss'
import kabab from '../../assets/Icons/Icon-kebab-default.svg'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class Task extends React.Component {
    container = React.createRef();
    state = {
        open: false,
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    }

    handleSelect = date => {
        this.setState({
            startDate:date
        });
    }

    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render (){
                
        const items = this.props.taskDetails
    
        return (
            <div className="task">
                <div>
                    <p className="task__title">{items.title}</p>
                    <p className="task__description">{items.description}</p>
                </div>
                <div ref={this.container} className="task__kabab">
                    <img src={kabab} onClick={this.handleButtonClick} alt="3 dots"  />
                    {this.state.open && (
                    <div className="task__dropdown">
                        <button onClick={() => this.props.updateItem(items.key)} >Edit</button>
                        <button onClick={() => this.props.deleteItem(items.key)}>Remove</button>
                    </div>
                    )}
                </div>
                <div className="task__due">
                    <DatePicker selected={this.state.startDate} onSelect={this.handleSelect} onchange={this.handleChange}/>
                    <select>
                        <option>OPEN</option>
                        <option>PENDING</option>
                        <option>IN PROGRESS</option>
                        <option>COMPLETED</option>
                        <option>CLOSED</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Task;