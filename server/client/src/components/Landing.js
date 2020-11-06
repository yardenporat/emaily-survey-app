import React, { Fragment } from 'react';
import AddButton from './surveys/AddButton';
const Landing = () => {
    return (
        <Fragment>
            <div className='center ' style={{ paddingBottom: '25px' }}>
                <h1>Emaily!</h1>
                Collect feedback from your users
            </div>
            <AddButton />
        </Fragment>
    );
};

export default Landing;
