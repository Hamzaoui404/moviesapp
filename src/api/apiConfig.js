const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'Your own Api ', // key from moviedb 
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;