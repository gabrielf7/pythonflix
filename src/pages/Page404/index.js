import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

export const Page404 = () => (
    <PageDefault>
        <div align="center">
            <h2>Esta página não existe, ERROR 404</h2>
            <p><Link to="/">Volte para home</Link></p>
        </div>
    </PageDefault>
)

export default Page404;