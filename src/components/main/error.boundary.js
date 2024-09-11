import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // 에러를 여기서 처리할 수 있으며, 로그를 남기거나 대체 UI를 표시할 수 있습니다.
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생했을 때 사용자에게 표시할 사용자 지정 에러 메시지나 대체 UI를 렌더링할 수 있습니다.
      return <div>오류가 발생했습니다. 나중에 다시 시도해주세요.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
