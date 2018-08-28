import React from 'react';
import Form from './Form';
import CardList from './CardList';
import Data from './Data.json';

class App extends React.Component {

    render(){
        return(
            <div>
                <Form/>
                <CardList cards = {Data}/>
            </div>
        );
    }

}

export default App;