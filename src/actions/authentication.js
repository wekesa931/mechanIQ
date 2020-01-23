export const AUTHENTICATE = "AUTHENTICATE";

export const signUp = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDeT1R4UHSu0kn60JNRhJq-CaEIN0VlnZg",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "An account with the email already exists!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    localStorage.setItem("token", resData.idToken);
    localStorage.setItem("userId", resData.localId);
    localStorage.setItem("loggedIn", true);
    dispatch({ type: AUTHENTICATE, loggedIn: true });
  };
};

export const logIn = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDeT1R4UHSu0kn60JNRhJq-CaEIN0VlnZg",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (
        errorId === "EMAIL_NOT_FOUND" ||
        errorId === "INVALID_EMAIL" ||
        errorId === "INVALID_PASSWORD"
      ) {
        message = "Email or Password is wrong";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    localStorage.setItem("token", resData.idToken);
    localStorage.setItem("userId", resData.localId);
    localStorage.setItem("loggedIn", true);
    dispatch({ type: AUTHENTICATE, loggedIn: true });
  };
};
