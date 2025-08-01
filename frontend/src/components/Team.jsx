import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Our Team</h1>
                <p>At the heart of our restaurant is a passionate team that brings every dish to life. From expert chefs crafting recipes with precision, to our warm-hearted servers who treat every guest like family.</p>

            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Team