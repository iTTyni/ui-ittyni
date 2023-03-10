import * as React from 'react';
import {StyledCardContainer} from '../../../ui'

export const Card: React.VFC<any>= ({})=> {
    return (
        <StyledCardContainer>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </StyledCardContainer>
    );
};
