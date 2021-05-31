import { By } from 'selenium-webdriver'
import { Builder } from '@tpio/javascript-opensdk'

describe('App', () => {
  const testUrl = 'http://localhost:3000/testproject-demo/build/'

  let driver

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build()
  })

  afterEach(async () => {
    await driver.quit()
  })

  it('allows the user to submit the form when filled out properly', async () => {
    await driver.get(testUrl)
    await driver.findElement(By.css('#firstName')).sendKeys('John')
    await driver.findElement(By.css('#lastName')).sendKeys('Doe')
    await driver.findElement(By.css('#email')).sendKeys('john.doe@email.com')
    await driver.findElement(By.css('#requestDemo')).click()

    await driver
      .findElement(By.css('#submissionConfirmationText'))
      .isDisplayed()
  })

  it('prevents the user from submitting the form when not filled out properly', async () => {
    await driver.get(testUrl)
    await driver.findElement(By.css('#requestDemo')).click()

    await driver.findElement(By.css('#firstNameError')).isDisplayed()
    await driver.findElement(By.css('#lastNameError')).isDisplayed()
    await driver.findElement(By.css('#emailError')).isDisplayed()
  })
})
