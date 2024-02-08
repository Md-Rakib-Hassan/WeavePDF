import user from '../../../images/allUser.svg'
import usersub from '../../../images/subscribe.svg'
import wallet from '../../../images/wallet.svg'

const Card = () => {
    return (
        <>
            <div className="container my-10 md:px-10">
                <div className="flex gap-10 items-center">
                    <div className="card bg-base-100 shadow-xl p-5 w-80">
                        <div>
                            <h3 className='text-2xl font-bold'>Profile Count</h3>
                        </div>
                        <figure className="px-10 pt-10">
                            <img src={user} alt="Shoes" className="w-24 rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">500+</h2>
                            <p>Profile</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-5 w-80">
                        <div>
                            <h3 className='text-2xl font-bold'>Total Subscriptions</h3>
                        </div>
                        <figure className="px-10 pt-10">
                            <img src={usersub} alt="Shoes" className="w-24 rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">200</h2>
                            <p>User Subscriptions</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-5 w-80">
                        <div>
                            <h3 className='text-2xl font-bold'>Profile Count</h3>
                        </div>
                        <figure className="px-10 pt-10">
                            <img src={wallet} alt="Shoes" className="w-24 rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">1000$</h2>
                            <p>Profile</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Card;