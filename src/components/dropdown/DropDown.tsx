import React from 'react'
import "./DropDown.styles.scss"
import Button from '../button/Button'


interface DropDownProps {
    showMenu : boolean,
    
}
const DropDown :React.FC<DropDownProps> = (props) => {
    return (
        <div className={`dropdown ${props.showMenu?"show":"hide"}`}>
               <ul>
                        <li>
                            <a className="tag" href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>

                        <Button>Register</Button>

                    </ul>
        </div>
    )
}

export default DropDown
