import { Link } from 'react-router-dom';
const Menu = () =>{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/'><span class="sr-only">List Students</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/add-student'>Add Student</Link>
                        </li>                  
                    </ul>
                   
                </div>
            </nav>

        </>
    );
}

export default Menu;