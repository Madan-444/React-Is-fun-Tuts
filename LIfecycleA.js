import React, { Component } from 'react'
import LIfecycleB from './LIfecycleB'
 class LIfecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Madan Rijal Magar'
         }
         console.log('LifecycleA constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('This is componentDodMount')
     }
     shouldComponentUpdate(){
         console.log('Lifecycle A shouldComponnetUpdaate')
         return true;
     }
     getSnapshotBeforeUpdate(preProps,preState){
         console.log('Lifecycle A get snapshotbeforUpdate')
         return null
     }
     componentDidUpdate(){
         console.log('Coponent A DidUpdate')
     }
     changeState = ()=>{
         this.setState({
             name:'Codevolution'
         })
     }
     
    render() {
        console.log('Lifecycle render')

        return (
            <div>
           <div>LifecycleA </div> 
           <LIfecycleB />
           <button onClick={this.changeState}>Change State</button>
                 
            </div>
        )
    }
}

export default LIfecycleA
