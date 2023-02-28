import { useRef,useState } from "react";
import style from "../css/TypeLogin.module.css";
import {useNavigate} from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';


const Login = (props) => {
  console.log("props",props)
  const userRef = useRef(null)
  const passwordRef =useRef(null)
  const navigate = useNavigate();
  const login = useGoogleLogin({
  onSuccess: (tokenResponse) => {
	  try { 
	  fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
		  headers:{
			  "Authorization":`Bearer ${tokenResponse.access_token}`
		  },
		  method : 'GET'
	  }).then((data)=>{
		  console.log(data)
	  }
	  )
	  }
	  catch (err){
		  console.log("error occured",err)
	  }
	  }
})
  
  const customSignInHandler = (event)=>{
		console.log("custom sign in handler fired")
        event.preventDefault();
        let username = event.target.username.value
        let password = event.target.password.value
        console.log("value of the form is ",username);
        console.log("value of the password is ",password);
        userRef.current.value=""
        passwordRef.current.value=""
        fetch("http://localhost:8000/api/auth/user", {
        body: new URLSearchParams({
            grant_type: 'password',
            username:username,
            password:password  
        }),
        method: "POST"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
        console.log(JSON.stringify(data))
        document.cookie=`access-token=${data.access_token};  SameSite=None; path='/';`;
        document.cookie=`refresh-token=${data.refresh_token}; SameSite=None; path='/';`;
		document.cookie=`username=${data.username}; SameSite=None; path='/';`;
        if(data.access_token)
        {
          console.log("access token is not null")
		  props.setCurUser(data.username)
          navigate('/')
        }
    })
  }
  
  return (
    <div className={style.Login}>
      <div className={style.heading}>
        <div className={style.title}>login</div>
        <div className={style.forgotpassword}>forgot password?</div>
      </div>
      <form className={style["login-form"]} onSubmit={customSignInHandler}>
        <input type="text" name="username" id="" placeholder="username" ref={userRef}/>
        <input type="password" name="password" id="" placeholder="password" ref={passwordRef} />
        <button  type = "submit" className={style["button"]}>
            <i className="fa fa-sign-in fa-1x"></i>
            <span className={style["button-text"]}>Sign In</span>
        </button>
        <p className={style.orholder}>or</p>
        <button type="button" className={style["button"]} onClick={() => login()}>
            <i className="fa fa-google fa-1x"></i>
            <span className={style["button-text"]}>Google Sign In</span>
        </button>
      </form>
    </div>
  );
};
const Signup = (props) => {
  const userRegRef = useRef(null)
  const emailRef = useRef(null)
  const email1Ref = useRef(null)
  const passwordRegRef = useRef(null)
  const passwordReg1Ref = useRef(null)
  const [isPasswordWrong,setIsPasswordWrong] = useState(false)
  const [isEmailWrong,setIsEmailWrong] = useState(false)
  console.log("inside the signup component")
  const navigate = useNavigate();
  const customRegisterHandler = (event)=>{
        event.preventDefault();
		console.log("this is a signup page and we have just clicked the button")
        let username = event.target.username.value
        let password = event.target.password.value
		let password1 = event.target.password1.value
		let email = event.target.email.value
		let email1 = event.target.email1.value
		if(password !== password1 )
		{
			setIsPasswordWrong(true)
		}
		if(email !== email1 )
		{
			setIsEmailWrong(true)
		}
        console.log("value of the form is ",username);
        console.log("value of the password is ",password);
        userRegRef.current.value=""
        emailRef.current.value=""
		email1Ref.current.value=""
		passwordRegRef.current.value=""
		passwordReg1Ref.current.value=""
		if(!isPasswordWrong && !isEmailWrong && username.length > 3 && password.length  >6 ){
			       fetch("http://localhost:8000/api/register/user", {
        body: new URLSearchParams({
            grant_type: 'password',
            username:username,
            password:password,
			email:email
        }),
        method: "POST"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
        console.log(JSON.stringify(data))
        document.cookie=`access-token=${data.access_token};  SameSite=None; path='/';`;
        document.cookie=`refresh-token=${data.refresh_token}; SameSite=None; path='/';`;
		document.cookie=`username=${data.username}; SameSite=None; path='/';`;
        if(data.access_token)
        {
          console.log("access token is not null")
		  props.setCurUser(data.username)
          navigate('/')
        }
    })
		}

  }
  return (
    <div className={style.Login}>
      <div className={style.heading}>
        <div className={style.title}>register</div>
      </div>
      <form className={style["login-form"]} onSubmit={customRegisterHandler}>
        <input type="text" name="username" id=""  placeholder="username" ref={userRegRef}/>
        <input type="email" name="email" id="" placeholder="email" ref={emailRef} />
        <input type="email" name="email1" id="" placeholder="verify email" ref={email1Ref}/>
        <input type="password" name="password" id="" placeholder="password" ref={passwordRegRef} />
        <input type="password" name="password1" id="" placeholder="verify password" ref={passwordReg1Ref}/>
        <button className={style["button"]}>
            <i className="fa fa-user-plus fa-1x"></i>
            <span className={style["button-text"]}>Sign Up</span>
        </button>
      </form>
    </div>
  );
};
export default function TypeLogin(props) {
  return (
    <div className={style["Login-container"]}>
      <Signup setCurUser={props.setCurUser} />
      <Login setCurUser={props.setCurUser}/>
    </div>
  );
}
