/**
 * Created by sergiiivanchenko on 07/07/2017.
 */

import React,{Component} from 'react';
import { Link } from 'react-router';

class View2 extends Component{

    render(){

        return (
            <div className="well">
                <label className="alert alert-success">this is view2</label>
                <br/>
                <div className="btn-group">
                    <button className="btn btn-default"><Link to="/">Go back</Link></button>
                </div>
            </div>
        )
    }

}

export default View2;