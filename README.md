# country-details-list

This package is built to get all the details of a country under one roof.

### Data Format For A Country

```
{
        "name": "Afghanistan",
        "code": "AF",
        "capital": "Kabul",
        "region": "AS",
        "currency": {
            "code": "AFN",
            "name": "Afghan afghani",
            "symbol": "؋"
        },
        "language": {
            "code": "ps",
            "name": "Pashto"
        },
        "flag": "https://flagcdn.com/af.svg",
        "dialling_code": "+93",
        "isoCode": "004"
}
```
### Description To Each Data Fields
+ ```name```: The official name of the country in English
+ ```code```: The country code in **ISO 3166-1 alpha-2** format
+ ```capital```: The capital city of the country
+ ```region```: The country region in **ISO 3166-1** format
+ ```currency```: This field contains the official currency details of the country in three sub-fields:
  - ```code```: The official currency code of the country
  - ```name```: The offcial currency name of the country
  - ```symbol```: The official currency symbol of the country
+ ```language```: This field contains the offcial/ most speaking language details of the country in two sub-fields:
  - ```code```: The language code of the country
  - ```name```: The official/ most speaking language name of the country
+ ```flag```: The flag of the country in **svg** format
+ ```dialling_code```: The dialling code of the country
+ ```isoCode```: ISO code of the country

### Data

Please access ```/data``` folder to see through the data(in JSON format) which have been used for this package.

### APIs
+ ```getCountryDetailsByCountryCode```
This API accepts a single argument i.e. ```countryCode``` and returns the associated country details if any.
+ ```getCountryDetailsByCountryName```
This API accepts a single argument i.e. ```countryName``` and returns the associated country details if any.
+ ```getCountryFlagByCountryCodeOrName```
This API accepts two arguments i.e. ```countryCode``` & ```countryName```. If either of the mentioned argument has valid valu then it would return the associated country flag details.
+ ```getCountryDialCodeByCountryCodeOrName```
This API accepts two arguments i.e. ```countryCode``` & ```countryName```. If either of the mentioned argument has valid valu then it would return the associated country dial code.

### Example
#### Code
```
const { 
    getCountryDetailsByCountryCode,
    getCountryDetailsByCountryName,
    getCountryFlagByCountryCodeOrName,
    getCountryDialCodeByCountryCodeOrName
 } = require('country-details-list');

console.log(getCountryDetailsByCountryCode('IN'));
console.log(getCountryDetailsByCountryName('InDia'));
console.log(getCountryFlagByCountryCodeOrName('IN'));
console.log(getCountryDialCodeByCountryCodeOrName(countryCode = '', 'Afghanistan'));
console.log(getCountryDetailsByCountryCode('UT'));
```

#### Response
```
{
  status: 200,
  message: 'A matching country found.',
  country: {
    name: 'India',
    code: 'IN',
    capital: 'New Delhi',
    region: 'AS',
    currency: { code: 'INR', name: 'Indian rupee', symbol: '₹' },
    language: { code: 'hi', name: 'Hindi' },
    flag: 'https://flagcdn.com/in.svg',
    dialling_code: '+91',
    isoCode: '356'
  }
}
{
  status: 200,
  message: 'A matching country found.',
  country: {
    name: 'India',
    code: 'IN',
    capital: 'New Delhi',
    region: 'AS',
    currency: { code: 'INR', name: 'Indian rupee', symbol: '₹' },
    language: { code: 'hi', name: 'Hindi' },
    flag: 'https://flagcdn.com/in.svg',
    dialling_code: '+91',
    isoCode: '356'
  }
}
{
  status: 200,
  message: 'A matching country found.',
  flag: 'https://flagcdn.com/in.svg'
}
{
  status: 200,
  message: 'A matching country found.',
  dialling_code: '+93'
}
{
  status: 404,
  message: 'There is no matching country code found.',
  country: {}
}
```
### Credits

Thanks to:
+ [Flags API & CDN](https://flagcdn.com/) for country Flag data.

### License
+ Copyrights &copy;[Utsav Akash Naskar](https://github.com/Utsav1999)
+ MIT License