import * as React from 'react';
import { ListInfo } from '../../../..'

export const InfoList: React.FC<any> = ({ header, children, footer, setOpen }) => {
    const itemsHeader = [
        { title : "Pays", flexWidth : 1}, 
        { title : "Code", flexWidth : 5}, 
        { title : "Valeur", flexWidth : 1}, 
        { title : "Prix Total", flexWidth : 1}
    ]
    return (
        <ListInfo>
            <li>
                {/* header */}
                <div className='head'>
                    {itemsHeader &&itemsHeader.map((i:any)=><div style={{ flex: i.flexWidth}}>{i.title}</div>)}                    
                </div>
                {/* body */}
                <div style={{ display: "flex" }}>
                    {/* left */}
                    <div style={{ flex: '1 0 0px', margin: '0px', fontSize: '12px', fontWeight: 700, textAlign: 'left' }}>
                        {/* <div><Ma /></div> */}
                    </div>
                    {/* middle */}
                    <div style={{ flex: 5, display: 'flex', flexDirection: 'column' }}>
                        <div className="code" style={{ fontSize: "16px", textTransform: "uppercase", fontWeight: 700 }}>
                            <input
                                defaultValue={"B"}
                                style={{ width: '30px', border: 'none', borderBottom: '1px dashed #8eb2f4', textAlign: 'center' }}
                            // disabled={isDisabled}
                            />
                        </div>
                        <div className="description" style={{}}>
                            <textarea
                                defaultValue={"Selon l'Arrêté du ministre de la santé n°1796-03 du 14 joumada II 1426 (21 juillet 2005)"}
                                style={{ width: '100%', border: 'none', fontSize: '10px', fontFamily: 'monospace' }}
                            // disabled={isDisabled}
                            />
                        </div>
                    </div>
                    {/* middle right */}
                    <div className="codeValue" style={{ flex: 1 }}>
                        <input
                            // defaultValue={tarif.Bcode}
                            style={{ width: '30px', border: 'none', borderBottom: '1px dashed #8eb2f4', textAlign: 'center' }}
                        // disabled={isDisabled}
                        />
                    </div>
                    {/* right */}
                    <div className="prix"
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            whiteSpace: 'nowrap',
                            border: '1px solid transparent',
                            padding: '.1rem .05rem',
                            fontSize: '1rem',
                            borderRadius: '.25rem',
                            transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
                            color: '#fff',
                            backgroundColor: '#28a745',
                            borderColor: '#28a745',
                            height: "20px"
                        }}>
                        {/* <span>{Math.floor(tarif.Bcode * 1.1)}</span> <span>dhs</span> */}
                        <input
                            // defaultValue={`${Math.floor(tarif.Bcode * 1.1)}`}
                            style={{
                                width: '30px', border: 'none',
                                borderBottom: '1px dashed #8eb2f4', textAlign: 'center',
                            }}
                        // disabled={isDisabled}
                        />

                    </div>
                </div>
            </li>
        </ListInfo>
    );
};
