/**
 * Created by chen on 2017/3/10.
 */
import { message } from 'antd'
import request from '../http/request'
import { browserHistory } from 'react-router'
import 'whatwg-fetch'
export const SET_USER = 'SET_USER'



export const setUser = (dispatch) => async (user) => {
    const result = await request('/runtime/business/auth/login', {
        method: 'POST',
        data: {
            type:'0',
            target:'/',
            ...user
        }
    })
    if (result.result.status === '0000') {
        dispatch({
            type: SET_USER,
            payload: Object.assign(user,{
                token: result.result.token,
                uid: result.result.uid,
                user
            })
        })
        message.success('登陆成功')
        browserHistory.push('/home')
    } else {
        message.error('密码错误，请重试')
    }
}

export const loadList = (dispatch)=> async (user) =>{
    if( user && user.uid){
        const result = await request('/v1.1/ide/1/base_component')
        if (!result.result.errorCode) {
            dispatch({
                type: 'LOAD_LIST',
                payload:{list:result.result}
            })
        } else {
            message.error('数据加载出错了')
        }
    } else{
        browserHistory.push('/')
    }
}

