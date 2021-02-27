import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

function Card() {
    return (
        <div className="cards">
            <h1>Current Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                            <CardItem 
                                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                                text="PlantShlf API"
                                label="Project"
                                path="/projects"
                            />
                           <CardItem 
                                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1638&q=80"
                                text="Werth Photography Client Tracker"
                                label="Project"
                                path="/projects"
                            />
                           <CardItem 
                                src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                                text="AWS Lambda"
                                label="Project"
                                path="/projects"
                            />
                    </ul>
                    <ul className="cards__items">
                            <CardItem 
                                src="https://images.unsplash.com/photo-1596742266690-6acc0f0a9ede?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3066&q=80"
                                text="LinkedIn Profile"
                                label="Profiles"
                                path="https://www.linkedin.com/in/matthewwerth/"
                            />
                           <CardItem 
                                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                text="Github Profile"
                                label="Profiles"
                                path="https://github.com/werth-code"
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
