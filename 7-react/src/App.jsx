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

class App extends React.Component {
  render () {
    return (
      <div>
        <AdvanceSetState />
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
