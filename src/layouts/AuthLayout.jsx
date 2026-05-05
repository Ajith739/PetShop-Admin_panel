import { Outlet } from 'react-router-dom';
import usePhoenixInit from '../hooks/usePhoenixInit';

export default function AuthLayout() {
  usePhoenixInit();

  return (
    <main className="main" id="top">
      <Outlet />
    </main>
  );
}
