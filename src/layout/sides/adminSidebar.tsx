import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WrapperLeftSide, WrapperLeftSideFouter, WrapperLeftSideHeader } from "../../ui/ui_wrappers"

export const ExtensionsAdminMenu: React.FC<any> = ({ linkToExtManager, accountId, user, extensions }) => {

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
                                <Link to={`/admin/${user?.email?.split('@')[0]}/${p?.component.name}`} >
                                    {p?.component.name.toUpperCase()}
                                </Link>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export const AdminSidebar: React.FC<any> = ({ user }) => {
    const { permissions } = useSelector(({ auth }: any) => auth.user);
    return (
        <WrapperLeftSide>

            {user &&
                <>
                    <WrapperLeftSideHeader>
                        <div>
                            <img src={user.picture} height="60" width="60" />
                        </div>
                        <div style={{ padding: '5px' }}>
                            {user.firstName} {user.lastName}
                        </div>
                    </WrapperLeftSideHeader>
                    <ul style={{ listStyle: 'none' }}>
                        <li><Link to={`/admin/${user.email.split('@')[0]}/profile`}> Profile </Link></li>
                        <li><Link to={`/admin/${user.email.split('@')[0]}/settings`}> Settings </Link></li>
                        <li><Link to={`/admin/${user.email.split('@')[0]}/parapharma/listParapharma`}> list Para </Link></li>
                    </ul>

                    <ExtensionsAdminMenu 
                        linkToExtManager={`/admin/${user.email.split('@')[0]}/addExtension`}
                        extensions={permissions}
                        user={user}
                    />
                    <WrapperLeftSideFouter>
                        <h5 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>Espaces</span>
                            <Link to={`/admin/${user.email.split('@')[0]}/addSpaces`}><i className="fas fa-plus" /></Link>
                        </h5>
                        <Link to={`/admin/${user.email.split('@')[0]}`}>
                            <i className="fas fa-sign-out-alt" /> Mon Compte
                        </Link>
                        {user?.accounts.map((s: any) =>
                            <>
                                <Link to={`/space/${user?.email.split('@')[0]}/${s.labo?._id||s.space?._id}`} key={s.labo?._id||s.space?._id}>
                                    <i className="fas fa-sign-out-alt" /> {s.labo?.account.name||s.space?.account.name}
                                </Link>
                            </>
                        )}
                    </WrapperLeftSideFouter>
                </>
            }
            {!user && <div>connecter vous!!</div>}

        </WrapperLeftSide>
    )
}
