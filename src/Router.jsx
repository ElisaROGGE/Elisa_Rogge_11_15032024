import { Navigate, Route, Routes as RoutesContainer } from 'react-router-dom';
import * as URL from './routes';
import HomeView from './views/Home/HomeView';
import LocationView from './views/Location/LocationView';
import NotFound from './views/NotFound/NotFound';
import About from './views/About/About';

const Router = () => {
    return (
        <RoutesContainer>
            <Route
                path={URL.HOME}
                element={
                    <HomeView />
                }
            />
            <Route
                path={URL.LOCATION}
                element={
                    <LocationView />
                }
            />
            <Route
                path={URL.ABOUT}
                element={
                    <About />
                }
            />
            <Route
                path={URL.NOT_FOUND}
                element={
                    <NotFound />
                }
            />
            <Route
                path='*'
                element={
                    <Navigate to={URL.NOT_FOUND} />
                }
            />
        </RoutesContainer>
    );
};

export default Router;