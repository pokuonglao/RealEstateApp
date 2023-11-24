// Your existing code for making the API request

const options = {
    method: 'GET',
    url: 'https://realty-mole-property-api.p.rapidapi.com/properties',
    params: {
        address: '5500 Grand Lake Dr, San Antonio, TX, 78244'
    },
    headers: {
        'X-RapidAPI-Key': 'YOUR-API-KEY',
        'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    const propertyInfo = response.data;

    // Populate the information on your website
    const propertyDiv = document.getElementById('property-info');

    // For example, display the property address
    const addressParagraph = document.createElement('p');
    addressParagraph.textContent = `Address: ${propertyInfo.address}`;
    propertyDiv.appendChild(addressParagraph);

    // You can add more elements and display other information as needed

} catch (error) {
    console.error(error);
}
