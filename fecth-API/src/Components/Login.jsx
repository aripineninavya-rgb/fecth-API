import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BalloonPop.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            navigate ("/game");
        } else {
            alert("Invalid username or password");
        }
    };

    return(
        <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
}
export default Login;