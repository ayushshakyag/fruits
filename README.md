# Fruit Sorting API

This API provides a sorted list of fruits based on their color.

## Getting Started

To get started with the Fruit Sorting API, follow these steps:

1. Clone the repository: `git clone https://github.com/ayushshakyag/fruits.git`
2. Navigate to the project directory: `cd fruits`
3. Install the dependencies: `npm install`
4. Start the server: `node index.js `
5. The API will be accessible at `http://localhost:3000`

## Endpoints

### Get Sorted Fruits

Endpoints
Get Sorted Fruits
URL: /

Method: GET

Description: Retrieves a sorted list of fruits based on their color. You can specify the sorting order using the sort query parameter.

Query Parameters:

sort: (optional) Specifies the field to sort the fruits. Supported values are "id", "color", and "name". To sort in descending order, add a "-" before the field name. Default sorting is by "id" in ascending order.
