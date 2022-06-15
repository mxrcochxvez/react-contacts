import RegisterForm from './RegisterForm';

const RegisterPage = (props) => {
    return (
        <div style={{ textAlign: "center", margin: "2rem" }}>
            <RegisterForm />
            <div>
                <p>Already have an account? <a href="/login">Login</a>.</p>
            </div>
        </div>
    )
}

export default RegisterPage;