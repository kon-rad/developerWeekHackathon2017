

# LIVE SPORTS 360 VR

##LIVE VR is an app that allow the user to watch different sports from multiple athletes’ live 360 degree point of view (POV). 

Each athlete has 5 cameras integrated their helmets creating a spherical image of reality which is streamed live.

The users use a VR Headset, and can choose from which athlete’s perspective he/she wants to see the game. The user can change the athlete at any time, from the app and have several other options..  

The app also has an automatic POV function that changes the POV following different patterns, for example it can follow the athlete with the ball.



###Helmet
5 built in cameras
gyroscope
Image stabilization
accurate GPS/athlete tracking
The helmet app will take the input of all cameras and transform it in a spherical view of the reality.
The gyroscope will help in the vertical and horizontal positioning.
The image stabilization, helped with image processing, will help to have smoother view of actual footage.










###Architecture vision 
A server that runs on top of  Wowza streaming engine: 
receives 360 rtmp input from athletes’ cameras with authorization for game-and-athlete
transforms the input (for image stabilization) and pushes to Wowza streaming cloud 
saves to database the m3u8 urls with game and athlete unique information
VR client application 
asks our server for available live stream feeds 
presents user with live stream game choices 
displays to user their chosen game: uses a 360 player to play the m3u8 urls as user toggles back and forth between athlete

###Optional additions
save livestreams as VOD’s for similar VR athlete-toggling experience (sample use-case: learning opportunities for athletes) 
integration of game analysis  in a voice-over and/or graphics (sample use-case: learning opportunities for athletes) 
make content available for non-360 players and in regular web browsers for variety of clients 
paygate for viewers 
geoblocking, privacy, and other security features for stream viewing 
social media and other forms of engagement for users
analytics on viewers 
create a public (pay-for-use) api for independent content producers to stream 360 input for sports games, and create their own unique VR experience 

###Larger use-case
Expand multi-camera 360 VR experience to other industries (not just sports)
sample use-case: create immersive training experiences for surgeons, pilots, and military personnel. e.g. use 360 cameras to stream surgeries or military aircraft operations from multiple viewpoints

###Current prototype
Client application that displays player  to user along with athlete information for toggling between streams

###More details on user interface and experience vision
The user interface will use different commands to make the experience as simple as possible, using eye tracking, fuse button and voice commands.

It begins with a “Welcome screen”, showing basic instructions of how the app works and fundamental commands.

The user can Tap to continue.

The first image is the field with all the athletes.  It can show the actual position of the athletes in the field, or a simpler composition.


In both sides of the screen it shows the list of athletes in the game.
When an athlete is chosen, it shows information about the athlete:: position, statistics, etc.



The user can chose an athlete from the field, navigating through them in the screen.

The screen also show different options the user can choose, example automatic set “follow the ball” (the POV follows the play and the ball, for example when the Quarterback throw the ball it first use his POV but when the ball is in the air it change to the receiver POV, then if he runs it changes to the receivers POV facing backwards so the user can see how the other athletes chase him.)

When an athlete is chosen, the app shows the point of view of the athlete, as default (see DEMO).

Options on the screen:
Athlete POV, back, sides
Automatic sets: “follow the ball"

http://www.nfl.com/videos/nfl-next/0ap3000000543135/NFL-NEXT-The-VR-fan-experience
http://www.nfl.com/videos/nfl-next/0ap3000000528375/Welcome-to-NFL-NEXT

##Answers to project questions
1) How much progress you make
We built a demo of the user interface, using pre-loaded and live streaming.
User can switch between two diferent POV.
The demos changes between POV and field view.

2) Concept – does it solve a real problem?
Sports fans want to feel the game as close as they can.  Our immersive experience helps fans to do that, we help them to “become” the player in VR.  This is the closest a fan can be of the game, beside being the actual player.

The app can also help coaches to train the players, reviewing the actual plays they made, with detailed statistic (from metrics as speed, direction, G forces,  to actually have detailed informations of where the athlete is seing, head movements and pans, etc,

3) Feasibility – could this become a startup or company?
There is many ways this app can be monetized: sports fans subscriptions, PPV, advertising, licences (to team management), etc.


