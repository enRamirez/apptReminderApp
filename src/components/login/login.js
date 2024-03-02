const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post('/login', { username, password });
    localStorage.setItem('token', response.data.token);
  };

  axios.get('/someProtectedRoute', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });