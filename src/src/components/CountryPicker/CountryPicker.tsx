import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { CovidContext } from "../../contexts/CovidContext";
import countriesJson from "../../data/countries.json";

const CountryPicker: React.FC = () => {
    const { changeCountry } = useContext(CovidContext);

    return (
        <Form.Group controlId="exampleForm.ControlSelect1" className="my-5">
            <Form.Control as="select" onChange={changeCountry} defaultValue="japan">
                {countriesJson.map((country, i) => (
                    <option key={i} value={country.Slug}>
                        {country.Country}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};

export default CountryPicker;
