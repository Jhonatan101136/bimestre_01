import React, { Fragment, useEffect, useState } from 'react';
import ItemComponent from './ItemComponent';



const ListComponent = () => { 

    const [repos, setRepos] = useState();

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then((res) => res.json())
            .then((data) => setRepos(data));
    }, []);

    return <Fragment>
        <div style={{ paddingLeft: '30px', paddingTop: '15px' }}>
            <label>
                <b style={{ fontSize: '25px' }}>Lista de Repositórios</b>
            </label>
            {repos?.map((item) => (
                <ItemComponent name={item.name} description={item.description} html_url={item.html_url} />
            ))}
        </div>
    </Fragment>
}

export default ListComponent;