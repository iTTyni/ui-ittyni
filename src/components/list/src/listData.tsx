import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListContainer } from '../../../..';

/*
    data : 
    [
        {key1: "data1", key2: "data2", key3: "data3"},
        {key1: "data1", key2: "data2", key3: "data3"},
        {key1: "data1", key2: "data2", key3: "data3"},
        {key1: "data1", key2: "data2", key3: "data3"},
        {key1: "data1", key2: "data2", key3: "data3"},
        {key1: "data1", key2: "data2", key3: "data3"},
        {key1: "data1", key2: "data2", key3: "data3"},
    ]
*/

export const ListData: React.FC<any> = ({ data }) => {


    return (
        <ListContainer noDecor>
            {data && data.map((d: any) =>
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
        </ListContainer>
    );
};

