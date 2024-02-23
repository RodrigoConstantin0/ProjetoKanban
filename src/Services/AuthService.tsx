interface AuthServiceProps {
  isAuthenticated: () => boolean;
  login: (email: string, name: string) => void;
  logout: () => void;
}

const AuthService: AuthServiceProps = {
  isAuthenticated: () => {
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    return userLoggedIn === 'true' || false;
  },
  login: (email: string, name: string) => {
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
  },
  logout: () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.reload();
  },
};
export default AuthService;

