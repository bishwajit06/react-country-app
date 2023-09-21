import Country from "./Country";
import { v4 as uuidv4 } from 'uuid';


const Countries = (props) => {
    return (
        <div className="row justify-content-center">
            {props.countries.map((country)=>{
                const countryNew = {country, id:uuidv4()}
                return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />
            })}
            
        </div>
    );
};

export default Countries;