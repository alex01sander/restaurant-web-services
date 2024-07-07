import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route,   } from 'react-router-dom';
import { auth } from '../../../utils/firebase';
import { GlobalStyles } from '../../../styles/GlobalStyles';
import { Header } from '../../Header/Header';
import { ToastContainer } from 'react-toastify';
import { Home } from '../Home/home';

import { Categories } from '../Categories';

export function Routes(){
    const [user, loading] = useAuthState(auth);

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <>
            <Router>
                <GlobalStyles />
                {user?.email === 'admin@example.com' && <Header />}
                    <Route path="/" element={<Home />} />
                    <Route path="/cardapio" element={<Categories />} />

                <ToastContainer position="bottom-center" />
            </Router>
        </>
    );
}

