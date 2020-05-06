const localUrl = 'http://localhost:8000';
const prodUrl = 'https://kyugyo-back.herokuapp.com';
const tmpUrl = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;
const apiUrl = `${tmpUrl}/api/kyugyos`;
// const apiUrl = `${prodUrl}/api/kyugyos`;
export default apiUrl;