import React from 'react'

const Cards = (props) => {
    return (
        <div className='Card-List1'>
                <div className="Card1">
                <div className="top"><img src={props.Logo}></img>
                    <p>Save </p></div><br></br>
                <div className="info">  <h1>{props.Company} <span>{props.DatePosted}</span> </h1>
                    <h2>{props.Post}</h2>
                    <div className="Level1">
                        <h3 className='lv1'>{props.Tag1}</h3>
                        <h3 className='lv2'>{props.Tag2}</h3></div>
                    <div className="End1">
                        <h2>{props.Pay}</h2>
                        <button>Apply now</button>
                    </div>
                    <span className='sp1'>{props.Location}</span>
                </div>
            </div>
        </div>
    )
}

export default Cards
