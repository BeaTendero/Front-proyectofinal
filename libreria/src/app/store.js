import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import LibrosSlice from '../Containers/Libros/LibrosSlice';


export default configureStore({
    reducer: {
        user: userSlice,
        libro: LibrosSlice,
        

    }

});