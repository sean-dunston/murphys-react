import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Grid, Image, Icon, Input } from 'semantic-ui-react';

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <Container>
            <TopMenu/>
          </Container>
          <Middle/>
        </div>

    );
  }
}

class Middle extends React.Component {
  render() {
    return (

        <div className="murph-background">
          <Grid centered columns={2}>
            <Grid.Column>
              <Image src={"http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"} centered/>
            </Grid.Column>
            <Grid.Column>
              <h3>
              A traditional downtown saloon and eatery in the
              Honolulu Financial District just one block off
              the waterfront, Murphy’s has been a haven for mariners,
              businessmen and locals since 1891.</h3>
            </Grid.Column>
          </Grid>
        </div>


    )
  }
}

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>

            <Image src={"http://murphyshawaii.com/media/2014/04/murphyshawaii.png"} small lefy/>

            <Menu.Item fitted position="right">Home</Menu.Item>

            <Dropdown item text="About US">
              <Dropdown.Menu>
                <Dropdown.Item>BEEEEER</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>St. Partick's Day</Menu.Item>

            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>FOOOD</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>Bar</Menu.Item>

            <Menu.Item fitted><Icon name="search"/></Menu.Item>

          </Container>
        </Menu>
    )
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));