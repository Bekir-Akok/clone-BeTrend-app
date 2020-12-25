import { useContext,} from 'react';
import { BannerContext } from './Context/BannerContext';


const BannerTheree = () => {

    const {banners} = useContext(BannerContext)

        return(
            banners.map((banner) => (
                <div className="card-main-3">
                <div className="card-3">
                    <a href="/category">
                        <div className="card-img-3">
                            <img src={banner.src}></img>
                        </div>
                        <div className="card-text-3">
                            <p>Lorem ipsum</p>
                            <p>Alışverişe Başla <i className="fas fa-angle-right"></i></p>
                        </div>
                    </a>
                </div>
            </div>
            ))
        )
}


export default BannerTheree