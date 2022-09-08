import React from "react";
import './Nav.css'
import Estate from '../Data/data'
import { BiBed, BiBath } from 'react-icons/bi'
import { AiOutlineBlock, AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Properties extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        post: [],
        item: []
    }
    componentDidMount() {
        if (localStorage.getItem("favList") == null || localStorage.getItem("favList") == undefined) {
            localStorage.setItem("favList", JSON.stringify([]))
        }
        this.setState({ post: Estate });
    }
    addFav = (id) => {
        // console.log(id);
        this.state.post.map(res => {
            if (res.id == id) {
                console.log("found");
                let a = JSON.parse(localStorage.getItem("favList"));
                if (a.length != 0) {
                    for (let i = 0; i < a.length; i++) {
                        if (a[i].id == id) {
                            toast.info('Already added', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                });
                            return;
                        }
                    }
                }
                a.push(res);
                console.log(a);
                localStorage.setItem("favList", JSON.stringify(a));
                toast.success('Added successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                // alert("dd")
                this.props.nav('/favorite');

            }
        })

    }
    render() {
        return (
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
                {/* toastify */}
                <div className='container'>
                    <div className="search-pos">
                        <h3 className="search-pos">Search properties to Rent</h3>
                        <input type="text" placeholder="Enter text" className="search-pos inp" />
                    </div>
                    <br />
                    <div className="cards">
                        <div className="card"><p style={{ color: "rgb(187, 184, 184)" }}>Location</p>
                            <input type="text" placeholder="Enter location" style={{ width: "90px" }} />
                        </div>
                        <div className="card"><p style={{ color: "rgb(187, 184, 184)" }}>When</p>
                            <input type="date" placeholder="Enter location" style={{ width: "90px" }} /></div>
                        <div className="card"><p style={{ color: "rgb(187, 184, 184)" }}>Price</p>
                            <input type="text" placeholder="Enter location" style={{ width: "90px" }} /></div>
                        <div className="card"><p style={{ color: "rgb(187, 184, 184)" }}>Property Type</p>
                            <input type="text" placeholder="Enter location" style={{ width: "90px" }} /></div>
                        <div className="card"><button className="btn" style={{ marginTop: "25px" }}>Search</button></div>
                    </div>
                    <br /><br />
                    <div className="templets">
                        {this.state.post.map((res) => {
                            return (
                                <div className="templet">
                                    <img src={res.img} style={{ width: "100%", height: "auto" }} key={res.id}></img>
                                    <h4 style={{ marginTop: 0, color: "rgb(95, 79, 238)" }}><b>{res.price}</b>$/month</h4>
                                    <h3>{res.city}
                                        <span style={{ borderRadius: "70%", border: "1px solid white", marginLeft: 70 }}>
                                            <AiOutlineHeart onClick={() => this.addFav(res.id)} values={res.id} />
                                        </span></h3>
                                    <p>{res.formattedAddress}</p>
                                    <hr />
                                    <p className="icons"><a><BiBed />{res.bedrooms}Beds &nbsp;</a>
                                        <a><BiBath />{res.bathrooms} BathRooms &nbsp;</a>
                                        <a><AiOutlineBlock />{res.squareFootage}Sq</a>
                                    </p>
                                </div>
                            )
                        })}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Properties;