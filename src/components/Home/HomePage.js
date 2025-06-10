import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
  return (
    <div className="homepage-container">
        <video autoPlay muted loop> 
        <source src={videoHomepage}/>
        </video>
    </div>
  );
}

export default HomePage;