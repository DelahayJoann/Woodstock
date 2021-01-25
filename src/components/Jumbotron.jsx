import logojumbo from '../images/woodstock-full.png';
import NavBar from './NavBar';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <NavBar/>
            <div className="container welcome">
                <img src={logojumbo} alt=""/>
            </div>
        </div>
    )
}
export default Jumbotron;