const collaborativeData = [
    {
        "name": "Miro", 
        "logo": "mirologo.png", 
        "overview": "Miro is a cloud-based whiteboard for synchronous collaboration that is well-suited to structured workshops, team activities, and presentations. It is available through a web browser, or as a downloadable app on Windows, Mac, iOS, and Android.", 
        "functionality": "Within a Miro board users can choose whether to work on a single whiteboard called a frame or create multiple frames. Frames allow users to compartment sections of content, making it easy to present and navigate large boards with lots of content. Miro has a large template library. The templates are mostly designed for more corporate activities but can be adapted to suit other requirements.  Sticky notes of a variety of colours can be added and manipulated. The learning curve is steeper than with other whiteboard tools, but that is due to the extra features and functionality that Miro offers.", 
        "features": "Miro offers integrated chat, audio and video conferencing, and screen sharing. SAML-based single sign-on (SSO). Many different file types can be imported. Boards can be exported as images, pdf, CSV, embed.  The in-built timer and group voting features are useful for group workshops and activities. Facilitators and participants can easily locate other users wherever they are on the board. The search functionality also helps users navigate large boards with multiple frames. Keyboard shortcuts may come in handy to speed up your work. ", 
        "collaboration": "Miro can support hundreds of simultaneous editors and hundreds of viewers. Users can invite collaborators from inside and outside of your organisation, regardless of whether they have a Miro account or not. Invited users can be assigned varying levels of access.",
        "screenshots": ["miross1.png", "miross2.png"],
        "pricing": [{ "name": "Beginner", "price": "$8", "additional": "2-10 users", "unit": "/user per month", "color": "#009DC6"}, { "name": "Business", "price": "$16", "additional": "20-50 users", "unit": "/user per month", "color": "#EC6800"}, {"name": "Custom", "price": "Custom", "additional": "50+ users", "unit": "N/A", "color": "#BAC300"}],
        "website": "https://miro.com", 
        "integrations": ["Evernote, Youtube, Microsoft Teams, Dropbox..."],
        "deployments": [{"name":"Windows", "image":"windows.png"}, {"name":"Mac", "image":"mac.png"}, {"name":"Android", "image":"android.png"}],
        "verdict": "Among the best collaboration tools for remote teams. Cheaper than some other comparable tools like Mural and Stormboard. The learning curve is steeper than with other whiteboard tools, but that is due to the extra features and functionality that Miro offers. May be too heavyweight for more basic activities. "
    }, 
    {
        "name": "Mural", 
        "logo": "murallogo.svg", 
        "overview": "Mural is best-suited to remote team working, large workshops and group activities. It is available through a web browser, or as a downloadable app on Windows, Mac, iOS, and Android.", 
        "functionality": "Boards in Mural are called murals. They are not infinite by default but can be expanded as required. Easy to add shapes, icons, images, gifs, files and a large selection of templates. Sticky notes different shapes and colours can be added. The background colour can be changed. ", 
        "features": "Good documentation with FAQs and video tutorials to help with the steeper learning curve that comes with the extra features. ADFS and SAML-based SSO. Video tutorials. Integrated chat and screen sharing. The in-built timer and group voting features are useful for group workshops and activities.",
        "collaboration": "Mural can support up to 100 users in a single canvas. Users can invite collaborators from inside and outside of your organisation, but all collaborators require a Mural account.",
        "screenshots": ["muralss1.png", "muralss2.png"],
        "pricing": [{ "name": "Beginner", "price": "$12", "additional": "1-50 users", "unit": "/ user per month", "color": "#009DC6"}, { "name": "Business", "price": "$20", "additional": "10-50 users", "unit": "/ user per month", "color": "#EC6800"}, { "name": "Custom", "price": "Custom", "additional": "50+ users", "unit": "N/A", "color": "#BAC300"}],
        "website": "https://www.mural.co", 
        "integrations": ["Microsoft Teams, Zapier, Dropbox, Slack, OneDrive..."],
        "deployments": [{"name":"Windows", "image":"windows.png"}, {"name":"Mac", "image":"mac.png"}, {"name":"Android", "image":"android.png"}],
        "verdict": "Comparable with Miro but at a slightly higher cost. Slightly more features but no integrated audio/video conferencing.  At Jisc, we currently don’t feel the difference is worth paying for."
    } 
]

export default collaborativeData