import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import usePhoenixInit from '../../hooks/usePhoenixInit';

export default function SignUp() {
  usePhoenixInit();
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email format';
    if (password.length < 8) errors.password = 'Password must be at least 8 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    if (!acceptTerms) errors.terms = 'You must accept the terms and privacy policy';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validate()) return;
    setLoading(true);

    try {
      await register(name, email, password, confirmPassword);
      navigate('/', { replace: true });
    } catch (err) {
      if (err.data?.errors) {
        // Laravel validation errors
        const backendErrors = {};
        Object.entries(err.data.errors).forEach(([key, msgs]) => {
          backendErrors[key] = msgs[0];
        });
        setFieldErrors(backendErrors);
      }
      setError(err.data?.message || err.message || 'Registration failed');
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
                  <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 card-sign-up">
                    <h3 className="mb-3 text-body-emphasis fs-7">
                      <span className="me-2">🐾</span>PetShop Admin
                    </h3>
                    <p className="text-body-tertiary">
                      Join our pet shop management platform and streamline your business operations!
                    </p>
                    <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2"></span>
                        <span className="text-body-tertiary fw-semibold">Inventory Control</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2"></span>
                        <span className="text-body-tertiary fw-semibold">Sales Analytics</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2"></span>
                        <span className="text-body-tertiary fw-semibold">Multi-store Support</span>
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
                      <h3 className="text-body-highlight">Sign Up</h3>
                      <p className="text-body-tertiary">Create your admin account</p>
                    </div>

                    {error && (
                      <div className="alert alert-phoenix-danger d-flex align-items-center mb-3" role="alert">
                        <span className="fas fa-exclamation-circle text-danger me-2 fs-9"></span>
                        <p className="mb-0 flex-1">{error}</p>
                      </div>
                    )}

                    <button className="btn btn-phoenix-secondary w-100 mb-3" type="button">
                      <span className="fab fa-google text-danger me-2 fs-9"></span>Sign up with Google
                    </button>
                    <button className="btn btn-phoenix-secondary w-100" type="button">
                      <span className="fab fa-facebook text-primary me-2 fs-9"></span>Sign up with Facebook
                    </button>

                    <div className="position-relative mt-4">
                      <hr className="bg-body-secondary" />
                      <div className="divider-content-center bg-body-emphasis">or use email</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className={`form-control ${fieldErrors.name ? 'is-invalid' : ''}`}
                          id="name" type="text" placeholder="Full Name"
                          value={name} onChange={(e) => setName(e.target.value)} required />
                        {fieldErrors.name && <div className="invalid-feedback">{fieldErrors.name}</div>}
                      </div>

                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input className={`form-control ${fieldErrors.email ? 'is-invalid' : ''}`}
                          id="email" type="email" placeholder="name@example.com"
                          value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {fieldErrors.email && <div className="invalid-feedback">{fieldErrors.email}</div>}
                      </div>

                      <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="password">Password</label>
                          <div className="position-relative">
                            <input className={`form-control form-icon-input pe-6 ${fieldErrors.password ? 'is-invalid' : ''}`}
                              id="password" type={showPassword ? 'text' : 'password'} placeholder="Password"
                              value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                              type="button" onClick={() => setShowPassword(!showPassword)}>
                              <span className={`uil ${showPassword ? 'uil-eye-slash' : 'uil-eye'}`}></span>
                            </button>
                            {fieldErrors.password && <div className="invalid-feedback">{fieldErrors.password}</div>}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                          <div className="position-relative">
                            <input className={`form-control form-icon-input pe-6 ${fieldErrors.confirmPassword ? 'is-invalid' : ''}`}
                              id="confirmPassword" type={showConfirm ? 'text' : 'password'} placeholder="Confirm Password"
                              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                              type="button" onClick={() => setShowConfirm(!showConfirm)}>
                              <span className={`uil ${showConfirm ? 'uil-eye-slash' : 'uil-eye'}`}></span>
                            </button>
                            {fieldErrors.confirmPassword && <div className="invalid-feedback">{fieldErrors.confirmPassword}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="form-check mb-3">
                        <input className={`form-check-input ${fieldErrors.terms ? 'is-invalid' : ''}`}
                          id="termsService" type="checkbox" checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)} />
                        <label className="form-label fs-9 text-transform-none" htmlFor="termsService">
                          I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a>
                        </label>
                        {fieldErrors.terms && <div className="invalid-feedback">{fieldErrors.terms}</div>}
                      </div>

                      <button className="btn btn-primary w-100 mb-3" type="submit" disabled={loading}>
                        {loading ? (
                          <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Creating account...</>
                        ) : 'Sign Up'}
                      </button>

                      <div className="text-center">
                        <Link className="fs-9 fw-bold" to="/auth/sign-in">Sign in to an existing account</Link>
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
