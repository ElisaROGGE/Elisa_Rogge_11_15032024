import { Route, Routes as RoutesContainer } from 'react-router-dom';
import * as URL from './routes';
import HomeView from './views/Home/HomeView';

const Router = () => {
    return (
        <RoutesContainer>
            <Route
                path={URL.HOME}
                element={
                    <HomeView />
                }
            />
        </RoutesContainer>
    );
};

export default Router;