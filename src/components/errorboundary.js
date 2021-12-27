import React from "react";
import image from "../assets/images/broken-robot.png";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("errorLog ", error, errorInfo);
  }

  handleClick() {
    localStorage.clear();
    this.setState(
      {
        hasError: false,
      },
      () => (window.location.href = "/")
    );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div className="pageNotFound error centerForm">
            <img src={image} alt="404" style={{ maxWidth: 200 }} />
            <h2 className="text-center my-2">Oops!! App has crashed</h2>
            <p className="text-center">
              Sorry, it looks like we have encounterd some critical <b>Error</b>
              .
            </p>
            <div className="w-100">
              <ul className="ml-5">
                <li>Check your Network/Internet connection</li>
                <li>Logout and login to the app again</li>
                <li>Clear cache, cookies and histories.</li>
                <li>Open in a Incognito window</li>
                <li>If error persists then reach out to our support</li>
              </ul>
            </div>
            <div className="text-center mt-5">
              <h5>
                <b>
                  <u>
                    <span
                      onClick={this.handleClick}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </span>
                  </u>
                </b>
              </h5>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
