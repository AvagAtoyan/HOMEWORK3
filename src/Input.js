function Input({ value }) {
    return (
        <div>
            {
                value.map((val) => {
                    return (
                        <div className="card" >
                            <h1>{val.name}</h1>
                            <h1>{val.weight}</h1>
                            <h1>{val.price}</h1>
                            <img className="card" src={val.firstName}></img>

                        </div>

                    )
                })
            }
        </div>

    )

};
export default Input;