import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiPost, apiGet } from '../utils/api';

const AuthContext = createContext(null);

/**
 * Safely parse a stored JSON user from localStorage.
 * Returns null if missing or unparseable.
 */
function getSavedUser() {
  try {
    const raw = localStorage.getItem('auth_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const savedToken = localStorage.getItem('auth_token');
  const savedUser = getSavedUser();

  // Optimistic hydration: if both token and user exist in localStorage,
  // treat the user as authenticated immediately (no loading screen).
  const [user, setUser] = useState(savedUser);
  const [token, setToken] = useState(savedToken);
  const [loading, setLoading] = useState(!!(savedToken && !savedUser));

  const isAuthenticated = !!user && !!token;

  // On mount, validate stored token in the background
  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token');
    if (!storedToken) {
      setLoading(false);
      return;
    }

    apiGet('/profile')
      .then(data => {
        const freshUser = data.user || data;
        setUser(freshUser);
        setToken(storedToken);
        localStorage.setItem('auth_user', JSON.stringify(freshUser));
      })
      .catch((err) => {
        // Only clear auth if the server explicitly rejected the token (401).
        // Network errors / server down should NOT log the user out.
        if (err.status === 401) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_user');
          setUser(null);
          setToken(null);
        }
        // For other errors (network, 500, etc.), keep the existing session
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (email, password) => {
    const data = await apiPost('/login', { email, password });
    const authToken = data.token;
    const authUser = data.user;

    localStorage.setItem('auth_token', authToken);
    localStorage.setItem('auth_user', JSON.stringify(authUser));
    setToken(authToken);
    setUser(authUser);

    return data;
  }, []);

  const register = useCallback(async (name, email, password, password_confirmation) => {
    const data = await apiPost('/register', { name, email, password, password_confirmation });
    const authToken = data.token;
    const authUser = data.user;

    localStorage.setItem('auth_token', authToken);
    localStorage.setItem('auth_user', JSON.stringify(authUser));
    setToken(authToken);
    setUser(authUser);

    return data;
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiPost('/logout');
    } catch {
      // Ignore errors on logout — token may already be invalid
    }
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setToken(null);
    setUser(null);
  }, []);

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
