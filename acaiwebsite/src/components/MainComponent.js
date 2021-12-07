import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        acaiBowl: state.acaiBowl,
        ingredients: state.ingredients,
        abouts: state.abouts,
        promotions: state.promotions,
        homeInfo: state.homeInfos
    };
};

class Main extends Component {

    onacaiSelect(acaiId) {
        this.setprops({selectedAcai: acaiId});
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    acai={this.props.acaiBowl.filter(acai => acai.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    about={this.props.abouts.filter(about => about.featured)[0]}
                    homeInfo={this.props.homeInfos.filter(homeInfo => homeInfo.featured)[0]}
                />
            );
        };

        const AcaiWithId = ({match}) => {
            return (
                <Menu 
                    acai={this.props.acaiBowl.filter(acai => acai.id === +match.params.acaiId)[0]}
                    ingredients={this.props.ingredients.filter(ingredient => ingredient.acaiId === +match.params.acaiId)}
                />
            );
        };    

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory acaiBowl={this.props.acaiBowl} />} />
                    <Route path='/directory/:acaiId' component={AcaiWithId} />
                    <Route exact path='/contactus' component={Contact} />

                    <Route path='/aboutus' render={() => <About abouts={this.props.abouts} />} />

                    <Route path='/homeInfos' render={() => <homeInfo homeInfos={this.props.homeInfos} />} />

                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));