import React from 'react';
import iconsSprite from '../../assects/images/img/icons.svg'

type iconPropsType = {
    iconId: string
    weight?: string
    height?: string
    viewBox?: string

}

export const Icon = (props: iconPropsType) => {
    return (

        <svg width={props.weight || "50px" } height={props.height || "50px"}  viewBox={props.viewBox ||"0 0 1024 1024"  } className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>

    );
};
