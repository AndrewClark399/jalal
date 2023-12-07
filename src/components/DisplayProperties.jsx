
import axios from "axios";
import { useState, useEffect } from "react";


function GetProperties() {

    const [search, setSearch] = useState("");
    const [properties, setProperties] = useState("");
    const [searchBedrooms, setSearchBedrooms] = useState(0);

useEffect(() => {
    handleClick()
}, []);

    function handleClick() {


        axios.get("http://localhost:5000/properties")
            .then(response => {
                setProperties(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displayProperties = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const property of properties) {

        // if the search box is empty and the bedrooms slider is set at 0,  or  the entry in included in the address and the nuber of bedrooms is above the slider value.
        if ((search==="" && searchBedrooms === 0) || (property.address.includes(search) && property.bedrooms >= searchBedrooms)) {
            
        //use a table or cards to include all of the data or else get rid of the button 

        displayProperties.push(
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> {property.address}</p>
                            <p> {property.offersintheregionof}</p>
                            <p> {property.typeofproperty}</p>
                            <p> {property.squarefootage}</p>
                            <p> {property.bedrooms}</p>
                            <p> {property.bathrooms}</p>
                            <p> {property.gardens}</p>
                            <p> {property.outbuildings}</p>
                            <p> {property.freehold}</p>
                            <p> {property.sellerid}</p>
                            <p> {property.uploadimages}</p>
                            <p> {property.propertystatus}</p>
                        </div>
                    </div>
                </div>

            </div>

        )
        }
    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                <input value = {search} onChange = {e => setSearch(e.target.value)}/>
                <input type="range" min = "1" max = "10" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>
                    <p>{displayProperties}</p>
                
                </div>
            </div>
        </>
    );
}

export default GetProperties;

//if ((search==="" && searchBedrooms === 0) || (property.address.includes(search) && property.bedrooms >= searchBedrooms)) {
   // <input value = {search} onChange = {e => setSearch(e.target.value)}/>
   // <input type="range" min = "1" max = "10" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>