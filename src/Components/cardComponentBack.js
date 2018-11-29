import React, { Component } from 'react';



class cardComponentBack extends Component {

    render() {
        const {kid}=this.props
        const {handleClick}=this.props

    console.log("this is kid",kid)
        return (
            <div className="backofcard" key="back">
                <button onClick={handleClick}>Flip Back</button>
                <div>
                    {kid.address}
                    {kid.city}
                    {kid.state}
                </div>
                hellow world
            </div>
        )
    }
}
export default cardComponentBack