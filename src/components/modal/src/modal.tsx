import * as React from 'react';
import { ModalHeader, ModalContent, ModalListData, ModalContainer, Bubble } from '../../../..';
import { useDraggable } from '../../../hooks/useDraggeable';




export const Modal: React.FunctionComponent<any> = ({ header, openModal, PreviewTitle, children }) => {
    const el: any = React.useRef();
    useDraggable(el);
    return (
        <ModalContainer >
            <span onClick={openModal} className='close'><i className='fas fa-times-circle'/></span>
            <ModalHeader ref={el}>{header}</ModalHeader>
            <ModalContent>{children}</ModalContent>
        </ModalContainer>
    );
};

// list search filters
const Filters: React.FC<any> = () => {

    return (
        <div style={{ padding: "10px", display: "flex", flexWrap: "wrap" }}>
            <Bubble onClick={() => { }}>All</Bubble>
        </div>
    )
}
/* second data column : Previews*/
const Previews: React.FC<any> = ({ PreviewTitle, selectedExam }) => {

    return (
        <div style={{ width: '40%', padding: '5px 0', display: "flex", flexDirection: "column" }}>

            {/* actions menu */}
            < div style={{ height: "30px", border: "1px solid gray", padding: "5px" }}>
                <span>{PreviewTitle}</span>
            </div >

            {/* Previews section */}
            < div style={{ marginTop: "15px" }}> {selectedExam && <ModalListData>{
                selectedExam.map((p: any) => <AddExamDetails exam={p} />)
            }</ModalListData>}
            </div >
        </div >
    )
}

const AddExamDetails: React.FC<any> = ({ }) => {
    return (
        <li >

        </li>
    )
}
