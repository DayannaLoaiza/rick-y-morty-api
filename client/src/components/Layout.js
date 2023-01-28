import React from 'react';
import {MemoryRouter, Redirect, Route, Switch} from 'react-router-dom';
import CacheRoute, {CacheSwitch} from 'react-router-cache-route';

import MenuBar from './MenuBar';
import Content from './Content';
import SideBar from './SideBar';
import ContentBody from './ContentBody';

import CharactersPage from '../pages/CharactersPage';
import LocationsPage from '../pages/LocationsPage';
import EpisodesPage from '../pages/EpisodesPage';
import GraficoPage from '../pages/GraficoPage';

import './css/Layout.css';
import { useAuth0 } from "@auth0/auth0-react";

function Layout(props){
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <div className='Layout'>
                <MenuBar title='Explorador de API de Rick & Morty'/>
                <MemoryRouter>
                    <Content>
                        <SideBar />
                        <ContentBody>
                            <CacheSwitch>
                                <CacheRoute path='/characters'>
                                    <CharactersPage />
                                </CacheRoute>
                                <CacheRoute path='/characters/p/:page'>
                                    <CharactersPage />
                                </CacheRoute>
                                <CacheRoute path='/locations'>
                                    <LocationsPage />
                                </CacheRoute>
                                <CacheRoute path='/episodes'>
                                    <EpisodesPage />
                                </CacheRoute>
                                <CacheRoute path='/grafico'>
                                    <GraficoPage />
                                </CacheRoute>
                                
                                <Redirect to='/characters' />
                            </CacheSwitch>
                        </ContentBody>
                    </Content>
                </MemoryRouter>
            </div>
        )
    )
}

export default Layout;