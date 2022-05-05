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
                <div className="information-area flex flex-col sm:flex-row text-center sm:text-left container mx-auto my-8">
                    <div className="information-image">
                        <img src="https://www.mobiledokan.com/wp-content/uploads/2022/04/Samsung-Galaxy-A73-teaser.jpg" alt="mobile banner" />
                    </div>
                    <div className="information-text ml-5">
                        <div className="information-header flex">
                        <div className="information-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="information-title leading-8 font-semibold text-lg">
                            <h3>Get the best collections from us</h3>
                        </div>
                        </div>
                        <div className="information-description mt-6 w-8/12">
                            <p>We offer the best mobile phones from popular brands around the world. Get the best phones from us</p>
                        </div>
                    </div>
                </div>
            <div className="inventory-items-area mt-5">
                <h1 className='text-3xl text-center my-5'>Inventory Items</h1>
                <div className="item-cards grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto w-10/12">
                    {items.map(item => <ItemCards key={item._id} data={item} delete={false} ></ItemCards>).slice(0,6)}
                </div>
                <div className="manage-inv-btn text-center">
                    <button onClick={() => navigate('/manage-inventory')} className='bg-[#2B2D42] text-[#F8F7FF] py-3 px-5 my-3 rounded'>Manage Inventory</button>
                </div>
            </div>
                <h1 className='font-semibold text-3xl my-5 text-center'>Latest News</h1>
            <div className="news-area flex flex-col sm:flex-row container sm:container mx-auto  mb-12">
                <div className="news-card mx-6">
                    <div className="news-image">
                        <img src="https://www.mobiledokan.com/wp-content/uploads/2022/04/Walton-Primo-GH11-teaser.jpg" alt="walton" />
                    </div>
                    <div className="news-title text-lg font-semibold">
                        <h1>Walton Primo GH11: A decent release but with low performance</h1>
                    </div>
                    <div className="news-description">
                        <p>It looks like any other decent waterdrop-notch phone on the outside. There is nothing unique about the design but it’s not too bad either. We have a 6.52 inches HD+ IPS display, 13MP main back camera, 5 MP front camera, 4200 mAh battery, a back-mounted fingerprint sensor and a dedicated MicroSD slot. These are features that you would expect at a low-budget phone.</p>
                    </div>
                </div>
                <div className="news-card mx-6 sm:mx-6 my-3">
                    <div className="news-image">
                        <img src="https://www.mobiledokan.com/wp-content/uploads/2022/04/Xiaomi-12-Pro-teaser.jpg" alt="walton" />
                    </div>
                    <div className="news-title text-lg font-semibold">
                        <h1>Flagship Xiaomi 12 Pro comes with next-level performance, gorgeous design</h1>
                    </div>
                    <div className="news-description">
                        <p>Now, let’s come back to Xiaomi 12 Pro. Firstly, the design with catch your eyes right away. It looks minimal, futuristic and very premium. There is a glass back and aluminum frame so, it’s also premium in terms of material. There is no waterproof certification which is one of the major disadvantages of this phone. The display comes with WQHD+ resolution, LTPO AMOLED technology and 120Hz refresh rate. That’s another level of true-flagship experience and there is no room for complaints here. Plus it is protected by a strong Gorilla Glass Victus.</p>
                    </div>
                </div>
                <div className="news-card mx-6">
                    <div className="news-image">
                        <img src="https://www.mobiledokan.com/wp-content/uploads/2022/04/Xiaomi-Redmi-10A-teaser.jpg" alt="walton" />
                    </div>
                    <div className="news-title text-lg font-semibold">
                        <h1>Xiaomi brings low-budget Redmi 10A with typical features</h1>
                    </div>
                    <div className="news-description">
                        <p>Now, the previous recent Redmi 10 series releases were strongly impressive. We are talking about Redmi 10C and Redmi 10 2022. Unfortunately, we can’t say the same for Redmi 10A. Of course, it comes at a very low price and we can’t really expect too much. But compared to the other releases of Xiaomi and the current competition in the market, Redmi 10A slides behind. It just comes with a very average-looking, ordinary specs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;