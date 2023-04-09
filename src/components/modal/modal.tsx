import * as React from 'react';
import * as ui from './styles'

export const Modal: React.FunctionComponent<any> = ({ title, openModal, PreviewTitle }) => {
  
    return (
        <ui.Modal>
            <ui.ModalHeader>
                <h2>{title}</h2>
                <span onClick={openModal}>X</span>
            </ui.ModalHeader>
            <ui.ModalContent>
                <div style={{ display: "flex" }}>
                    {/* first data column */}
                    <div style={{ width: '60%', padding: '5px 0', display: "flex", flexDirection: "column" }}>
                        <div>
                            {/* search */}
                            <span>
                                <input
                                    style={{ width: '90%', padding: '5px 0' }}
                                    onChange={({  }: any) => {}}
                                />
                                <button onClick={() => {}}>
                                    <i className="fa fa-search" style={{ padding: '6px' }}></i>
                                </button>
                            </span>
                            {/* filters */}
                            <Filters />

                            {/* data list */}
                            <ui.ModalList>
                                    <li>
                                        <span style={{ fontSize: "14px" }}>
                                            <input type="checkbox" onChange={({  }: any) => {}}
                                                checked={false} />
                                        </span>
                                        <span style={{ fontSize: "14px", width: "80px" }}>mnemonic</span>
                                        <span style={{ fontSize: "12px" }}>name</span>
                                    </li>
                                )
                            </ui.ModalList>
                        </div>
                    </div>

                    <Previews PreviewTitle={PreviewTitle}  />

                </div>
            </ui.ModalContent>
        </ui.Modal>
    );
};

// list search filters
const Filters: React.FC<any> = () => {

    return (
        <div style={{ padding: "10px", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            <ui.Bubble onClick={({  }: any) => {}}>All</ui.Bubble>
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
            < div style={{ marginTop: "15px" }}> {selectedExam && <ui.ModalListData>{
                selectedExam.map((p: any) => <AddExamDetails exam={p} />)
            }</ui.ModalListData>}
            </div >
        </div >
    )
}

const AddExamDetails: React.FC<any> = ({  }) => {
    return (
        <li >

        </li>
    )
}
