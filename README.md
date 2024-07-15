## You can import like this in a component:

//import imgUrl from '../assets/imgs/logo.png'
//<img src=${imgUrl} alt="Loading Icon">

//Or like this:
//<img src="/imgs/logo.png" alt="Loading Icon">

//First method it takes the compiled version of vite inside src/assets or src/whatever into www/assets(compiled).
//Second method it takes the copied version of vite inside src/public into www/
//That is why using the first method you cannot point from HTML but from JS directly


## From the index.html
You can referenciate it as relative path ./ as vite will take care


---- Icons and Splash
First, install @capacitor/assets:

npm install @capacitor/assets --save-dev

Provide icon and splash screen source images using this folder/filename structure:

assets/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png

Icon files should be at least 1024px x 1024px.
Splash screen files should be at least 2732px x 2732px.
The format can be jpg or png.
Then generate (which applies to your native projects or generates a PWA manifest file):

npx capacitor-assets generate
