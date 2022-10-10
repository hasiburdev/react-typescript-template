import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not Found!</h1>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}

export default NotFound;
