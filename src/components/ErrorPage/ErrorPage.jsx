import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
            <div className="flex flex-col justify-center">
                <h3>Go Back To Home</h3>
                {
                    error.statusText || error.message
                }

                {
                    error.status === 404 && <p>Go Home</p>
                }

            </div>
            <button onClick={handleGoHome} className="btn btn-primary">Go Home</button>


        </div>
    );
};

export default ErrorPage;