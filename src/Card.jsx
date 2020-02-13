import React from 'react';
import './Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className='dib br3 ba ma2 dark-gray b--black-10 mw5 tc black link dim'>
                <div className='CardItem-img-frame'>
                    <img className='CardItem-img br3 br--top' alt={this.props.title} src={this.props.imageUrl}></img>
                </div>
                <div className='pa2 ph3-ns pb3-ns'>
                    <div>
                        <h1 className="f5 f4-ns mv0">{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </div>
                    <p className="f6 lh-copy measure mt2 mid-gray mv0">
                        Explore {this.props.title}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;