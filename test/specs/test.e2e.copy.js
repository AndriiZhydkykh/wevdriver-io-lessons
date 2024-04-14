const { expect, browser, $ } = require('@wdio/globals')

describe('wdio commands', () => {
    it('AT1 - Login with the correct credential', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)// open url
        await browser.pause(2000)

        const userNameField = await $('input#username')// make a variable with a selector for user name field 
        const userPasswordField = await $('input#password') // make a variable with a selector for the user password field 
        const sbmButton = await $('button[type="submit"]')// make a variable with a selector for submit button
        const fleshMessage = await $('div#flash')// make a variable with a selector for fleshMessage aster click submit button


        await userNameField.addValue('tomsmith')  // set user name field
        await browser.pause(2000)                 // add pause 2 second
        await userNameField.addValue('tomsmith1') // type into user name field additional text
        await browser.pause(2000)                 // add pause 2 second
        await userNameField.setValue('tomsmith')  // clear user name field and type into this field text
        await browser.pause(2000)

        await expect(userNameField).toHaveValue('tomsmith') //check that user name value has tomsmith text
        await expect(userNameField).toHaveValue(expect.stringContaining('toms')) //check that user name value contain toms text

        await userPasswordField.addValue('SuperSecretPassword!')
        await expect(userPasswordField).toHaveValue('SuperSecretPassword!')
        await sbmButton.click()

        await expect(fleshMessage).toBeDisplayed()
        await expect(fleshMessage).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })
    it('AT2 - get attribute and get value', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        const userNameField = await $('input#username')

        const userNameFieldType = await (userNameField).getAttribute('type') //save key of attribute type
        await userNameField.addValue('some text')
        const userNameFieldValue = await (userNameField).getValue() //save value of element
        console.log('userNameFieldType is ' + userNameFieldType) // print to console saved user Name Field Type
        console.log('userNameFieldValue is ' + userNameFieldValue) // print to console saved user Name Field Value
    })
    it('AT3 - save text and type this text to field', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        const title = await $('div.example h2')
        const userNameField = await $('input#username')

        const titleText = await (title).getText()

        console.log('title text is ' + titleText)  // should be a Login Page

        await userNameField.addValue(titleText)

        const userNameFieldValue = await (userNameField).getValue()
        console.log('userNameFieldValue is ' + userNameFieldValue)  // should be a Login Page
    })
    it('AT4 - is Clickable', async () => {
        await browser.url(`https://webdriver.io/`)
        const headerNavBlogLink = await $('nav a[href="/blog"]')

        let headerNavBlogLinkIsClickable = await headerNavBlogLink.isClickable()
        console.log('is Clickable ' + headerNavBlogLinkIsClickable)  // true 
    })
    it('AT5 - is Displayed', async () => {
        await browser.url(`https://webdriver.io/`)
        const headerNavBlogLink = await $('nav a[href="/blog"]')
        const footerGettingStartedLink = await $('footer a[href="/docs/gettingstarted"]')
        const headerNavBlogLinkIsDisplayed = await headerNavBlogLink.isDisplayed()
        const footerGettingStartedLinkIsDisplayed = await footerGettingStartedLink.isDisplayed()
        console.log('footerGettingStartedLink is Displayed ' + headerNavBlogLinkIsDisplayed)  // true 
        console.log('footerGettingStartedLink is Displayed ' + footerGettingStartedLinkIsDisplayed)  // true 
    })
    it('AT6 - is Displayed In Viewport', async () => {
        await browser.url(`https://webdriver.io/`)
        const headerNavBlogLink = await $('nav a[href="/blog"]')
        const footerGettingStartedLink = await $('footer a[href="/docs/gettingstarted"]')
        const headerNavBlogLinkIsDisplayedInViewport = await headerNavBlogLink.isDisplayedInViewport()
        const footerGettingStartedLinkIsDisplayedInViewport = await footerGettingStartedLink.isDisplayedInViewport()
        console.log('headerNavBlogLink  is Displayed In Viewport ' + headerNavBlogLinkIsDisplayedInViewport)  // true 
        console.log('footerGettingStartedLink  is Displayed In Viewport ' + footerGettingStartedLinkIsDisplayedInViewport)  // false 
    })
    it('AT7 - scrollIntoView', async () => {
        await browser.url(`https://webdriver.io/`)
        const headerNavBlogLink = await $('nav a[href="/blog"]')
        const footerGettingStartedLink = await $('footer a[href="/docs/gettingstarted"]')
        const headerNavBlogLinkIsDisplayedInViewport = await headerNavBlogLink.isDisplayedInViewport()

        await footerGettingStartedLink.scrollIntoView()// scroll to start of block

        const footerGettingStartedLinkIsDisplayedInViewport = await footerGettingStartedLink.isDisplayedInViewport()
        console.log('headerNavBlogLink  is Displayed In Viewport ' + headerNavBlogLinkIsDisplayedInViewport)  // true 
        console.log('footerGettingStartedLink  is Displayed In Viewport ' + footerGettingStartedLinkIsDisplayedInViewport)  // true 
    })
})
    
   
 


