const shareApi = process.env.NODE_ENV === 'production' ? 'https://chithibox-api.vercel.app' : 'http://localhost:8080'
export default shareApi