import sponsorhipPackage from './Hack_the_Horizon.pdf';
import './styles.css'

const SponsorshipPackage = () => {
    return (
        <iframe src={sponsorhipPackage} className='pdf-frame'></iframe>
    );
};

export default SponsorshipPackage;