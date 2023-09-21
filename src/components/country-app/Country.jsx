const Country = (props) => {
    const {name, flags, area, population, capital} = props.country
    const removeCountry = ()=>{
        props.onRemoveCountry(name.common)
    }
    return (
        <div className="col-md-3 mb-4">
            <div className="card border-0 shadow h-100">
                <div className="p-md-5 bg-light h-100">
                    <img src={flags.png} alt={name.common} className="img-fluid" />
                </div>
                <div className="card-body">
                    <div className="card-title h4 text-secondary">{name.common}</div>
                    <p className="mb-0 text-secondary"><strong>Area: </strong> {area}</p>
                    <p className="mb-0 text-secondary"><strong>Population: </strong> {population}</p>
                    <p className="mb-0 text-secondary"><strong>Capital: </strong>{capital}</p>
                    <button
                    onClick={removeCountry}
                    className='btn btn-danger btn-sm mt-3 px-4'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default Country;