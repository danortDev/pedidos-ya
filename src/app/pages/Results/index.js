import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { search } from 'app/actions/results';
import queryStringToObject from 'app/utils/queryStringToObject';
import Button from 'app/components/ui/Button';
import LoadingOverlay from 'app/components/ui/LoadingOverlay';
import Result from './Result';
import { Container, Title, ButtonWrapper } from './elements';


class Results extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const { history, actions, location: { search } } = this.props;
    const { lat, lng } = queryStringToObject(search);
    if (!lat || !lng) history.push('/');
    actions.search({ lat, lng }).then(() => {
      this.setState({ loading: false });
    });
  }

  goBack = () => {
    const { history } = this.props;
    history.push('/');
  }

  renderBackButton = () => (
    <Button onClick={this.goBack}>
      Go back
    </Button>
  );

  render() {
    const { results } = this.props;
    const { loading } = this.state;

    if (loading) return (
      <LoadingOverlay />
    );

    if (!results || !results.count) return (
      <Container>
        <Title>
          Oops! no results found.
        </Title>
        {this.renderBackButton()}
      </Container>
    );

    return (
      <div>
        {results.data.slice(0, 20).map((result, index) => (
          <Result key={index} {...result} />
        ))}
        <ButtonWrapper>
          {this.renderBackButton()}
        </ButtonWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.app.results
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ search }, dispatch)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Results);
