import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class LevelButtons extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this);

  }
  renderButton(key, text) {
    const { input } = this.props;
    return (
      <Button
        href="#"
        active={input.value == key}
        onClick={() => input.onChange(key)}>
        {text}
      </Button>
    );
  }

  render() {
    const { disabled, input: { value, onChange } } = this.props;
    return (
      <ButtonGroup justified disabled={disabled}>
        {this.renderButton("campaign", "Campaign")}
        {this.renderButton("adset", "Adset")}
        {this.renderButton("ad", "Ad")}
      </ButtonGroup>
    );
  }
};

export default LevelButtons;
