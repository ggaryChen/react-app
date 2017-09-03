import React , {Component} from 'react';
import {Link} from 'react-router-dom';
class Index extends Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <Link to='/list'>list</Link>
            </div>
        );
    }
}
export default Index;
