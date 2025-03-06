// import the json data
const countries = require('./data/country-code.json');

// module to find the country details by country code
const getCountryDetailsByCountryCode = (countryCode) => {
    let result = { "status": 404 };
    for (const country of countries) {
        if (country.code === countryCode.toString().toUpperCase()) {
            result = { ...result, "status": 200, "message": 'A matching country found.', "country": { ...country } };
            break;
        }
    }

    // if no match found
    if (result.status === 404) {
        result = { ...result, "message": 'There is no matching country code found.', "country": {} };
    }

    return result;
}

// module to find the country details by country name
const getCountryDetailsByCountryName = (countryName) => {
    let result = { "status": 404 };
    for (const country of countries) {
        if (country.name.toUpperCase() === countryName.toString().toUpperCase()) {
            result = { ...result, "status": 200, "message": 'A matching country found.', "country": { ...country } };
            break;
        }
    }

    // if no match found
    if (result.status === 404) {
        result = { ...result, "message": 'There is no matching country name found.', "country": {} };
    }

    return result;
}

// module to find country flag based on country-code or country-name
const getCountryFlagByCountryCodeOrName = (countryCode = '', countryName = '') => {
    let result = { "status": 404 };
    // check if either of the country-code or country-name is available
    if (countryCode.toString().length !== 0) {
        for (const country of countries) {
            if (country.code === countryCode.toString().toUpperCase()) {
                result = { ...result, "status": 200, "message": 'A matching country found.', "flag": country.flag };
            }
        }

        if (result.status === 404) {
            result = { ...result, "status": 404, "message": 'There is no matching country code found.', "flag": null };
        }

        return result;
    } else if (countryName.toString().length !== 0) {
        for (const country of countries) {
            if (country.name.toUpperCase() === countryName.toString().toUpperCase()) {
                result = { ...result, "status": 200, "message": 'A matching country found.', "flag": country.flag };
            }
        }

        if (result.status === 404) {
            result = { ...result, "status": 404, "message": 'There is no matching country name found.', "flag": null };
        }

        return result;
    } else {
        return { "status": 422, "message": 'Invalid Input', "flag": null };
    }
}

// module to find country dial code based on country-code or country-name
const getCountryDialCodeByCountryCodeOrName = (countryCode = '', countryName = '') => {
    let result = { "status": 404 };
    // check if either of the country-code or country-name is available
    if (countryCode.toString().length !== 0) {
        for (const country of countries) {
            if (country.code === countryCode.toString().toUpperCase()) {
                result = { ...result, "status": 200, "message": 'A matching country found.', "dialling_code": country.dialling_code };
            }
        }

        if (result.status === 404) {
            result = { ...result, "status": 404, "message": 'There is no matching country code found.', "dialling_code": null };
        }

        return result;
    } else if (countryName.toString().length !== 0) {
        for (const country of countries) {
            if (country.name.toUpperCase() === countryName.toString().toUpperCase()) {
                result = { ...result, "status": 200, "message": 'A matching country found.', "dialling_code": country.dialling_code };
            }
        }

        if (result.status === 404) {
            result = { ...result, "status": 404, "message": 'There is no matching country name found.', "dialling_code": null };
        }

        return result;
    } else {
        return { "status": 422, "message": 'Invalid Input', "dialling_code": null };
    }
}

// export the modules
module.exports = {
    getCountryDetailsByCountryCode,
    getCountryDetailsByCountryName,
    getCountryFlagByCountryCodeOrName,
    getCountryDialCodeByCountryCodeOrName
};

