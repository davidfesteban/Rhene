Capacitor Assets

This tool will crop and resize JPEG and PNG source images to generate icons and splash screens for iOS, Android, and Progressive Web Apps using Capacitor.

Note: previous versions of this tool supported Cordova but Cordova support has been removed as of 1.x. We strongly recommend teams migrate to Capacitor.

Install

npm install --save-dev @capacitor/assets
Usage

The tool expects a assets or resources folder to exist in the root of the project.

There are two modes this tool can be used in: Easy Mode, and Full Control mode.

Usage - Easy Mode (recommended)

With Easy Mode, the tool supports generating all the icon and splash assets you need for iOS, Android, and PWA from a single logo file along with an optional dark mode logo, and background colors. This is the easiest way to generate all your assets, but it trades customizability for convenience.

To use this mode, create a single logo.png or icon.png with an optional logo-dark.png in assets/ (the tool also supports using SVG files as source images, substitue .svg as needed):

assets/
├── logo.png
└── logo-dark.png
Then, generate the assets and provide the background colors that will be used to generate background layers for icons:

npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'