import React from 'react';
const Card = (props) =>{
    return(
        <div style={{margin: 'len'}}>
            <img width="250" src={props.avatar_url}/>
            <br/>
            <div style={{display: 'inline-block'}}>
                <div style={{fontSize: '1.25en',fontWeight: 'bold'}}>
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
}

export default Card;