const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f50a855a410e91d4e54c5aec49a499fa', // key from moviedb 
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;