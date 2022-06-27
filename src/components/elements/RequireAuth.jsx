import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/authentication';

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      if (!auth.user) {
        await auth.currentUser()
      }
      setLoading(false)
    }
    fetchData()
  },[])

  if (loading) return <div>Loading</div>

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
