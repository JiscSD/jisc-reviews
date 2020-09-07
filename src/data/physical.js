const physicalData = [
    {
        "name": "Microsoft Whiteboard", 
        "logo": "microsoftwhiteboardlogo.jpg", 
        "overview": "Freeform digital canvas, that makes for a collaborative workspace in lessons.  Same virtual canvas can also be accessed by multiple devices from any location.", 
        "functionality": "The browser and Teams version of Microsoft Whiteboard is a very simple digital version of a physical whiteboard. Users work on a single canvas with very limited functionality. Users can freehand draw with four different colour pens, enter text in a single font type and size, and add sticky notes. The app version of Microsoft Whiteboard is more feature-rich but still lacking in functionality. There are no preset shapes, but it is possible to get shapes (but not easy) through the Ink to Shape feature. This requires users to draw the shape freehand first before it is transformed.  In its current form, Microsoft Whiteboard is more suited to use on a tablet or large display with a stylus", 
        "features": " In the app version the background can be formatted with colours and grids. The app also allows users to insert images, pdf files and Word/PowerPoint files for annotation. Both versions allow users to export the whiteboard as an image. ", 
        "collaboration": "Only works with members of the same organisation. ",
        "screenshots": ["microsoftwhiteboardss1.png", "microsoftwhiteboardss2.png"],
        "pricing": [{ "name": "Standard", "price": "Free", "additional": "Infinite users", "unit": "N/A", "color": "#009DC6"}],
        "website": "https://www.microsoft.com/en-gb/microsoft-365/microsoft-whiteboard/digital-whiteboard-app", 
        "integrations": ["Microsoft Teams"],
        "deployments": [{"name":"Windows", "image":"windows.png"}, {"name":"Mac", "image":"mac.png"}, {"name":"Android", "image":"android.png"}],
        "verdict": "Like many Microsoft products, Microsoft Whiteboard re-uses functionality that already exists in another product, in this case Microsoft OneNote. While more features may be added in the future it is currently a very limited product, and there are better free alternatives. Microsoft Whiteboard may be a viable option if you have a stylus and want to perform basic activities on a tablet. It is also irritating that different deployments have different feature sets. "
    }, 
    {
        "name": "Google Jamboard", 
        "logo": "googlejamboardlogo.png", 
        "overview": "Jamboard is a 55-inch 4K smart display designed to replace the traditional whiteboard in lessons and activities.", 
        "functionality": "Jamboard boards are called jams, and each jam can consist of up to 20 frames. On the physical display, the stylus is used to write and draw with a selection pens and colours. Handwriting and shapes are transformed through automatic recognition. Users can search Google and insert images and webpages to be edited and annotated. The browser and app versions of Jamboard have a similar basic level of functionality. Users can select pens of different thicknesses and colours and add sticky notes. Text is added through a text box in the browser, or using handwriting recognition on the app. There are preset shapes on the browser, and shape recognition on the app.", 
        "features": "Users can insert images for annotation and select a background from a small selection of grids or colours. There is a laser pointer that could be useful for highlighting an area without leaving a permanent mark.", 
        "collaboration": "Up to 50 collaborators can work on a single Jamboard at any one time. Collaborators can be a combination of users on physical displays, the mobile app and the web browser. Collaborators can be added as editors or viewers and can be from inside and outside of your organisation. The physical Jamboard is set up for video conferencing using Google Meet. ",
        "screenshots": ["googlejamboardss1.png", "googlejamboardss2.png"],
        "pricing": [{ "name": "Standard", "price": "£3999.99", "additional": "+ £498 annual managements fee", "unit": "/ display", "color": "#009DC6"}],
        "website": "https://jamboard.google.com", 
        "integrations": [],
        "deployments": [{"name":"Windows", "image":"windows.png"}, {"name":"Mac", "image":"mac.png"}, {"name":"Android", "image":"android.png"}],
        "verdict": "Like Microsoft Whiteboard, Jamboard replicates a physical whiteboard while allowing remote collaboration with a few extra features. The quality of experience on the physical Jamboard display is superior to the browser/app versions, and it is well-suited to in-person and mixed collaboration. The browser and app are more suited to users with tablets and styluses rather than using a laptop or desktop computer.  "
    }, 
    {
        "name": "Limnu", 
        "logo": "limnulogo.png", 
        "overview": "Simple collaboration for those who want to replicate a physical whiteboard as realistically as possible. Available on browsers and iOS app.", 
        "functionality": "A single infinite canvas per board. Two pens with lots of different colours. Preset shapes limited to lines, arrows, boxes and circles. Sticky notes and labels. ", 
        "features": "Ability to easily select a group of objects. Keyboard shortcuts. ", 
        "collaboration": "Hundreds of simultaneous collaborators. Integrated video chat. Board administrators can assign varying access levels ",
        "screenshots": ["limnuss1.png", "limnuss2.png"],
        "pricing": [{ "name": "Free Trial", "price": "Free", "additional": "", "unit": "14 days", "color": "#009DC6"}, { "name": "Individual Pro Plan", "price": "$5", "unit": "/ month", "additional": "Unlimited users and boards", "color": "#EC6800"}, {"name": "Team Plan", "price": "$8", "unit": "/ user per month", "additional": "Unlimited users and boards", "color": "#BAC300"}],
        "website": "https://limnu.com", 
        "integrations": ["Slack, Whiteboard API for use in external apps"],
        "deployments": [{"name":"Windows", "image":"windows.png"}, {"name":"Mac", "image":"mac.png"}, {"name":"Android", "image":"android.png"}],
        "verdict": "Very similar to a physical whiteboard, with a focus on drawing. Limnu do not recommend using a mouse or trackpad, instead recommending a touch screen with stylus. Not a significant enough improvement on Microsoft Whiteboard or Jamboard to warrant paying for. "
    }
]

export default physicalData