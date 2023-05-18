import * as React from 'react';
import { SearchContainer } from '../../../ui/ui_search';
import { Input } from '../../../..'

export const Search: React.FC<any> = () =>{

    return (
        <SearchContainer>
            <Input border='none'/>
            <span><i className='fas fa-search'/></span>
        </SearchContainer>
    )
}