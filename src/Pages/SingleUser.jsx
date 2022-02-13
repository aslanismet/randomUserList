
import React,{useState,useEffect} from "react";

const SingleUser = ({user}) => {
    const [country, setCountry] = useState('');

    useEffect(()=>{
        setCountry('https://countryflagsapi.com/png/'.concat(user.location.country))
    },[])

    return  (
        <div className="single-user">
            <img src={user.picture.large} alt=''></img>
            <div className="user-info">
                <h3>{user.name.first} {user.name.last}</h3>
                <p className="user-nail">E-Mail : {user.email}</p>
                <p className="user-location">{user.location.city} | {user.location.country}</p>
                <img src={country} alt=''></img>
                
            </div>

        </div>
    )
}

export default SingleUser;
