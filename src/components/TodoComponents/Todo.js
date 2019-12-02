import React from 'react';

const Item = props => {
    return (
        <div className="flex-center">
            <span className={`task${props.task.completed ? ' completed' : ''}`} onClick={() => props.toggleCompleted(props.task.id)}>{props.task.task}</span>
        </div>
    );
};

export default Item;
