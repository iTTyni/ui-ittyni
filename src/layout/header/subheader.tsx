import * as React from 'react';
import { WrapperSubheader } from '../../ui/ui_wrappers';
import { Search } from '../search/search';
import { Route } from 'react-router-dom';

export const Subheader: React.FC<any> = ({ }) => {


    return (
        <WrapperSubheader>
            <Route path={`/`} component={Search} exact/>
        </WrapperSubheader>
    )
}