import React, { useState, useEffect } from "react";

const Home = (props) => {
    return (
        <main>
            <div>
                <h1>Hi there</h1>
                {loading && <div>A moment...</div>}
                <form>
                    <label>Enter Food to search recipes by:
                        <input value={searchQuery} onInput={e => setSearchQuery(e.target.value)}/>
                    </label>
                    
                </form>
                
                
            </div>
        </main>
    )
}

export default Home;