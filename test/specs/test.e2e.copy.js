const { expect, browser, $ } = require('@wdio/globals')

describe('Login page testing', () => {
    it.only('AT1 Login with the correct credential', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)// open url
        await browser.pause(2000)    

        const userNameField = await $('input#username')// make a variable with a selector for user name field 
        const userPasswordField = await $('input#password') // make a variable with a selector for the user password field 
        const sbmButton= await $('button[type="submit"]')// make a variable with a selector for submit button
        const fleshMessage=await $('div#flash')// make a variable with a selector for fleshMessage aster click submit button
 

        await userNameField.addValue('tomsmith')  // set user name field
        await browser.pause(2000)                 // add pause 2 second
     /*    await userNameField.addValue('tomsmith1') // type into user name field additional text
        await browser.pause(2000)                 // add pause 2 second
        await userNameField.setValue('tomsmith')  // clear user name field and type into this field text
        await browser.pause(2000)  */
        // add pause 2 second
        await expect(userNameField).toHaveValue('tomsmith') //check that user name value has tomsmith text
        //await expect(userNameField).toHaveValue(expect.stringContaining('toms')) //check that user name value contain toms text
        
        await userPasswordField.addValue('SuperSecretPassword!')
        await expect(userPasswordField).toHaveValue('SuperSecretPassword!')
        await sbmButton.click()

        await expect(fleshMessage).toBeDisplayed()
        await expect(fleshMessage).toHaveText(expect.stringContaining('You logged into a secure area!')) 
    })
   
 
})

