import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import usePhoenixInit from '../../hooks/usePhoenixInit';

export default function SignOut() {
  usePhoenixInit();
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const doLogout = async () => {
      await logout();
      navigate('/auth/sign-in', { replace: true });
    };
    doLogout();
  }, [logout, navigate]);

  return (
    <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
      <div className="bg-holder bg-auth-card-overlay" style={{ backgroundImage: 'url(/assets/img/bg/37.png)' }}></div>
      <div className="row flex-center position-relative min-vh-100 g-0 py-5">
        <div className="col-11 col-sm-10 col-xl-8">
          <div className="card border border-translucent auth-card">
            <div className="card-body">
              <div className="text-center p-5">
                <div className="mb-4">
                  <span style={{ fontSize: '4rem' }}>🐾</span>
                </div>
                <h3 className="text-body-highlight mb-3">Signing out...</h3>
                <p className="text-body-tertiary mb-4">Thank you for using PetShop Admin. See you again!</p>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
