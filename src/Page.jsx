import React from 'react';
import Card from './Card';
import Footer from './Footer';
import { categoriesApi } from './const';

class Page extends React.Component {
    state = {
        categories: []
    };

    async componentDidMount() {
        await fetch(categoriesApi)
            .then((res) => res.json())
            .then((res) => res['body'])
            .then((res) => JSON.parse(res))
            .then((res) => res['Categories']['Items'])
            .then((json) => this.setState({ categories: json }))
            .catch(console.log);

        // Logs the retrieved data from the API.
        console.log(this.state.categories);
    }

    render() {
        return (<div className='tc ph4'>
            <h1 className='f3 f2-m pt5 f1-l black-90 mv3'>
                {this.props.title}
            </h1>
            <h2 className='f5 f4-m f3-l fw2 black-90 mt0 lh-copy'>
                {this.props.subtitle}
            </h2>
            <div className='pt4'>
                {this.state.categories.map((category) => {
                    const prop = {
                        key: category['CategoryName'],
                        title: category['CategoryName'],
                        imageUrl: category['CategoryImageUrl']
                    }
                    return <Card {...prop}/>
                })}
            </div>
            <div className='pt5'>
                <Footer />
            </div>
        </div>);
    }
}

export default Page;