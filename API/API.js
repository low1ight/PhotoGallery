const url = 'http://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
export const API = {
    async getPhoto() {
        return fetch(url).then(response => response.json()).catch(e => console.log(`Error: ${e.message}`))
    }
};


