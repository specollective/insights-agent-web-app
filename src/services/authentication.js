const authenticationService = {
  isAuthenticated: false,
  signin(callback) {
    authenticationService.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    authenticationService.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default authenticationService;
