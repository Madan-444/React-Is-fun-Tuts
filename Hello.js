import React from 'react'


// function Hello(){
//     return <h1>Hello Madan Rijal magar</h1>
// }
const Hello = props => {
  // console.log(props)

  return (
    <div>
      <h1>
        hello {props.name} also known as {props.heroName}
      </h1>
      {props.children}
    </div>
  );

}

export default Hello;