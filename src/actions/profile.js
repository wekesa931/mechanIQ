export const getProfile = userId => {
  return async dispatch => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDeT1R4UHSu0kn60JNRhJq-CaEIN0VlnZg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            idToken: token
          })
        }
      );
      const resData = await response.json();
      console.log('===>',resData)
    } catch(err){
      console.log(err)
    }
    
  };
};
