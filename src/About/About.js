import React from 'react';
import a from './About.module.css'


class RCard extends React.Component{
    render(){
        return (
            <div class={a.flipcard}>
  <div class={a.flipcardinner}>
    <div class={a.flipcardfront}>
      <img src="./avatar.png" alt="Avatar"  />
    </div>
    <div class={a.flipcardback}>
        <h2>{this.props.name}</h2> 
      <hr className={a.hr} />
      <p>Front-End Developer</p> 
      <p>HTML/CSS , Bootstrap</p>
        <p>{this.props.scill}</p>
      <p>Angular , React-Redux</p>
         
      
    </div>
  </div>
</div>
        )
    }
}


  class About extends React.Component{
    render(){
        return (
            <div className={a.about}>
                <h2 className={a.h2}>About</h2>
                <div className={a.parent}>

                
           <RCard name="Karen Ghazaryan" scill="JS,Jquery" />
           <RCard name="Davit Virabyan" scill="JavaScript" />
           </div>
            </div>

        );
    }
}

  export default About;