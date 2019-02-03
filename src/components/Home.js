import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'
import { Button} from 'reactstrap';


const Home = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div id="home">
        <header className="wt-header">
            <h1>
                WheelThrive
            </h1>
            <Button color="primary" size="lg">
                Get Started
            </Button>
        </header>
      </div>
    </CSSTransitionGroup>
  )
}

export default Home
