import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import './NotFound.scss';

const NotFound = () => {

    return (
        <div className='not-found'>
            <div className="not-found__content">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Button onClick={() => { window.location.href = '/' }} variant="primary">
                    Return to Home
                </Button>
            </div>
        </div>
    );
}

export default NotFound;