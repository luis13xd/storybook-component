import './MyLabel.css';

interface Props {
    /**
    *Text To Display
    */
    label: string;
    /**
    *Label Size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
     /**
    *All Caps
    */
    allCaps?: boolean;
    /**
    *Color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
    *Font Color
    */
    fontColor?: string;
    /**
    *Background Color
    */
    backgroundColor?: string;
}

export const MyLabel = ({label, size='normal', allCaps=false, color, fontColor, backgroundColor='transparent'}:Props) => {
  return (
    <span 
        className={`${size} ${color} label`} 
        style={{color: fontColor, backgroundColor}}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
