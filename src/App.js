import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
// import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';
// import SignIn from './components/SignIn/SignIn';
// import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: '2c573e943eb04e0b9d075064f2dcc2e5'
});

const particlePorp = {
  particles: {
     number:{
       value: 50,
       density: {
         enable: true,
         value_area: 300
       }
     }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imgSrc: '',
      box: {},
      displayB: 'none',
      route: 'home',
      isSignedIn : false,
      // user: {
      //   id: '',
      //   name: '',
      //   email: '',
      //   entries: 0,
      //   join: new Date()
      // }
    }
  }

  calculateFaceLocation = (data) => {
    const Img = document.getElementById('inputImg');
    const width = Number(Img.width);
    const height = Number(Img.height);
    let dataArray = [];
    for(let i = 0;i < data.outputs[0].data.regions.length;i++){
      const clarifaiImg = data.outputs[0].data.regions[i].region_info.bounding_box;
      dataArray.push({
        leftCol: clarifaiImg.left_col * width,
        topRow: clarifaiImg.top_row * height,
        rightCol: width - (clarifaiImg.right_col * width),
        bottomRow: height - (clarifaiImg.bottom_row * height)
      })
    }
    return dataArray;
  }

  detectFace = (box) => {
    this.setState({ box: box, displayB: 'inline-block' });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onRouteChange  = (route) => {
    if(route === 'home'){
      this.setState({isSignedIn: true})
    }else if(route === 'signin') {
      this.setState({isSignedIn: false, input: '', imgSrc: ''})
    } else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
    // this.setState({user: {
    //   id: data.id,
    //   name: data.name,
    //   email: data.email,
    //   entries: data.entries,
    //   join: data.join
    // }})
  }

  onFormSubmit = () => {
    this.setState({ displayB: 'none'});
    this.setState({ imgSrc: this.state.input });
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => {
      if (response) {
        // fetch('http://localhost:3000/image', {
        //   method: 'put',
        //   headers: {'Content-Type': 'application/json'},
        //   body: JSON.stringify({
        //     id: this.state.user.id
        //   })
        // })
        // .then(res => res.json())
        // .then(count => {
        //   this.setState(Object.assign(this.state.user, {entries: count}))
        // })
      }
      this.detectFace(this.calculateFaceLocation(response));
      
    })
    .catch(err => console.err0r(err));
  }

  render() {
    return (
      <div className="App">
      <Particles params={particlePorp} className="particle"/>
        {/* <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/> */}
        {
          // this.state.route === 'signin' 
          // ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          // : this.state.route === 'register' 
          // ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
          // : <div>
            <div>
              <Logo />
              {/* <Rank name={this.state.user.name} rank={this.state.user.entries}/> */}
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} />
              <Facerecognition box={this.state.box} imgsrc={this.state.imgSrc} displayB={this.state.displayB}/>
            </div>
        }
      </div>
      )
    }
}

export default App;
