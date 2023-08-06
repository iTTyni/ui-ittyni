import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WrapperLeftSide, WrapperLeftSideFouter, WrapperLeftSideHeader } from "../../ui/ui_wrappers"

export const AdminSidebar: React.FC<any> = ({ user }) => {

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
                    </ul>
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
                                <Link to={`/space/${user?.email.split('@')[0]}/${s.labo?._id||s.space?._id}`}>
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
