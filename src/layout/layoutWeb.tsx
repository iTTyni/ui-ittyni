import * as React from 'react';
import { useTheme } from 'styled-components';
import { Slider } from '../components';
import { 
    GlobalStyles, WrapperWeb, 
    WrapperHeader, WrapperSubheader,
    WrapperMain, WrapperLeftSide,
    WrapperContent, WrapperRightSide,
    WrapperFooter
} from '../..';
import Header from './header/header';
import { Search } from './search/search';

export const LayoutWeb: React.FC<any> = () => {

    const theme = useTheme();
    
    return (
        <>
            <GlobalStyles />
            <WrapperWeb>
                <WrapperHeader>
                    <Header />
                </WrapperHeader>
                <WrapperSubheader>
                    <Search />
                </WrapperSubheader>
                <WrapperMain>
                    <WrapperLeftSide hide>
                        left side wrapper
                    </WrapperLeftSide>
                    <WrapperContent>
                        <div style={{ width: '60%', height: "630px" }}>
                            <Slider fixedHeight={630} />
                        </div>
                        <div style={{ width: '40%', padding: "0 35px" }}>
                            <div style={{
                                borderBottom: "1px solid #e1e1e1",
                                paddingBottom: "15px",
                            }}>
                                <div>
                                    <span style={{}}>reviews</span>
                                    <span style={{
                                        borderLeft: "1px solid #e1e1e1", paddingLeft: "15px",
                                        marginLeft: "15px",
                                    }}>
                                        likes
                                    </span>
                                </div>
                            </div>
                            <div style={{
                                borderBottom: "1px solid #e1e1e1",
                                paddingBottom: "15px",
                            }}>
                                <h4 style={{ fontWeight: "normal", fontSize: "x-large" }}>
                                    A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words,
                                </h4>

                            </div>
                            <div style={{
                                borderBottom: "1px solid #e1e1e1",
                                paddingBottom: "15px",
                            }}>
                                <h1>350 Dhs</h1>

                                <div>
                                    <span style={{}}>vends</span>
                                    <span style={{
                                        borderLeft: "1px solid #e1e1e1", paddingLeft: "15px",
                                        marginLeft: "15px",
                                    }}>
                                        3,440
                                    </span>
                                </div>

                            </div>
                            <div style={{
                                borderBottom: "1px solid #e1e1e1",
                                paddingBottom: "15px",
                            }}>
                                <h4>select</h4>
                                <div>
                                    <h6>color</h6>
                                    <p>
                                        color 1
                                        color 2
                                        color 3
                                    </p>
                                </div>
                                <div>
                                    <h6>size</h6>
                                    <p>
                                        size 1
                                        size 2
                                        size 3
                                    </p>
                                </div>
                            </div>
                            <div style={{
                                borderBottom: "1px solid #e1e1e1",
                                paddingBottom: "15px",
                            }}>
                                <h4>Quantite</h4>
                                <div>
                                    - | 1 | +
                                </div>

                            </div>
                        </div>
                    </WrapperContent>
                    <WrapperRightSide hide>
                        right side content
                    </WrapperRightSide>
                </WrapperMain>
                <WrapperFooter>
                    footer
                </WrapperFooter>
            </WrapperWeb>

        </>

    )
}
