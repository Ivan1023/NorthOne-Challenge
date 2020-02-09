import React from 'react'

export default class Board extends React.Component {
    
    drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block'

        e.target.appendChild(card)
    }

    dragOver = e => {
        e.preventDefault();
    }

    render (){
        return (
            <div 
            id={this.props.id} 
            className={this.props.className} 
            onDrop={this.drop}
            onDragOver={this.dragOver}>
                {this.props.children}
            </div>
        )
    }
}
