import React from 'react'

const Home = ()=> {
    return(
        <div className= "home-style">
            <div className="card home-card">
                <h5>gabrielle</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                </div>
                <div className = "card-content">
                    <i class="material-icons" style={{color:"black"}}>thumb_up</i>
                    <h6>Post Title</h6>
                    <p>The post description goes here.</p>
                    <input type="text" placeholder="type a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>gabrielle</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                </div>
                <div className = "card-content">
                    <h6>Post Title</h6>
                    <p>The post description goes here.</p>
                    <input type="text" placeholder="type a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>gabrielle</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                </div>
                <div className = "card-content">
                    <h6>Post Title</h6>
                    <p>The post description goes here.</p>
                    <input type="text" placeholder="type a comment"/>
                </div>
            </div>
        </div>
    )
}

export default Home