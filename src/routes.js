import React from "react";
import { Switch, Route } from "react-router-dom";
import FruitShop from './components/FruitShop';

export default (
    <Switch>
        <Route exact path='/' component={FruitShop} />
    </Switch>
)