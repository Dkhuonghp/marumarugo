import React, { Component } from 'react';
import classNames from 'classnames';

// import { model } from "../model/sneaker_1/scene.gltf"
import "./Banner.scss"

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBanner: 1
        };
    }

    getNextBanner(banner) {
        switch (banner) {
            case 1:
                return 2;
            case 2:
                return 3;
            case 3:
                return 1; 
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentBanner: this.getNextBanner(this.state.currentBanner)
            })
        }, 8000);
    }

    render() {
        const { currentBanner } = this.state;
        
        return(
            <div className="Banner flex-center">
                <div className="banner-container">
                    <div className={classNames('banner-first flex-center', {
                        hide: currentBanner !== 1
                    })}>
                        {/* <model-viewer src= { } camera-controls ar ios-src= {  }></model-viewer> */}

                        <div className="banner-title">
                            content
                        </div>
                        <div className="flex-center">
                            <div className="banner-link">
                                Woman collection
                            </div>
                            <div className="banner-link">
                                Man collection
                            </div>
                        </div>
                    </div>

                    <div className={classNames('banner-second flex-center', {
                        hide: currentBanner !== 2
                    })}>
                        <div className="banner-title">
                            content
                        </div>
                        <div className="flex-center">
                            <div className="banner-link">
                                Shop now
                            </div>
                        </div>
                    </div>

                    <div className={classNames('banner-third flex-center', {
                        hide: currentBanner !== 3
                    })}>
                        <div className="banner-title">
                            content
                        </div>
                        <div className="flex-center">
                            <div className="banner-link">
                                Shop now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-slide flex-center">
                    <div 
                        className={classNames('choose-line', {
                            choose_line_active: currentBanner === 1
                        })}
                        onClick={()=> {this.setState({ currentBanner: 1 })}}
                    ></div>
                    <div 
                        className={classNames('choose-line', {
                            choose_line_active: currentBanner === 2
                        })}
                        onClick={()=> {this.setState({ currentBanner: 2 })}}
                    ></div>
                    <div 
                        className={classNames('choose-line', {
                            choose_line_active: currentBanner === 3
                        })}
                        onClick={()=> {this.setState({ currentBanner: 3 })}}
                    ></div>
                </div>
            </div>
        )
    }
}

export default Banner;