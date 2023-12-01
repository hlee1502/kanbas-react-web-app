import * as client from "./client";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };
    
    const save = async () => {
        await client.updateUser(account);
    };

    useEffect(() => {
        if (id) {findUserById(id);} 
        else {fetchAccount();}
    }, []);
    

    return(
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <div className="form-floating w-75 mb-2">
                        <input className="form-control" id="accountPassword" value={account.password}
                            onChange={(e) => setAccount({...account, password: e.target.value})}/>
                        <label for="accountPassword">Password</label>
                    </div>
                    <div className="form-floating w-75 mb-2">
                        <input className="form-control" id="firstName" value={account.firstName}
                            onChange={(e) => setAccount({...account, firstName: e.target.value})}/>
                        <label for="firstName">First Name</label>
                    </div>
                    <div className="form-floating w-75 mb-2">
                        <input className="form-control" id="lastName" value={account.lastName}
                            onChange={(e) => setAccount({ ...account, lastName: e.target.value })}/>
                        <label for="lastName">Last Name</label>
                    </div>
                    <div className="form-floating w-75 mb-2">
                        <input className="form-control" id="dob" value={account.dob}
                            onChange={(e) => setAccount({ ...account, dob: e.target.value })}/>
                        <label for="dob">Date of Birth</label>
                    </div>
                    <div className="form-floating w-75 mb-2">
                        <input className="form-control" id="email" value={account.email}
                            onChange={(e) => setAccount({ ...account, email: e.target.value })}/>
                        <label for="email">Email</label>
                    </div>
                    <div className="form-floating w-75 mb-2">
                        <select class="form-select" id="selectAccountType" onChange={(e) => setAccount({ ...account, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                        <label for="selectAccountType">Choose Account Type:</label>
                    </div>
                    
                </div>
            )}
            <div>
                <button className="btn btn-primary w-75 mb-2" onClick={save}>Save</button>
            </div>
            <div>
                <button className="btn btn-danger w-75 mb-2" onClick={signout}>Signout</button>
            </div>
            <div>
                <Link to="/project/admin/users" className="w-100">
                    <button className="btn btn-warning w-75">Users</button>
                </Link>
            </div>
        </div>
    );
}

export default Account;