import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Longin from '../components/user'
import {setUser} from '../actions/actions'
class App extends  React.Component {
    render (){
        const {dispatch}  =  this.props
        return (
            <div className="login_container" id="components-form-demo-normal-login">
                <Longin loginHandle={setUser(dispatch)}/>
                <Link to ={{pathname:'/home'}}> Home</Link>
            </div>
        )
    }
}
export default connect()(App)
