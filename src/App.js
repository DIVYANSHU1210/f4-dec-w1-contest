import React, { useState } from "react";

const Myform = ()=>{
    let [email, setEmail] = useState("");
    let [passWord, setPassword] = useState("");
    let [confPassword, setConfPassword] = useState("");

    // let emailInput = document.getElementById("email");

    return (
        <form 
            onSubmit={(e)=>{
            e.preventDefault();
            if(passWord.length < 8 || confPassword.length< 8 || confPassword !== passWord || !email.includes("@")){
                alert("can’t submit the form")
            }
            else{
                alert("submitted successfully")
            }
        }}>
            <label for="email">Email</label>
            <input id="email" 
            type="email" 
            value={email} 
            className={`input-field ${email.includes("@") ? "success":"failure"}`}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}></input>
            

            <label for="passWord">PassWord</label>
            <input id="passWord" 
            type="password" 
            value={passWord} 
            className={`input-field ${passWord.length >= 8 ? "success":"failure"}`}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}></input>


            <label for="confPassword">Confirm PassWord</label>
            <input id="confPassword" 
            type="password" 
            value={confPassword} 
            className={`input-field ${confPassword.length>=8 && confPassword === passWord ? "success":"failure"}`}
            onChange={(e)=>{
                setConfPassword(e.target.value)
                let conf = e.target.value;
                if(confPassword === passWord){
                    // border of input green
                }
                else{
                    // border red
                }
            }}></input>

            <button type="submit">submit</button>
        </form>
    )
}

export default Myform;