import React from 'react';



const Users = (props) => {
    const { history } = props

    function handleClick (id) {
        history.push('/dashboard/'.concat(id))
    }    
    
    return (
        <div>
            <br />
            <br />
            <button onClick={() => handleClick('6QbMzLY9tXb2RYJK7WUkIWI2AK23')} type="button">Localização motorista José</button>
            <br />
            <br />
            <button onClick={() => handleClick('nOmIgiqYDMRznYyWBQpCQgaAtgf2')} type="button">Localização motorista Fabiano</button>
        </div>
    )

}

export default Users;