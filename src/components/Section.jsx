const Section = (props) => {
    if(props.disposition === 'right'){
        return (
            <div className="container-fluid section">
                <div className="row">
                    <div className="col-sm alignimage">
                        <div className="text-center"><img className="img1" src={props.img} alt=""/></div>
                    </div>
                    <div className="col-sm text-left p-4">
                        <h2 className="about-title p-3">{props.title}</h2>
                        <p className="about-text pt-3 pb-3 text-justify">
                            {props.children}
                        </p>
                        <a name="" id="" class="btn link" href="#" role="button">LEARN MORE</a>
                    </div>
                </div>
            </div>
        );
    }
    else if(props.disposition === 'team'){
        return (
            <div className="container-fluid section team">
                <div className="row">
                    <div className="col-sm alignimage">
                        <div className="text-center"><img className="img1" src={props.img} alt=""/></div>
                    </div>
                    <div className="col-sm text-left p-4">
                        <h1 className="about-titleteam p-3">{props.titleteam}</h1>
                        <h2 className="about-title p-3">{props.title}</h2>
                        <p className="team-text pt-3 pb-3 text-justify">
                            {props.children}
                        </p>
                        <a name="" id="" class="btn teamlink" href="#" role="button">LEARN MORE</a>
                    </div>
                </div>
            </div>
        );
    }
    else if(props.disposition === 'contact'){
        return (
            <div className="container-fluid section">
                <div className="row">
                    <div className="col-sm p-4">
                        <h1 className="about-title p-3 m-auto">{props.title}</h1>
                        <p className="team-text pt-3 pb-3 text-justify m-auto">
                            {props.children}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="container-fluid section">
                <div className="row">
                    <div className="col-sm p-4">
                        <h2 className="about-title p-3 pl-5 m-auto">{props.title}</h2>
                        <p className="about-text pt-3 pb-3 text-justify m-auto">
                            {props.children}
                        </p>
                        <a name="" id="" class="btn linkleft" href="#" role="button">LEARN MORE</a>
                    </div>
                    <div className="col-sm alignimage">
                        <div className="text-center"><img className="img1" src={props.img} alt=""/></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Section;