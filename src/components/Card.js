import React from 'react'; //jsx 를 쓰기 때문에 import

const Card = (props) =>{
    //const {name , email , id} = props; //just can use these
    return( //should return one element
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;