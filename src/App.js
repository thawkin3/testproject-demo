import './App.css'
import { RequestForm } from './RequestForm'

export const App = () => {
  return (
    <main>
      <h1>TestProject JavaScript OpenSDK Demo</h1>
      <div className="introduction">
        <p>
          Let's pretend that the form below is used to request a product demo.
        </p>
        <p>
          You can find the{' '}
          <a href="https://github.com/thawkin3/testproject-demo">
            source code on GitHub
          </a>{' '}
          to view the end-to-end tests written for this app using the{' '}
          <a href="https://github.com/testproject-io/javascript-opensdk">
            TestProject JavaScript OpenSDK
          </a>
          .
        </p>
      </div>
      <RequestForm />
    </main>
  )
}
