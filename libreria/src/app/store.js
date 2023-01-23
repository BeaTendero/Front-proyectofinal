import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Containers/User/userSlice';
import LibrosSlice from '../Containers/Libros/LibrosSlice';


export default configureStore({
    reducer: {
         user: userSlice,
        libro: LibrosSlice,
        

    }

});