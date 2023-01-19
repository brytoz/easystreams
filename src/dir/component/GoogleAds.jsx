import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
                <ins className={`adsbygoogle ${this.props.glass} `}
                    data-ad-client="ca-pub-8640143531086883"
                    data-ad-slot={this.props.slot}
                    data-ad-format= 'auto'
                    data-full-width-responsive="true"
                >
                </ins>
        );
    }
}

export default GoogleAds;