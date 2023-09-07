import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { WrapperLeftSide, WrapperLeftSideHeader } from '../../ui/ui_wrappers';

export const ExtensionsMenu: React.FC<any> = ({ linkToExtManager, accountId, user }) => {
    const { extensions } = useSelector(({ space }: any) => space);
    console.log(extensions)
    return (
        <div>
            <div>
                <h5 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '150px' }}>
                    <span>Modules</span>
                    <Link to={linkToExtManager}><i className="fas fa-plus" /></Link>
                </h5>
                <ul style={{ display: 'flex', flexDirection: "column", listStyle: "none" }}>
                    {!extensions && <span>loading....</span>}
                    {extensions?.map(
                        (p: any) =>
                            <li key={p._id}>
                                <Link to={`/space/${user?.email?.split('@')[0]}/${accountId}/${p?.name}`} >
                                    {p?.name.toUpperCase()}
                                </Link>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export const AccountMenu: React.FC<any> = ({ user, space }) => {

    const { accountId } = useParams<any>();

    return (
        <WrapperLeftSide>
            <WrapperLeftSideHeader>
                <div>
                    <img src={user.picture} height="60" width="60" />
                </div>
                <div style={{ padding: '5px' }}>
                    {space?.account.name}
                </div>
            </WrapperLeftSideHeader>
            {user && <ul style={{ listStyle: "none" }}>
                <li><Link to={`/space/${user.email.split('@')[0]}/${accountId}/profile`}>Profile</Link></li>
                <li><Link to={`/space/${user.email.split('@')[0]}/${accountId}/settings`}>Settings</Link></li>
            </ul>}
            <ExtensionsMenu
                linkToExtManager={`/space/${user.email.split('@')[0]}/${accountId}/addExtension`}
                user={user}
                accountId={accountId}
            />
        </WrapperLeftSide>
    )
}
