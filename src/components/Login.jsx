import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Login(props){
    const history=useHistory();
    var [registerInfo, setRegisterInfo] = useState({
        usrName:"",
        password:"",
        name:"",
        lname:"",
    });
    var[errorMsg, setErrorMsg] = useState("");

    function handleUpdate(e){
        const {value, name} = e.target;
        setRegisterInfo((prevValue)=>{
            if(name==="Username"){
                return{
                    ...prevValue,
                    usrName:value,
                };
            } else {
                return {
                    ...prevValue,
                    password:value,
                };
            }
        });
    }

    /*function logIn() {
        return <Redirect to="/Mainpage" />
    }*/

    function processLogin(e){
        e.preventDefault();
        var usrName = registerInfo.usrName;
        var usrPass = registerInfo.password;
        /*
        axios.get("/login/"+usrName+"/"+usrPass).then((res)=>{
            var data=res.data;
            console.log(data);
            if(!data.hasOwnProperty("error")){
                registerInfo.name = data.name;
                registerInfo.lname = data.lname;
                props.handler(registerInfo);
            } else {
                setErrorMsg(data.message);
            }
        }).catch((err=>{
            console.error(err.error)
        }));
        */
        console.log("Calling axios...")
        axios
        .post("/login", {user:usrName, pass:usrPass})
        .then((res)=> {
            var data=res.data;
            console.log(data);
            if(!data.hasOwnProperty("error")){
                console.log("Success");
                registerInfo.name = data.name;
                registerInfo.lname = data.lname;
                //props.handler(registerInfo);
                //logIn();
                history.push("/Mainpage");
            } else {
                setErrorMsg(data.message);
            }
        })
        .catch((err)=>{
            console.error(err.message)
        });
    }

    return (
        <form>
            <input
                name= "Username"
                type="text"
                placeholder="Username"
                onChange={handleUpdate}
            />
            <input
                name="Password"
                type="password"
                placeholder="Password"
                onChange={handleUpdate}
            />
            <button
                type="submit"
                onClick={processLogin}
            >
                Log In
            </button>
            <p>Welcome Back!</p>
            {errorMsg}
        </form>
    );
}

export default Login;