import React from 'react'

export default class Card extends React.Component {

    dragStart = e => {
        const target = e.target;
         e.dataTransfer.setData('card_id', target.id);

         setTimeout(() => {
            target.style.display = "none"
         }, 0);
    }

    dragOver = e => {
        e.stopPropagation();
    }

    render () {
        return (
            <div
            id={this.props.id}
            className={this.props.className}
            draggable={this.props.draggable}
            onDragStart={this.dragStart}
            onDragOver={this.dragOver}>
                {this.props.children}
            </div>
        )
    }
}
    
