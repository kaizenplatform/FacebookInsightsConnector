import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class LevelButtons extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(key, text) {
    const { value, onChange } = this.props;
    return (
      <Button
        href="#"
        active={value == key}
        onClick={() => onChange(key)}>
        {text}
      </Button>
    );
  }

  render() {
    const { disabled } = this.props;
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
