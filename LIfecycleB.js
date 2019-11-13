import React, { Component } from 'react'
 class LIfecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Madan Rijal Magar'
         }
         console.log('LifecycleB constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleB getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('This is componentDodMountB')
     }
     shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponnetUpdaate')
        return true;
    }
    getSnapshotBeforeUpdate(preProps,preState){
        console.log('Lifecycle B get snapshotbeforUpdate')
       
        return (
            <div>
            This is not so dificult as you think
        </div>
        )
    }
    componentDidUpdate(){
        console.log('Coponent b DidUpdate')
    }
     
    render() {
        console.log('LifecycleB render')

        return (
            <div>
              LIfecycleB
                
            </div>
        )
    }
}

export default LIfecycleB
