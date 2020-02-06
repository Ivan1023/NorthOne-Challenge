import React from 'react';
import '../Task/Task.scss'
import kabab from '../../assets/Icons/Icon-kebab-default.svg'

class Task extends React.Component {
    container = React.createRef();
    state = {
        open: false,
    };

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
            <div>
                <p>Task List</p>
                <p>{items.title}</p>
                <p>{items.description}</p>
                <div ref={this.container}>
                <img src={kabab} onClick={this.handleButtonClick} alt="3 dots"  />
                {this.state.open && (
                <div>
                    <button onClick={() => this.props.updateItem(items.key)} >Edit</button>
                    <button onClick={() => this.props.deleteItem(items.key)}>Remove</button>
                </div>
                )}
            </div>
            </div>
        )
    }
}

export default Task;