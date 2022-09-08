import React from "react";
import './Nav.css'
import { BiBed, BiBath } from 'react-icons/bi'
import { AiOutlineBlock, AiOutlineHeart } from "react-icons/ai";

class Favorite_page extends React.Component {
    state = {
        list: [],
    }
    componentDidMount() {
        var x = JSON.parse(localStorage.getItem("favList"))
        this.setState({
            list: x
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <div className="container">
                    <h3 style={{color:"rgb(95, 79, 238)"}}>My Favorite Properties</h3>
                    <hr /><br />
                    {this.state.list.length != 0 ? 
                    <div className="templets">
                        {this.state.list.map(res => {
                            return (
                                <div className="templet">
                                    <img src={res.img} style={{ width: "100%", height: "auto" }} key={res.id}></img>
                                    <h4 style={{ marginTop: 0, color: "rgb(95, 79, 238)" }}><b>{res.price}</b>$/month</h4>
                                    <h3>{res.city}</h3>
                                    <p>{res.formattedAddress}</p>
                                    <hr />
                                    <p className="icons"><a><BiBed />{res.bedrooms}Beds &nbsp;</a>
                                        <a><BiBath />{res.bathrooms} BathRooms &nbsp;</a>
                                        <a><AiOutlineBlock />{res.squareFootage}Sq</a>
                                    </p>
                                </div>
                            )
                        })}
                    </div> :
                    <div className=""><h1>You Don't Have an any Favorite Properties</h1></div>
    }
                </div>
            </div>
        )
    }
}

export default Favorite_page;