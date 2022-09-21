import { Fragment } from "react"

const ItemComponent = (props) => {
    return (
        <Fragment>
            <div style={{ paddingTop: '10px' }}>
                <b>{props.name}</b><br />
                {props.description}<br />
                <p><a href={props.html_url}> Acessar Repositório </a></p>
            </div>
            <br></br>
        </Fragment>
    )
} 

export default ItemComponent;