import { By } from 'selenium-webdriver'
import { Builder } from '@tpio/javascript-opensdk'

describe.skip('Example TestProject Site', () => {
  it('submits a login form', async () => {
    const driver = await new Builder().forBrowser('chrome').build()

    await driver.get('https://example.testproject.io/web/')
    await driver.findElement(By.css('#name')).sendKeys('John Smith')
    await driver.findElement(By.css('#password')).sendKeys('12345')
    await driver.findElement(By.css('#login')).click()

    await driver.findElement(By.css('#logout')).isDisplayed()

    await driver.quit()
  })
})
