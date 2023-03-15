import * as React from 'react';
import { useTheme } from 'styled-components';
import { Slider } from '../components';
import * as UI from '../ui';
import Header from './header/header';
import { Search } from './search/search';

export const LayoutWeb: React.FC<any> = () => {

    const theme = useTheme();

    console.log(theme);

    return (
        <>
            <UI.GlobalStyles />
            <UI.Wrappers.wrapperWeb>
                <UI.Wrappers.wrapperHeader>
                    <Header />
                </UI.Wrappers.wrapperHeader>
                <UI.Wrappers.wrapperSubheader>
                    <Search />
                </UI.Wrappers.wrapperSubheader>
                <UI.Wrappers.wrapperMain>
                    <UI.Wrappers.wrapperLeftSide hide>
                        left side wrapper
                    </UI.Wrappers.wrapperLeftSide>
                    <UI.Wrappers.wrapperContent>
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
                    </UI.Wrappers.wrapperContent>
                    <UI.Wrappers.wrapperRightSide hide>
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
