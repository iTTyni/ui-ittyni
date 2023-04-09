import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WrapperLeftSide } from "../../ui/ui_wrappers"

export const AdminSidebar: React.FC<any> = ({ user }) => {

    return (
        <WrapperLeftSide>

            {user &&
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        paddingBottom: '10px',
                        marginBottom: '10px',
                        borderBottom: '1px solid #f1f1f1',
                        alignItems: 'center'
                    }}>
                        <div>
                            <img src={user.picture} height="60" width="60" />
                        </div>
                        <div style={{ padding: '5px' }}>
                            {user.firstName} {user.lastName}
                        </div>
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                        <li><Link to={`/admin/${user.email.split('@')[0]}/profile`}> Profile </Link></li>
                        <li><Link to={`/admin/${user.email.split('@')[0]}/settings`}> Settings </Link></li>
                    </ul>
                </div>
            }
            {!user && <div>connecter vous!!</div>}

        </WrapperLeftSide>
    )
}
