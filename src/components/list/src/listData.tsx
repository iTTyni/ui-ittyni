import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListContainerStyled, ListItemStyled } from '../../../..';

export const ListContainer: React.FC<any> = ({ data }) => {


    return (
        <ListContainerStyled noDecor>
            {data?.map((d: any) =>
                <li key={d.link}>
                    <Link to={d.link}>
                        <div>
                            <span>{d.ico}</span>
                        </div>
                        <div>
                            <span>{d.name}</span>
                            <span>{d.description}</span>
                        </div>
                        <div></div>
                    </Link>
                </li>
            )}
        </ListContainerStyled>
    );
};

export const ListItem: React.FC<{
    children?: any
    customStyles?: {
        display: any
    }
    [key : string]: any
}> = ({children, customStyles})=>{
    return(
        <ListItemStyled {...customStyles}>
            {children}
        </ListItemStyled>
    )
}


