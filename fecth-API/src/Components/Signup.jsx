import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (username.length < 3 || username.includes(" ")) {
            alert("Username must be at least 3 characters and cannot contain spaces");
            return;
        }

        if (password.length < 8){
            alert("Password must be at least 8 characters")
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        navigate("/login");
    };

    return (

        <div className="form">
            <h2>Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br /><br />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp;