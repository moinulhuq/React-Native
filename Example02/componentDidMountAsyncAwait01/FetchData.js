/* In the root folder, create one folder called service and in that folder, create one file called FetchData.js.
*/

const URI = 'http://localhost:5201';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI + '/list');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}
