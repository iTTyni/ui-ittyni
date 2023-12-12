import * as React from 'react';
import {StyledCardContainer} from '../../../../'

export const CardWithTitleTextAndLink: React.FC<any>= ({})=> {
    return (
        <StyledCardContainer>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </StyledCardContainer>
    );
};

export const CardHeader: React.FC<{
    title: string,
    EditMenu?: JSX.Element,
    NavMenu?: JSX.Element
}> = ({ title, EditMenu, NavMenu }) => {

    return (
        <div style={{    display: 'flex', alignItems: 'center'}}>
            <h2 style={{ padding: '5px' }}>
                <span style={{ padding: '0 5px' }}>{title} </span>
            </h2>
            <span style={{ padding: '0 5px' }}>
                {EditMenu}
            </span>
            <span>{NavMenu}</span>
        </div>
       
    )
}
export const CardHeaderWithEditMenu: React.FC<any> = ({ title, isEditMode, edit, cancel, validate, NavMenu }) => {

    return (
        <CardHeader title={title}
            EditMenu={<>
                {isEditMode && <i style={{ padding: '0 5px', color: 'blue', cursor: 'pointer' }}
                    className="fas fa-edit" onClick={edit}
                />}
                {!isEditMode && <>
                    <i style={{ padding: '0 5px', color: 'red', cursor: 'pointer' }}
                        className="fas fa-times"
                        onClick={ cancel } />
                    <i style={{ padding: '0 5px', color: 'green', cursor: 'pointer' }}
                        className="fas fa-check"
                        onClick={validate}
                    />
                </>}
            </>}
            NavMenu={NavMenu}
        />
    )
}
export const CardHeaderWithEditMenuAndNav: React.FC<{
    title: string
    isEditMode?: boolean
    setEditMode: () => void
    cancel: () => void
    validate: () => void
    Nav : [{
        title : string,
        onClick : React.EventHandler<any>
    }]
}> = ({ title, isEditMode, setEditMode, cancel, validate, Nav }) => {

    return (
        <CardHeaderWithEditMenu
            title={title}
            isEditMode={isEditMode}
            setEditMode={setEditMode}
            cancel={cancel}
            validate={validate}
            NavMenu={Nav}
        />
    )
}