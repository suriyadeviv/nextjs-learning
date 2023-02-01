

const getApiResult = async (termValue = "women_dresses") => {
  const endpoint  = `http://localhost:3000/data/${termValue}.json`
    const results = await fetch(endpoint,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}).then(res => res.json()).then(result => {
      if (result.errors) {
          throw new Error(result.errors[0].message);
      }
      return result;
  }).catch(e => {
      console.log(`Failed to fetch ${termValue} data`);
      return false;
  });  

  return results;
};

export default getApiResult;