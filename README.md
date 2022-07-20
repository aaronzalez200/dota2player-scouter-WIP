# Dota 2 Player Scouting Website

Hosted Link: https://dota2playerscouter.netlify.app

This website uses the React library to create a webite that uses the OpenDota API (https://www.opendota.com/api-keys) to fetch player data for various parameters and displays them onto a single page. Mobile responsive and validates input for user id. 

**Layout** <br />
The website is created using Grid. The first column will display the player's most played heroes of all-time (Top 30). The 2nd column displays most recent matches (last 20). The 3rd column, along with the last, filters all-time data for the specified lane which can be changed using the dropdown menu which by default displays *Safelane*. The most played heroes within the safelane (or desired lane selected) is shown in the 3rd column (Top 20) The 4th column shows the most recent ticketed matches played by the player which is displayed as their esports matches (last 30). The 5th column shows the player's most played heroes for a selected lane (top 30).

**Data disclaimer** <br />
Some data can be skewed for extreme cases in which the API detected a certain result for which lane a hero played in and result in a inaccurate winrate. 

An example of this can be on position 4 heroes. If a player has success roaming in the early-game which resulted in a won match, this win would not be entered into the array of won matches in the offlane as the game read that the player won roaming, and not in the offlane. 

A secondary example can be where a lane is lost early and results in your hero being classified as it roaming in the match. This can result in data where you won the game, despite a rough early-game, but it's not taken into account for your overall winrate in the safelane/midlane/offlane if it once again considered that your hero roamed int he match.

Lane swapping can have a simliar effect.

**Navigation** <br />
React Routing has not been implemented at the time of writing so none of the navigation links above are functioning.

![WebsiteScouterIMG](https://user-images.githubusercontent.com/107777470/179975987-dcb437f0-7217-4351-a0f7-8471100a6ef1.png)
![ScouterMobile](https://user-images.githubusercontent.com/107777470/179978536-540bac36-91d5-48b2-96b6-78c266b85d52.png)
