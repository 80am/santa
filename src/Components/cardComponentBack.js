import React, { Component } from 'react';



class cardComponentBack extends Component {

    render() {
        const {kid}=this.props
        const {handleClick}=this.props

    console.log("this is kid",kid)
        return (
            <div className="backofcard" key="back">
                <div>
                    {kid.address}
                    {kid.city}
                    {kid.state}
                </div>
                hellow world
                <div>
                <button onClick={handleClick}>Flip Back</button>

                </div>
            </div>
        )
    }
}
export default cardComponentBack