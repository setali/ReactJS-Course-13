import React from 'react'
import Counter from './1-Counter'
import LifeCycle from './2-LifeCycle'
import UnMounting from './3-UnMounting'
import ErrorBoundaries from './4-ErrorBoundaries'
import ListKeys from './5-ListKeys'
import Fragment from './6-Fragment'
import Portal from './7-Portal'
import Form from './8-Form'
import AdvanceSetState from './9-AdvanceSetState'
import CreateRef from './10-CreateRef'
import PureComponent from './11-PureComponent'
import HOCs from './12-HOCs/App'
import Stateless from './13-Stateless'
import ClassVsFunctionComponent from './14-ClassVsFunctionComponent'
import UseState from './15-UseState'

class App extends React.Component {
  render () {
    return (
      <div>
        <UseState />
        {/* <ClassVsFunctionComponent /> */}
        {/* <Stateless /> */}
        {/* <HOCs /> */}
        {/* <PureComponent /> */}
        {/* <CreateRef /> */}
        {/* <AdvanceSetState /> */}
        {/* <Form /> */}
        {/* <Portal /> */}
        {/* <Fragment /> */}
        {/* <ListKeys /> */}
        {/* <ErrorBoundaries /> */}
        {/* <UnMounting /> */}
        {/* <Counter defaultValue={10} />
        <Counter defaultValue={20} />
        <Counter /> */}
      </div>
    )
  }
}

export default App
