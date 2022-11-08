## Useful commands to help get you started!

### To run a development server based on the code on your machine:

1. Open **GitHub Desktop** and click **Fetch Origin** to get the latest code from the online repository.
> Fetch Origin is a button in the top right of the GitHub Desktop window. It looks like a cloud with an arrow pointing down. This will sync the latest code from the online repository to your computer, in case someone else may have added something new.
2.  In **File Explorer**, navigate to the folder containing the code for the website. Make sure you are in the **michaelwrites** folder. 
3. On the top part of File Explorer, click on the **Address Bar** which has the path you are in and replace the file path with **cmd** and then press enter. This will open a command prompt window.
4. When the command prompt window opens, type `npm start` and then press enter. This will start a development server on your machine, which should also open up *localhost:3000* in your browser. Keep Command Prompt open while you are working on the website, since it is the window that is running the development server.
> localhost is a special address that your computer uses to refer to itself. The number after the colon is the port number. The port number is used to identify which application is running on your computer. In this case, the React website is running on port 3000 once you type `npm start`, so in order to connect to the website running on your computer you have to access port 3000.
5. Congrats! You are now running a development server on your machine. You can now make changes to the code and see the changes reflected in your browser immediately after saving any changes in any of the files. This also includes adding any new files or folders as they are automatically detected by the development server.


### To "publish" your changes to the online repository:
1. Open **GitHub Desktop** and click **Fetch Origin** to get the latest code from the online repository, in case any changes were made while you were working on the website.
2. In the summary field next to your picture on the bottom left of the screen, type a short description of the changes you made. This is so that other people can see what you changed and why you changed it. You can optionally add a more detailed description of the changes you made in the larger text box below the summary field if you wish.
3. Click **Commit to master**, then **Push Origin**. This will save your changes to your local copy of the code, and will also save a copy of the changes you made to the online repository.

### To upload your website to the internet available at your purchased domain:
1. Follow steps 1-3 in *To run a development server based on the code on your machine* to get to the command prompt window.
2. Type `npm run build && firebase deploy` and then press enter. This will build the website and upload it to the internet. It will take a few minutes for the website to be available at your domain. To check the website live on the internet, you will need to refresh the page. You may also need to press Ctrl+R to refresh the page and clear the cache from the older version.