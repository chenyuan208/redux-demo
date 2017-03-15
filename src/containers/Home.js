/**
 * Created by chen on 2017/3/14.
 */
import React from 'react'
import { Layout,message  } from 'antd';
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import Navbar from '../components/Navbar'
import AgzHeader from '../components/AgzHeader'

const { Header, Footer, Sider, Content } = Layout;

class Home extends React.Component{
    componentDidMount(){
        const {user} = this.props
        if(user && user.uid){

        } else{
            message.error('请登录')
            browserHistory.push('/');
        }
    }
    render(){
        const {children} = this.props
        return (
            <div>
                <Layout>
                    <Sider><Navbar/></Sider>
                    <Layout>
                        <Header><AgzHeader/></Header>
                        <Content><div className="agz-content">{children}</div></Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        user:state.user
    }
})(Home)