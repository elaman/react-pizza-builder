import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });

        return request;
      });
      this.responseInterceptor = axios.interceptors.response.use(null, error => {
        this.setState({ error: error });

        return error;
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorDismissHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          <Modal
            open={this.state.error}
            toggleHandler={this.errorDismissHandler}>
            <h3>
              {this.state.error ? this.state.error.message : null}
            </h3>
          </Modal>
        </div>
      );
    }
  }
}

export default withErrorHandler;