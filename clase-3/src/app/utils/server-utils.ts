'server-only'

async function getDailyJobs() {
    const url = 'https://jsearch.p.rapidapi.com/search?query=developer&page=10&num_pages=1&date_posted=all';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '76c15d5592msh7d1dbb73e2120e1p167086jsn626178b77f95',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        cache: 'no-store',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return null; 
    }
}

export default getDailyJobs