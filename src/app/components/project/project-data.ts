export const ProjectPage = {
  'world-map': {
    'title': 'World Map',
    'desc': 'This website was made as part of my studies at Western Governor\'s University. ' +
      'It was made using Angular, the World Bank API, and an SVG map of the world. ' +
      'With it, you can hover over a country in the world and it will tell you information ' +
      'such as the country name, its capital city, the region of the world it is in, and other information. ' +
      'I did not optimize this for mobile, so I apologize if you try to view it on your phone, it works best on desktop. ',
    'banner': 'thumbnails/world-map.svg',
    'tech': ['Angular'],
    'link': 'https://jakeebro.github.io/World-Map',
    'sections': []
  },

  'higher-lower': {
    'title': 'Higher Lower',
    'desc': 'This website was originally made as an interview project, but I decided to clean it up and convert it to Angular ' +
      'as a form of practice. ' +
      '<br><br>' +
      'It is a simple game where you must guess a random number within a range. You can choose the range yourself, and even limit the ' +
      'amount of guesses you can take. ' +
      '<br><br>' +
      'I also added a set of predefined themes for you to choose from.',
    'banner': '',
    'tech': ['Angular'],
    'link': 'https://jakeebro.github.io/ng-higher-lower/',
    'sections': []
  },

  'boxes': {
    'title': 'Boxes',
    'desc': 'This website was a way for me to practice making a fully deployed CRUD app. It is extremely simple. I made ' +
      'it using Angular and Spring Boot. The front end is hosted on GitHub pages like all my other sites, and the backend is ' +
      'hosted on Railway. ',
    'banner': '',
    'tech': ['Angular', 'Spring Boot'],
    'link': 'https://jakeebro.github.io/boxes/',
    'sections': [
      {
        'image': '',
        'text': 'I am planning on expanding on this practice with another app soon, after I finish some more classes. ' +
          'I plan for it to be a sort of social site where you can create and share ' +
          'build loadouts for a specific game (or set of games, hopefully, in the future). '
      }
    ]
  },

  'taniti': {
    'title': 'Taniti',
    'desc': 'This website was originally made as part of my studies at Western Governor\'s University. ' +
      'It started as standard HTML and CSS, and I decided to remake it using Angular as a way learning the framework. ' +
      'It is a showcase of a fictional tropical island in the Pacific Ocean named Taniti. ' +
      '<br><br>' +
      'I used Firestore for the backend, as it is just a simple fake e-commerce app. ' +
      'You can \'buy\' fake tickets for activities and \'order\' them through the site. ' +
      '<br><br>' +
      'There is a 20 item cart limit, as well as a 5 order account limit. It is all fake, ' +
      'so please feel free to delete any orders if the limit is reached while you are testing it. ' +
      '<br><br>' +
      'It is fully responsive, and features a toggleble dark/light theme. You can find the theme toggle in the profile tab',
    'banner': 'thumbnails/taniti.jpg',
    'tech': ['Angular'],
    'link': 'https://jakeebro.github.io/ng-taniti/home',
    'sections': []
  },

  'snippets': {
    'title': 'Code Snippets',
    'desc': 'This is a collection of scripts I\'ve made that I am particularly proud of.',
    'banner': '',
    'tech': [],
    'link': 'https://github.com/JakeeBro/Snippets',
    'sections': []
  },

  'portfolio': {
    'title': 'Portfolio',
    'desc': 'This is a website designed to show off some of my work. This is where you are right now. ' +
      'I made this site using Angular. You can find the source code for this website on my GitHub, linked on the Contact Page of this same site. ' +
      'The link above will take you home :)',
    'banner': '',
    'tech': ['Angular'],
    'link': 'https://jakeebro.github.io/Portfolio/',
    'sections': []
  },

  'project-night-shift': {
    'title': 'Night Shift',
    'desc': 'This is a Cooperative Survival Horror game where you work the night shift restocking stores. The stock is in the basement. ' +
      'The basement is planned to be a randomly generated dungeon filled with monsters. You and your friends will have to defend yourselves ' +
      'and survive the dangers of the basement while trying to locate the stock the store needs. ',
    'banner': '',
    'tech': ['Unreal Engine, Blender'],
    'link': '',
    'sections': [
      {
        'image': 'media/night-01-lobby.png',
        'text': 'This is the current version of the Game Lobby. The blue cube to the left of the image is a second player. ' +
          'The object in front of the player is a job board, with 3 job listings on it. When you interact with one, it updates the selected map. ' +
          'The lobby host can then interact with the cube on the right to load the selected map and begin the game. '
      },
      {
        'image': 'media/night-02-social.png',
        'text': 'This is the Social Menu inside of the Pause Menu. It automatically populates with your Steam Friends List, ' +
          'thanks to the use of the AdvancedSteamSessions plugin. '
      },
      {
        'image': '',
        'text': 'There are also some mechanics which I cannot really take screenshots of. My interaction system allows for ' +
          'certain Interactable Objects to only ever be used by the host of the lobby. I had an issue where if a client tried to initiate a map travel, ' +
          'Steam would disconnect them. This host/client interaction authority split makes sure that Steam will not complain when a client does something ' +
          'that Steam thinks they are not supposed to'
      },
      {
        'image': '',
        'text': 'The Interaction System runs on Tick and also fires events for important functionality. For example, when looking at an object, actual Line Trace runs ' +
          'on Tick, but the HUD updates that tell the Player what they are looking at are event based. ' +
          'These events fire when looking at a new object and when looking away from an object. '
      }
    ]
  },

  'project-hunt': {
    'title': 'Hunt',
    'desc': 'This is a Survival Horror game set in a Procedural Forest. The Player is a simple Hunter, on a trip to the wilderness. ' +
      'During the night, a monster hunts them. The Player must explore and find gear to defeat the monster and escape the forest. ' +
      '<br><br>This project is currently on hold while I finish school and work on Project: Night Shift.',
    'banner': 'thumbnails/terror.png',
    'tech': ['Unreal Engine, Blender'],
    'link': '',
    'sections': [
      {
        'image': 'media/hunt-01-terrain.png',
        'text': 'The terrain is randomly generated and created using a Procedural Mesh Component. ' +
          'The gap seen in the image is a result of two calculations: one higher resolution area for the player to explore, and ' +
          'a lower resolution extension for out of bounds visibility, so as to not look like you are floating in space. ' +
          'The outer mesh is lowered vertically in relation to the main mesh so that the imprecise vertices of the outer mesh are never higher than the main mesh, ' +
          'so the player can never see underneath the map. ' +
          'Mesh generation typically involves calculating the tangents for the mesh to properly receive lighting, ' +
          'but that process is very time consuming, especially on lower end hardware such as the Steam Deck. ' +
          'Initially I thought if I made the calculations run asynchronously it would be more performant, but it didn\'t provide much' +
          ' of a boost, most likely because it was still running on the CPU. ' +
          'There is little information regarding creating custom compute shaders inside of Unreal Engine, but one day I hope to try to convert ' +
          'it to such a system. ' +
          'For now, since the art style is already retro, I decided to just disable shadows altogether. This saves time and performance. '
      },
      {
        'image': 'media/hunt-02-sky.png',
        'text': 'The sky in the game currently uses the default Unreal Sky Atmosphere system. ' +
          'The default post processing settings make retro lighting very difficult, and it took a lot of tinkering ' +
          'to get it to even look like this. ' +
          'My plan for the future, considering the disabled shadows, is to completely replace the entire sky with an unlit alternative. '
      }
    ]
  },

  'project-lasers': {
    'title': 'Lasers',
    'desc': 'This is a first person sci-fi puzzle game. The Player must solve puzzles using Lasers to power the essential systems ' +
      'of the Spaceship they are on. ' +
      '<br><br>This project is currently on hold while I finish school and work on Project: Night Shift. ',
    'banner': '',
    'tech': ['Unreal Engine, Blender'],
    'link': '',
    'sections': [
      {
        'image': 'media/lasers-01-reflection.png',
        'text': 'The image above demonstrates the laser system. The cube to the left of the image is a Laser Emitter. ' +
          'This emitter draws a line trace directly in front of it, travelling a certain distance, checking for actors implementing ' +
          'a "Reflectable" interface. ' +
          'If it hits a reflectable actor, the hit point is stored and the Line Trace fires again from that point. ' +
          'It is fully dynamic, as it runs on Tick. I also created a "Beam Strength" variable that changes value based on ' +
          'the Actor hit. By default Actors decrease the Beam Strength, causing it to fizzle out, ' +
          'but some Actors can recharge the beam as they get hit. '
      },
      {
        'image': 'media/lasers-02-hallway.png',
        'text': 'This is an early view of the first level of the game. I made some modular hallway pieces in Blender, ' +
          'and connected them together in engine. There are no textures yet, as I want to focus on the game mechanics first. ' +
          'In this scene, the Player has just started the game, and is making their way to the Ships Main Reactor. ' +
          'The lights on the ceiling rotate quickly, giving a sense of urgency as well as lighting the path for the Player. '
      }
    ]
  },

  'project-tappy': {
    'title': 'Tappy',
    'desc': 'This is a game inspired by the popular app Flappy Bird. I personally really enjoyed Flappy Bird, and I was disappointed ' +
      'when it was removed from the App Store and Google Play. I have searched for years for alternate versions to play instead, ' +
      'but none of them have the same signature feel of the original Flappy Birds physics. ' +
      '<br><br>Until now. <br><br>I found a research paper online which calculated the exact formula for the original Flappy Birds jumping, and I ' +
      'implemented it in this game. ',
    'banner': '',
    'tech': ['Unity, Photoshop'],
    'link': 'https://superslicestudios.itch.io/flappy-prototype',
    'sections': [
      {
        'image': '',
        'text': 'The game is mostly on par with the features of the original so far, besides leaderboards and score medals. ' +
          'In the future, I would like to add customization and difficulty settings, as well as implement the very specific obstacle spawning logic ' +
          'from the original game. '
      }
    ]
  }
} as const;

export type ProjectID = keyof typeof ProjectPage;

export type ProjectData = (typeof ProjectPage)[ProjectID];
