import * as React from 'react';
import { WrapperSubheader } from '../../ui/ui_wrappers';
import { Search } from '../search/search';

export const Subheader: React.FC<any> = ({ }) => {


    return (
        <WrapperSubheader>
            <Search />
        </WrapperSubheader>
    )
}