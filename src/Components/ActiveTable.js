import React from "react";
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';

const ActiveTable = () => {
    return (
        <table>

            <tr>
                <td className="featureTitle">Centralized teams</td>
                <td className=" one" ><div  className="green"><StopOutlinedIcon  className="icongreen" /></div></td>
                <td className="two" ><div  className="green"><StopOutlinedIcon className="icongreen"/></div></td>
                <td className="three" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
            </tr>
            <tr>
                <td  className="featureTitle">Version history</td>
                <td className="one" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
                <td className="two" ><div  className="green"><StopOutlinedIcon  className="icongreen" /></div></td>
                <td className="three" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
            </tr>
            <tr>
                <td  className="featureTitle">Plugin administration</td>
                <td className="one" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
                <td className="two" ><div  className="green"><StopOutlinedIcon  className="icongreen" /></div></td>
                <td className="three" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
            </tr>
            <tr>
                <td  className="featureTitle">Facebook & Instagram Ads</td>
                <td className=" one" ><div  className="red"><StopOutlinedIcon  className="iconred"/></div></td>
                <td className="two" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
                <td className="three" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
            </tr>
            <tr>
                <td  className="featureTitle">Design System Analytics</td>
                <td className="one" ><div  className="red"><StopOutlinedIcon className="iconred"/></div></td>
                <td className="two" ><div  className="red"><StopOutlinedIcon className="iconred"/></div></td>
                <td className="three" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
            </tr>
            <tr>
                <td  className="featureTitle">Unlimited cloud storage</td>
                <td className="one" ><div  className="red"><StopOutlinedIcon className="iconred"/></div></td>
                <td className="two" ><div  className="red"><StopOutlinedIcon className="iconred"/></div></td>
                <td className="three" ><div  className="green"><StopOutlinedIcon  className="icongreen"/></div></td>
            </tr>

        </table>
    )
}

export default ActiveTable;
