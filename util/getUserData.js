
const allUsersData = async () => {
  const endpoint  = `http://localhost:3000/data/users.json`
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
        console.log(`Failed to fetch all user data`);
        return false;
    }); 
    return results.users;
};

const getUserData = async (username = "") => {
    const endpoint  = `http://localhost:3000/data/users.json`
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
        console.log(`Failed to fetch ${username} data`);
        return false;
    }); 
    const userProfile = results.users.filter(userData => userData.name === username);
    return userProfile ;
  };
  
  const userDataCollection = {
    getUserData,
    allUsersData
}

export default userDataCollection