import React,{ Component } from 'react';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    emailEnter = (e) => {
        this.setState({email: e.target.value})
    }

    nameEnter = (e) => {
        this.setState({name: e.target.value})
    }

    passwordEnter = (e) => {
        this.setState({password: e.target.value})
    }

    onsubmit = () => {
        fetch("http://localhost:3000/register", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home')
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br2 ba dark-grey b--black-10 mv4 w-100 w-50-m  w-25-l center shadow-4">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="name" onChange={this.nameEnter} id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" onChange={this.emailEnter} id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" onChange={this.passwordEnter} id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.onsubmit}/>
                        </div>
                        <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db" onClick={() => onRouteChange('signin')}>Sign In</a>
                        </div>
                    </div>
                </main>
            </article>
    
        )
    }
}

export default Register;