interface AuthServiceProps {
  isAuthenticated: () => boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthService: AuthServiceProps = {
  isAuthenticated: () => {
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    return userLoggedIn === 'true' || false;
  },
  login: (email: string) => {
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('email', email);
  },
  logout: () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('email');
  },
};
export default AuthService;

