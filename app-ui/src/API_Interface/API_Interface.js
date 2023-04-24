import axios from 'axios';

const params = {
    api_key: 'lsbtkmq13XtiD3eAfTGpbhJbJFUGwX8UToxafkaJ',
    dataType: ["Survey (FNDDS)"]
}

const AxiosConfigured = () => {
    // Indicate to the API that all requests for this app are AJAX
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Set the baseURL for all requests to the API domain instead of the current domain
    // axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.baseURL = `http://localhost:8443/api/v1`;


    // Allow the browser to send cookies to the API domain (which include auth_token)
    axios.defaults.withCredentials = false;


//    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;

    return axios;
};


const axiosAgent = AxiosConfigured();

export default class APIInterface {

    async allUsers() {
        return axiosAgent.get(`user/all-users`);
    }

    async allFoodByUser(userId) {
        return axiosAgent.get(`foodlog/${userId}`);
    }

    async searchFood(food) {
        return axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(food)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=10`)
    }

    async addFoodByUser(UserId, FoodName, Calories, Protein, Carbohydrates, Fat){
        return axiosAgent.post(`foodlog/${UserId}/${FoodName}/${Calories}/${Protein}/${Carbohydrates}/${Fat}`)
    }

}