import LogoMasOnline from '../assets/images/logo_masonline.svg';
import LogoCarrefour from '../assets/images/logo_carrefour.svg';
import LogoVea from '../assets/images/logo_vea.webp';

export const LogoCard = ({market}) => {
  
    if(market == 'vea') return        <img className="w-16 h-16" src={LogoVea} alt='logo-vea'/>
    if(market == 'carrefour') return  <img className="w-16 h-16" src={LogoCarrefour} alt='logo-carrefour'/>
    if(market == 'masonline') return  <img className="w-16 h-16" src={LogoMasOnline} alt='logo-masonline'/> 
    return null;
}
