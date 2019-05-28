import React, {Component} from 'react';
import { connect } from 'react-redux';

class Notes extends Component {
    render() {
        console.log(this.props.items);
        return (
            <div>
                {this.props.items.map(item => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(Notes);
