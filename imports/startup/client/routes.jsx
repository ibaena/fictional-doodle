import { Flowrouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

//Layouts and Pages
import { App } from '../../ui/layouts/App.jsx'
import { Home } from '../../ui/pages/Home.jsx'
import { Explore } from '../../ui/pages/Explore.jsx'

FlowRouter.route('/', {
    action() {
        mount(App, {
            content: <Home />
        });
    }
});
FlowRouter.route('/explore', {
    action() {
        mount(App, {
            content: <Explore />
        });
    }
});
