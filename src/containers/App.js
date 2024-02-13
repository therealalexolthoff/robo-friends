import React, {useState, useEffect} from "react";
import CardList from "../components/cardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import './App.css'
function App()   {
    
    const [robots, setRobots] = useState([])
    const [searchfield, setSearch] = useState('')

    useEffect(() => {
        console.log('running')
        fetch('https://jsonplaceholder.typicode.com/users').then( response => {
        return response.json()}).then(users =>setRobots(users))
    },[])
    
    
    function searchChange (event) {
        setSearch(event.target.value)
    }
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

        return !robots.length ? <h1>Loading</h1> :
         (
            <div className="tc">
                <h1 className="f2">Robot Friends</h1>
                <SearchBox searchChange={searchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}></CardList>
                    </ErrorBoundry>
                </Scroll>
            </div>       
        )
    }

export default App