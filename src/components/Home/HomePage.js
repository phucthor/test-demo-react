import videoHomepage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';
const HomePage = (props) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const account = useSelector(state => state.user.account);
  // console.log('>>> check isAuthenticated: ', isAuthenticated);
  // console.log('>>> check account: ', account);
  return (
    <div className="homepage-container">
        <video autoPlay muted loop> 
        <source src={videoHomepage}/>
        </video>
        <div className="homepage-content">
            <div className='title-1'>Get to know your customers with forms worth filling out</div>
            <div className='title-2'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</div>
            <div className='title-3'>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default HomePage;