import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        acaiBowl: state.acaiBowl,
        /*comments: state.comments,
        partners: state.partners,
        promotions: state.promotions*/
    };
};

class Main extends Component {

    onacaiBowlelect(acaiId) {
        this.setprops({selectedacai: acaiId});
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    acai={this.props.acaiBowl.filter(acai => acai.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const acaiWithId = ({match}) => {
            return (
                <acaiInfo 
                    acai={this.props.acaiBowl.filter(acai => acai.id === +match.params.acaiId)[0]}
                    comments={this.props.comments.filter(comment => comment.acaiId === +match.params.acaiId)}
                />
            );
        };    

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory acaiBowl={this.props.acaiBowl} />} />
                    <Route path='/directory/:acaiId' component={acaiWithId} />
                    <Route exact path='/contactus' component={Contact} />

                    <Route path='/aboutus' render={() => <About partners={this.props.partners} />} />

                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));