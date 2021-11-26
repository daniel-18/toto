import { Avatar, Button } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

function Nav(){
    return(
        <div className='nav'>
            <div className="nav_wrapper">
                <div className="avatar">
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>DK</Avatar>
                </div>
                <div className="_add_button">
                    <Button>Nouveau TODO</Button>
                </div>
            </div>
        </div>
    );
}
export default Nav;