import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const InsightsLevel = (props) => {
  return (
    <ButtonGroup justified class>
      <Button href="#" onClick={() => props.onChange("campaign")}>Campaign</Button>
      <Button href="#" onClick={() => props.onChange("adset")}>Adset</Button>
      <Button href="#" onClick={() => props.onChange("ad")}>Ad</Button>
    </ButtonGroup>
  );
};

export default InsightsLevel;

