import React, { Component } from 'react';
class Counter extends Component {
    // state = {  
    //     value : this.props.value,
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    styles = {
        fontSize: 50,
        fontWeight: "bold"

    };

    // handleIncrement = () => {
    //     this.setState({value: this.state.value+1});
    // };

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>;
    // };
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter) } 
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>
                <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    };
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
}


 
export default Counter;