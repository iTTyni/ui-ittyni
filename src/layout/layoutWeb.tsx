import * as React from 'react';
import { useTheme } from 'styled-components';
import { Slider } from '../components/slider';
import * as UI from '../ui';
import Header from './header/header';
import { Search } from './search/search';

export const LayoutWeb: React.VFC<any> = () => {

    const theme = useTheme();

    console.log(theme);

    return (
        <>
            <UI.GlobalStyles />
            <UI.Wrappers.wrapperWeb>
                <UI.Wrappers.wrapperHeader>
                    <Header/>
                </UI.Wrappers.wrapperHeader>
                <UI.Wrappers.wrapperSubheader>
                    <Search />
                </UI.Wrappers.wrapperSubheader>
                <UI.Wrappers.wrapperMain>
                    <UI.Wrappers.wrapperLeftSide hide>
                        left side wrapper
                    </UI.Wrappers.wrapperLeftSide>
                    <UI.Wrappers.wrapperContent>
                        <Slider />
                    </UI.Wrappers.wrapperContent>
                    <UI.Wrappers.wrapperRightSide>
                        right side content
                    </UI.Wrappers.wrapperRightSide>
                </UI.Wrappers.wrapperMain>
                <UI.Wrappers.wrapperFooter>
                    footer
                </UI.Wrappers.wrapperFooter>
            </UI.Wrappers.wrapperWeb>
        </>

    )
}