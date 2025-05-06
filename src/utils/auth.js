export const logoutUser = () => {
  localStorage.removeItem('userAuth');
  sessionStorage.clear();
};

export const getCurrentUser = () => {
  // const userAuth = localStorage.getItem('userAuth');
  // console.log('getCurrentUser: userAuth =', userAuth);
  // return userAuth ? JSON.parse(userAuth) : null;
};

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8088/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('userAuth', JSON.stringify(data));
      const role = data.role.toLowerCase();
      return {
        success: true,
        data: data,
        redirectTo: `/${role}/dashboard`,
      };
    }
    return { success: false, message: data.message || 'Invalid credentials' };
  } catch (error) {
    throw error;
  }
};