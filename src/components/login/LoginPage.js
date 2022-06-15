import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <div style={{ textAlign: "center", margin: "2rem" }}>
            <h1>Login</h1>
            <LoginForm />
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div>
        </div>
    )
}

export default LoginPage;