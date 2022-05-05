import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import ItemCards from '../../components/ItemCards/ItemCards';
import auth from '../../firebase.init';
import useGetItems from '../../hooks/useGetItems';
import './Home.css';

const Home = () => {
    const [items] = useGetItems();
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
              <CircularProgress />
            </Box>
          );
    }
   
    return (
        <div>
            <div className="banner-area"></div>
            <div className="inventory-items-area mt-5">
                <h1 className='text-3xl text-center my-5'>Inventory Items</h1>
                <div className="item-cards grid grid-cols-3 gap-6 mx-auto w-10/12">
                    {items.map(item => <ItemCards key={item._id} data={item} delete={false} ></ItemCards>).slice(0,6)}
                </div>
                <div className="manage-inv-btn text-center">
                    <button onClick={() => navigate('/manage-inventory')} className='bg-[#2B2D42] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Manage Inventory</button>
                </div>
            </div>
        </div>
    );
};

export default Home;