const AuthService = {
    isAuthenticated: () => {
      const userLoggedIn = localStorage.getItem('userLoggedIn');
      return userLoggedIn === 'true' || false;
    },
    login: (email) => {
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('email', email);
    },
    logout: () => {
      localStorage.removeItem('userLoggedIn');
      localStorage.removeItem('email');
    },
  };
  
  export default AuthService;