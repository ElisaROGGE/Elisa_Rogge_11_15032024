import { Route, Routes as RoutesContainer } from 'react-router-dom';
import * as URL from './routes';
import HomeView from './views/Home/HomeView';
import LocationView from './views/Location/LocationView';

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
        </RoutesContainer>
    );
};

export default Router;