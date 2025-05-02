export const authService = {
    getUsers() {
      try {
        const users = localStorage.getItem('groupify_users');
        return users ? JSON.parse(users) : [];
      } catch (error) {
        console.error('Error getting users:', error);
        return [];
      }
    },
  
    setUsers(users) {
      try {
        localStorage.setItem('groupify_users', JSON.stringify(users));
      } catch (error) {
        console.error('Error setting users:', error);
      }
    },
  
    getCurrentUser() {
      try {
        const user = localStorage.getItem('groupify_user');
        return user ? JSON.parse(user) : null;
      } catch (error) {
        console.error('Error getting current user:', error);
        return null;
      }
    },
  
    setCurrentUser(user) {
      try {
        localStorage.setItem('groupify_user', JSON.stringify(user));
      } catch (error) {
        console.error('Error setting current user:', error);
      }
    },
  
    login(username, password) {
      const users = this.getUsers();
      const user = users.find(
        u => u.username === username && u.password === password
      );
      
      if (user) {
        this.setCurrentUser(user);
        return user;
      }
      throw new Error('Invalid username or password');
    },
  
    signup(username, email, password) {
      const users = this.getUsers();
      
      if (users.some(u => u.username === username)) {
        throw new Error('Username already exists');
      }
      
      if (users.some(u => u.email === email)) {
        throw new Error('Email already registered');
      }
      
      const newUser = { username, email, password };
      this.setUsers([...users, newUser]);
      this.setCurrentUser(newUser);
      return newUser;
    },
  
    logout() {
      try {
        localStorage.removeItem('groupify_user');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };