import React from 'react'
import './App.css';


    class App extends React.Component {
      constructor() {
        super();
        this.state = {show: "false",
                      time: 0 ,

      };
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);  // doesn't work
      }
    
      tick() {
        this.setState({
          time: this.state.time + 1 
        });
      }

      toggleShow = () => {
        this.setState({show: !this.state.show});
      }      
      

      render() {
        let shown ;
      if (this.state.show){
        shown = (<div >
        <h2>Amine Medjdoub</h2>
        <p>full stack develloper</p>
        <img src='myimage.jpeg' alt='profile image' />
      </div>);
        }
      else {
        shown = (<div></div>);
      }
      return (
            <div className="my_bucket">
              <p>the component was mounted since : {this.state.time} s</p>
            <button onClick={this.toggleShow} >Show/hide</button>
            {shown}
            </div>
    
      )
        
        
        
      }
    }
  

export default App;
