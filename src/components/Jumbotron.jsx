import logojumbo from '../images/woodstock-full.png';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            {props.children}
            <div className="container welcome">
                <img src={logojumbo} alt=""/>
            </div>
        </div>
    )
}
export default Jumbotron;