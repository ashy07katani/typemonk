import style from "../css/TypeLogin.module.css";
const Login = () => {
  return (
    <div className={style.Login}>
      <div className={style.heading}>
        <div className={style.title}>login</div>
        <div className={style.forgotpassword}>forgot password?</div>
      </div>
      <form className={style["login-form"]}>
        <input type="email" name="" id="" placeholder="email" />
        <input type="password" name="" id="" placeholder="password" />
        <div className={style["button"]}>
            <i className="fa fa-sign-in fa-1x"></i>
            <span>Sign In</span>
        </div>
        <p>or</p>
        <div className={style["button"]}>
            <i className="fa fa-google fa-1x"></i>
            <span>Google Sign In</span>
        </div>
      </form>
    </div>
  );
};
const Signup = () => {
  return (
    <div className={style.Login}>
      <div className={style.heading}>
        <div className={style.title}>register</div>
      </div>
      <form className={style["login-form"]}>
        <input type="text" name="" id=""  placeholder="username"/>
        <input type="email" name="" id="" placeholder="email" />
        <input type="email" name="" id="" placeholder="verify email" />
        <input type="password" name="" id="" placeholder="password" />
        <input type="password" name="" id="" placeholder="verify password" />
        <div className={style["button"]}>
            <i className="fa fa-user-plus fa-1x"></i>
            <span>Sign In</span>
        </div>
      </form>
    </div>
  );
};
export default function TypeLogin(props) {
  return (
    <div className={style["Login-container"]}>
      <Signup />
      <Login />
    </div>
  );
}
