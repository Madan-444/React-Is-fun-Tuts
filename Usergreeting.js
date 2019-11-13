import React, { Component } from 'react'

 class Usergreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:false
         }
     }
     
    render() {
        // *********** Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Madan</div>

        // ********Ternary conditional operator
        return this.state.isLoggedIn ?(
        <div>Welcome Programmer</div>) : (
        <div> Welcome guest</div>)

        // *********Element variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome MD</div>
        // }
        // else{
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>
        // ****** Simple if/Else statement in the react
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // else{
        //     return <div>Welcome Madan Rijal Magar</div>
        // }
        // return (
        //     <div>
        //       <div>Welcome Madan</div>
        //       <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default Usergreeting
