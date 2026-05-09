import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import usePhoenixInit from '../../hooks/usePhoenixInit';

export default function SignIn() {
  usePhoenixInit();
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.data?.message || err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
      <div className="bg-holder bg-auth-card-overlay" style={{ backgroundImage: 'url(/assets/img/bg/37.png)' }}></div>
      <div className="row flex-center position-relative min-vh-100 g-0 py-5">
        <div className="col-11 col-sm-10 col-xl-8">
          <div className="card border border-translucent auth-card">
            <div className="card-body pe-md-0">
              <div className="row align-items-center gx-0 gy-7">
                {/* Left Panel — Branding */}
                <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                  <div className="bg-holder" style={{ backgroundImage: 'url(/assets/img/bg/38.png)' }}></div>
                  <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7">
                    <h3 className="mb-3 text-body-emphasis fs-7">
                      <span className="me-2">🐾</span>PetShop Admin
                    </h3>
                    <p className="text-body-tertiary">
                      Manage your pet shop inventory, customers, and orders all in one place!
                    </p>
                    <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2"></span>
                        <span className="text-body-tertiary fw-semibold">Product Management</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2"></span>
                        <span className="text-body-tertiary fw-semibold">Customer Tracking</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2"></span>
                        <span className="text-body-tertiary fw-semibold">Order Processing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                    <img className="auth-title-box-img d-dark-none" src="/assets/img/spot-illustrations/auth.png" alt="" />
                    <img className="auth-title-box-img d-light-none" src="/assets/img/spot-illustrations/auth-dark.png" alt="" />
                  </div>
                </div>

                {/* Right Panel — Form */}
                <div className="col mx-auto">
                  <div className="auth-form-box">
                    <div className="text-center mb-7">
                      <a className="d-flex flex-center text-decoration-none mb-4" href="/">
                        <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                          <img src="/assets/img/icons/logo.png" alt="PetShop" width="58" />
                        </div>
                      </a>
                      <h3 className="text-body-highlight">Sign In</h3>
                      <p className="text-body-tertiary">Get access to your admin dashboard</p>
                    </div>

                    {error && (
                      <div className="alert alert-phoenix-danger d-flex align-items-center mb-3" role="alert">
                        <span className="fas fa-exclamation-circle text-danger me-2 fs-9"></span>
                        <p className="mb-0 flex-1">{error}</p>
                      </div>
                    )}

                    <button className="btn btn-phoenix-secondary w-100 mb-3" type="button">
                      <span className="fab fa-google text-danger me-2 fs-9"></span>Sign in with Google
                    </button>
                    <button className="btn btn-phoenix-secondary w-100" type="button">
                      <span className="fab fa-facebook text-primary me-2 fs-9"></span>Sign in with Facebook
                    </button>

                    <div className="position-relative">
                      <hr className="bg-body-secondary mt-5 mb-4" />
                      <div className="divider-content-center bg-body-emphasis">or use email</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <div className="form-icon-container">
                          <input className="form-control form-icon-input" id="email" type="email"
                            placeholder="name@example.com" value={email}
                            onChange={(e) => setEmail(e.target.value)} required autoFocus />
                          <span className="fas fa-user text-body fs-9 form-icon"></span>
                        </div>
                      </div>

                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="password">Password</label>
                        <div className="form-icon-container position-relative">
                          <input className="form-control form-icon-input pe-6" id="password"
                            type={showPassword ? 'text' : 'password'} placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                          <span className="fas fa-key text-body fs-9 form-icon"></span>
                          <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                            type="button" onClick={() => setShowPassword(!showPassword)}>
                            <span className={`uil ${showPassword ? 'uil-eye-slash' : 'uil-eye'}`}></span>
                          </button>
                        </div>
                      </div>

                      <div className="row flex-between-center mb-7">
                        <div className="col-auto">
                          <div className="form-check mb-0">
                            <input className="form-check-input" id="remember-check" type="checkbox"
                              checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                            <label className="form-check-label mb-0" htmlFor="remember-check">Remember me</label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <Link className="fs-9 fw-semibold" to="/auth/forgot-password">Forgot Password?</Link>
                        </div>
                      </div>

                      <button className="btn btn-primary w-100 mb-3" type="submit" disabled={loading}>
                        {loading ? (
                          <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Signing in...</>
                        ) : 'Sign In'}
                      </button>

                      <div className="text-center">
                        <Link className="fs-9 fw-bold" to="/auth/sign-up">Create an account</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
