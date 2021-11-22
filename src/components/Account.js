import React,{useEffect} from "react";
import Header from "../ReuseableComponent/Header";
import {  useSelector,useDispatch } from 'react-redux'
import { startUserAccount } from "../Actions/userAction";

const Account = (props) => {
    const dispatch = useDispatch()
    
    const users = useSelector((state) => {
      return  state.users
    })

    useEffect(()=>{
     dispatch(startUserAccount())   
    }, [])
    
    return (
        <div>
            <Header type='h1' text='User Details' />
            <h4>UserName:{users.data[0]?.username}</h4> 
            <h4>Email:{users.data[0]?.email }</h4>
        </div>
    )
}
export default Account