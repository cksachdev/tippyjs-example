// @flow

import React, { Component } from "react";
import "./styles.scss";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";

type Props = {};
type State = {
  helpText: string,
};
export default class App extends Component<Props, State> {
  props: Props;

  constructor(props: Object) {
    super(props);
    this.state = {
      helpText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur. Urna neque viverra justo nec ultrices dui sapien eget. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Non enim praesent elementum facilisis leo vel. Quam elementum pulvinar etiam non quam. Tempus quam pellentesque nec nam aliquam. Arcu non odio euismod lacinia. Nisi quis eleifend quam adipiscing. Mauris vitae ultricies leo integer malesuada.",
    };
  }

  render() {
    const { helpText } = this.state;
    return (
      <div className="flexcontainer">
        <div className="flexitem">
          <h1>Tippy example</h1>
        </div>
        <div className="flexitem">
          <Tippy
            interactive={true}
            interactiveBorder={20}
            content={<span className="tooltip-text">{helpText}</span>}
          >
            <i className="fa fa-star-o tooltip-icon" />
          </Tippy>
          Example with content as html
        </div>
        <div className="flexitem">
          <Tippy
            interactive={true}
            interactiveBorder={20}
            content={helpText}
            render={(attrs) => (
              <div className="hundred-width" {...attrs}>
                <span className="tooltip-text" key={Math.random()}>
                  {helpText}
                </span>
              </div>
            )}
          >
            <i className="fa fa-question-circle tooltip-icon" />
          </Tippy>
          Example with render props
        </div>
      </div>
    );
  }
}
