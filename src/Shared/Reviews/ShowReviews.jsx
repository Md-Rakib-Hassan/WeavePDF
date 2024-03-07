import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/grid'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Review from './components/Review';

const ShowReviews = ({ uniqueId, title, subTitle }) => {


    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/user-reviews/${uniqueId}`)
            .then(res => setReviews(res.data));
    }, [axiosPublic, uniqueId])

    return (
        <div className='mt-10 px-2'>

            <h1 className={`${title&&reviews.length>0 ? 'text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4 ' : 'hidden'} `}> {title}</h1>
            <p className={`${subTitle&&reviews.length>0 ? 'text-center lg:w-2/3 mx-auto mb-4 ' : 'hidden'}`}>{subTitle}</p>

            <Swiper

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={
                    {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,

                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,

                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }

                    }
                }
            >

                {reviews.map(review => <SwiperSlide className='my-8' key={review._id}><Review info={review}></Review></SwiperSlide>)}

            </Swiper>

        </div >
    );
};

export default ShowReviews;