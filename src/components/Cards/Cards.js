import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({results}) => {
    let display, statusBgColor, genderBgColor; 
    if (results) {
        display = results.map(i=>{
            let {id, name, image, location, gender, species, origin, status} = i
            return(
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={styles.cards}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`}/>
                        <div className={styles.content}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-7">Origin</div>
                                <div className="fs-5">{origin.name}</div>
                            </div>
                            <div className="">
                                <div className="fs-7">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                            <div className="">
                                <div className="fs-6">Spicie</div>
                                <div className="fs-5">{species}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if(status === "Dead"){
                            statusBgColor = "danger";
                        } else if (status === "Alive"){
                            statusBgColor = "success";
                        }else {
                            statusBgColor = "secondary";
                        }
                        if(gender === "Male"){
                            genderBgColor = "primary";
                        } else if (gender === "Female"){
                            genderBgColor = "danger";
                        }else {
                            genderBgColor = "secondary";
                        }
                    })()}
                    
                    <div className={`${styles.badges} position-absolute`}>
                        <div className={`badge text-bg-${statusBgColor}`}>{status}</div>
                        <div className={`badge text-bg-${genderBgColor}`}>{gender}</div>
                    </div>
                    
                </div>
            )
        });
    } else { // Failed search
        display = "No characters found :( Please check your spelling and try again!";
    }
    return <>{display}</>

}

export default Cards