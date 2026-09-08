export interface IHubLink {
  title: string;
  link: string;
  image?: string;
}

export interface IProjectSection {
  header?: string;
  link?: string;
  linkInternal?: boolean;
  linkError?: boolean;
  errorMessage?: string;
  image?: string;
  text?: string;
  hubSection?: boolean;
  hubLinks?: IHubLink[];
}

export interface IProjectData {
  title: string;
  banner?: string;
  tech?: readonly string[];
  sections?: IProjectSection[];
}

export const ProjectPage = {
  'world-map': {
    'title': 'World Map',
    'banner': 'thumbnails/world-map.svg',
    'tech': ['Angular'],
    'sections': [
      {
        'header': 'LEARN ABOUT THE WORLD',
        'link': 'https://jakeebro.github.io/World-Map',
        'text': 'This website was made as part of my studies at Western Governor\'s University. ' +
          'It was made using Angular, the World Bank API, and an SVG map of the world. ' +
          'With it, you can hover over a country in the world and it will tell you information ' +
          'such as the country name, its capital city, the region of the world it is in, and other information. ' +
          'I did not optimize this for mobile, so I apologize if you try to view it on your phone, it works best on desktop.'
      },
      {
        'header': 'HOW IT WORKS',
        'image': '/media/world-map/WorldMapInfo.png',
        'text': 'The SVG map used comes pre-segmented into individual paths, one per country, each already labeled with an ID ' +
          'matching the World Bank API\'s country codes. My code just listens for mouse-over events on the SVG container. ' +
          'When the cursor enters a path, I read that path\'s ID directly and request that country\'s data from the ' +
          'World Bank API, which returns XML that I parse manually for the fields I want to display. ' +
          'The trick that makes this simple is entirely in the SVG asset itself being pre-labeled correctly. I did not build the SVG segmentation, ' +
          'but the hover-to-lookup logic connecting it to the API is mine. '
      },
      {
        'text': 'The World Bank API is a little bit slow, so the first time you hover over a country it might take a bit to update. ' +
          'It totally looks like it\'s broken but it just takes a little time. '
      },
      {
        'header': 'IN THE FUTURE',
        'image': '/media/world-map/WorldMapMobile.png',
        'text': 'This was never optimized for mobile. The map is small on smaller screens with no way to zoom in, which makes it ' +
          'basically unusable on a phone. If I revisited this, I would look into pinch-to-zoom or a pan/zoom library for the SVG ' +
          'so it holds up on smaller viewports, rather than just shrinking the whole map down. '
      }
    ]
  },

  'higher-lower': {
    'title': 'Higher Lower',
    'banner': '',
    'tech': ['Angular'],
    'sections': [
      {
        'header': 'PLAY IN YOUR BROWSER',
        'link': 'https://jakeebro.github.io/ng-higher-lower/',
        'image': '/media/higher-lower/HLGame.png',
        'text': 'This website was originally made as an interview project, but I decided to clean it up and convert it to Angular ' +
          'as a form of practice. ' +
          'It is a simple game where you must guess a random number within a range. You can choose the range yourself, and even limit the ' +
          'amount of guesses you can take. ' +
          'I also added a set of predefined themes for you to choose from.',
      },
      {
        'header': 'WHO ASKED FOR THIS?',
        'text': 'The original version of this game was a take-home assignment for an interview process, built with plain HTML, ' +
          'no styling beyond black and white. I completed it and moved on to the next phase of interviews, but the company ' +
          'restructured partway through the process and cancelled all open applications, mine included. Rather than let the project ' +
          'go to waste, I rebuilt it from scratch in Angular as practice. '
      },
      {
        'header': 'WHAT DID I IMPROVE?',
        'image': '/media/higher-lower/HLThemes.png',
        'text': 'The rewrite is not just a port, it is a full redesign. The original only supported a fixed range, infinite guesses, and had no styling to speak of. ' +
          'The Angular version adds custom guess ranges, a configurable guess limit, automatic focus switching between input fields as you type, ' +
          'a set of custom themes saved to the browser cache so your preference persists between visits, and an entirely new frosted-glass ' +
          'visual design that I built myself. Themes are handled by a dedicated Angular service that swaps a set of CSS variables, ' +
          'so the whole site restyles from one place rather than needing per-component theme logic. '
      },
    ]
  },

  'boxes': {
    'title': 'Boxes',
    'banner': '',
    'tech': ['Angular', 'Spring Boot'],
    'sections': [
      {
        'header': 'TRY IT IN YOUR BROWSER',
        'link': 'https://jakeebro.github.io/boxes/',
        'text': 'This website was a way for me to practice making a fully deployed CRUD app. It is extremely simple. I made ' +
          'it using Angular and Spring Boot. The front end is hosted on GitHub pages like all my other sites, and the backend is ' +
          'hosted on Railway. ',
      },
      {
        'header': 'WHY SO SIMPLE',
        'text': 'I don\'t learn well from tutorials, I tend to lose focus and fall asleep watching them. So instead of following one, ' +
          'I used AI as a guide while building this myself, the same way I later approached my terrain generation system. ' +
          'The goal was never a feature-rich app, I just wanted to create a full front and backend hosted online: ' +
          'Angular talking to a real REST API, backed by Spring Boot, actually deployed and reachable, not just running locally. ' +
          'A \'box\' is deliberately nothing more than a color, a name, and an ID, displayed as a colored div on screen. ' +
          'You can create, edit, and delete them. And that\'s... it. On purpose. '
      },
      {
        'header': 'FUTURE UPDATES',
        'image': '',
        'text': 'I am planning on expanding on this practice with another app soon, after I finish some more classes. ' +
          'I plan for it to be a sort of social site where you can create and share ' +
          'build loadouts for a specific game (or set of games, hopefully, in the future). '
      }
    ]
  },

  'taniti': {
    'title': 'Taniti',
    'banner': 'thumbnails/taniti.jpg',
    'tech': ['Angular'],
    'sections': [
      {
        'header': 'EXPLORE TANITI',
        'link': 'https://jakeebro.github.io/ng-taniti/home',
        'text': 'This website was originally made as part of my studies at Western Governor\'s University. ' +
          'It started as standard HTML and CSS, and I decided to remake it using Angular as a way learning the framework. ' +
          'It is a showcase of a fictional tropical island in the Pacific Ocean named Taniti. '
      },
      {
        'header': 'UPGRADES!',
        'image': '/media/taniti/TanitiCart.png',
        'text': 'The original HTML/CSS version was a fully custom design, not a template, and I kept its overall layout and color scheme ' +
          'when rebuilding it in Angular. But the original had no e-commerce at all, it was closer to a travel brochure: static pages of ' +
          'text and images describing an island with some activities the assignment required. There was no cart, no products with prices, ' +
          'no ordering system, no theme toggle, and it was not mobile responsive. The Angular rebuild adds all of that. '
      },
      {
        'header': 'FAKE ORDERS AND LIMITS',
        'image': '/media/taniti/TanitiOrder.png',
        'text': 'Orders are stored in Firestore, each with a generated order ID, a timestamp, the order contents, and the total price. ' +
          'The 20 item cart limit and 5 order account limit are not arbitrary, they exist specifically so nobody can sit there and ' +
          'fill a free Firestore project with endless fake orders, since I would like this site to stay up indefinitely without costing me anything. '
      },
      {
        'header': 'THEMES',
        'text': 'The dark/light toggle uses the exact same CSS-variable-swapping theme service pattern as my Higher Lower project, ' +
          'just applied with a different set of theme values here. '
      }
    ]
  },

  'snippets': {
    'title': 'Code Snippets',
    'banner': '',
    'sections': [
      {
        'header': 'CHECK OUT THE CODE',
        'link': 'https://github.com/JakeeBro/Snippets',
        'text': 'This is a collection of scripts I\'ve made that I am particularly proud of.',
      }
    ]
  },

  'portfolio': {
    'title': 'Portfolio',
    'banner': '',
    'tech': ['Angular'],
    'sections': [
      {
        'header': 'GO BACK HOME',
        'link': '/about',
        'linkInternal': true,
        'text': 'This is a website designed to show off some of my work. This is where you are right now.'
      },
      {
        'header': 'I LEARN BEST WITH MY HANDS',
        'text': 'I did not watch a single Angular tutorial to build this site. I started building it directly with AI assistance and ' +
          'asked questions as I went, learning the framework by actually using it rather than following along with someone else\'s project. ' +
          'It uses standalone components throughout, no NgModules, and no state management library, just data-driven TypeScript files ' +
          'feeding into templates. It is hosted on GitHub Pages, like the rest of my Angular projects. '
      },
      {
        'header': 'EASY UPDATING',
        'image': '/media/portfolio/PortfolioData.png',
        'text': 'Rather than hand-build a new page every time I wanted to add a project or feature, I wanted the site to auto-populate ' +
          'itself from structured data. The ProjectPage and FeaturePage objects that drive most of this site are exactly that: ' +
          'each entry is a title and an array of sections, where a section can be plain text, an image, an internal or ' +
          'external link, or a hub of links to other pages. Adding a new project or a new framework feature is just adding a new entry ' +
          'to one of these objects, the page itself builds automatically from there. '
      },
      {
        'text': 'I used AI to help me write a PowerShell script that handles the entire deploy process with one command, \'npm run deploy\'. ' +
          'It commits and backs up whatever is on main, builds the Angular app, copies the build output into a temporary directory outside the repo, duplicates ' +
          'index.html as 404.html so GitHub Pages can correctly handle Angular\'s client-side routing on a direct page load or refresh, since ' +
          'apparently that is a problem that I had to solve. ' +
          'It then switches to the gh-pages branch, wipes it clean except for a small set of files it needs to preserve, copies the fresh build ' +
          'in, commits, and switches back to main. There is also a forced empty commit pushed right before the branch gets wiped, added after ' +
          'the site once failed to actually update on GitHub Pages despite a successful deploy, because the site wouldn\'t update unless I did that. ' +
          'Again, apparently a problem I had to solve. ' +
          'That empty commit guarantees GitHub sees an actual change and refreshes the deployed site. '
      },
      {
        'header': 'RECENT REDESIGN',
        'text': 'From September 2, 2026 to September 8, 2026 I redesigned the project page layout entirely, including how ' +
          'header links, images, and text are placed and how it responds on smaller screens, removed the navigation bar altogether, ' +
          'rebuilt the home page to show every project with filterable tags, redesigned the project cards, and replaced every font on the ' +
          'site along with adding Material Symbols icons throughout. You\'re welcome. '
      }
    ]
  },

  'project-night-shift': {
    'title': 'Night Shift',
    'banner': '',
    'tech': ['Unreal Engine', 'Blender'],
    'sections': [
      {
        'text': 'This is a Cooperative Survival Horror game where you work the night shift restocking stores. The stock is in the basement. ' +
          'The basement is planned to be a randomly generated dungeon filled with monsters. You and your friends will have to defend yourselves ' +
          'and survive the dangers of the basement while trying to locate the stock the store needs.'
      },
      {
        'header': 'THE GAME LOBBY',
        'image': 'media/night-01-lobby.png',
        'text': 'This is the current version of the Game Lobby. The blue cube to the left of the image is a second player. ' +
          'The object in front of the player is a job board, with 3 job listings on it. When you interact with one, it updates the selected map. ' +
          'The lobby host can then interact with the cube on the right to load the selected map and begin the game. '
      },
      {
        'header': 'STEAM MULTIPLAYER',
        'image': 'media/night-02-social.png',
        'text': 'This is the Social Menu inside of the Pause Menu. It automatically populates with your Steam Friends List, ' +
          'thanks to the use of the AdvancedSteamSessions plugin. '
      },
      {
        'header': 'INTERACTION SYSTEM',
        'link': '/projects/posh-framework/interaction-system',
        'linkInternal': true,
        'text': 'There are also some mechanics which I cannot really take screenshots of. My interaction system allows for ' +
          'certain Interactable Objects to only ever be used by the host of the lobby. I had an issue where if a client tried to initiate a map travel, ' +
          'Steam would disconnect them. This host/client interaction authority split makes sure that Steam will not complain when a client does something ' +
          'that Steam thinks they are not supposed to.'
      },
      {
        'image': '',
        'text': 'The Interaction System runs on Tick and also fires events for important functionality. For example, when looking at an object, the actual Line Trace runs ' +
          'on Tick, but the HUD updates that tell the Player what they are looking at are event based. ' +
          'These events fire when looking at a new object and when looking away from an object. This ensures that only what code is necessary to run each frame is being called.'
      }
    ]
  },

  'project-hunt': {
    'title': 'Hunt',
    'banner': 'thumbnails/terror.png',
    'tech': ['Unreal Engine', 'Blender'],
    'sections': [
      {
        'text': 'This is a Survival Horror game set in a Procedural Forest. The Player is a simple Hunter, on a trip to the wilderness. ' +
          'During the night, a monster hunts them. The Player must explore and find gear to defeat the monster and escape the forest. ' +
          '<br><br>This project is currently on hold while I finish school and work on Project: Night Shift.',
      },
      {
        'header': 'TERRAIN GENERATION',
        'link': '/projects/posh-framework/terrain-gen',
        'linkInternal': true,
        'image': 'media/hunt-01-terrain.png',
        'text': 'The terrain is randomly generated and created using a Procedural Mesh Component. ' +
          'The gap seen in the image is a result of two calculations: one higher resolution area for the player to explore, and ' +
          'a lower resolution extension for out of bounds visibility, so as to not look like you are floating in space. ' +
          'The outer mesh is lowered vertically in relation to the main mesh so that the imprecise vertices of the outer mesh are never higher than the main mesh, ' +
          'so the player can never see underneath the map. '
      },
      {
        'text': 'Mesh generation typically involves calculating the tangents for the mesh to properly receive lighting, ' +
          'but that process can be very time consuming, especially on lower end hardware such as the Steam Deck. ' +
          'Because I plan to support the Steam Deck, I tried changing how the tangents are calculated. ' +
          'I looked into the Unreal Engine source code and found their implementation, and made my own asynchronous version. ' +
          'I also made asynchronous versions of the other steps of the mesh generation process, so that the entire pipeline would run without switching back and forth. ' +
          'Initially, I thought if I made the calculations run asynchronously it would be more performant, but it didn\'t provide much' +
          ' of a boost. This is most likely because it was still running on the CPU. ' +
          'These asynchronous functions worked about 90% of the time, and the other 10% caused crashes. ' +
          'Because of the instability and lack of a performance boost, I decided to revert back to the original implementation. ' +
          'There is little information regarding creating custom compute shaders inside of Unreal Engine, but one day I hope to try to convert it to such a system. ' +
          'For now, since the art style is already retro, I decided to just disable shadows altogether. This saves time and performance.'
      },
      {
        'header': 'THE SKY',
        'image': 'media/hunt-02-sky.png',
        'text': 'The sky in the game currently uses the default Unreal Sky Atmosphere system. ' +
          'The default post processing settings make retro lighting very difficult, and it took a lot of tinkering ' +
          'to get it to even look like this. ' +
          'My plan for the future, considering the disabled shadows, is to completely replace the entire sky with an unlit alternative. '
      },
      {
        'header': 'DAY / NIGHT CYCLE',
        'text': 'I also have a day / night cycle in the game. I made custom textures in photoshop for different phases of the moon, ' +
          'and each night the phase advances by one. This is obviously not scientifically accurate, but I am planning on using it as a difficulty modifier.'
      }
    ]
  },

  'project-lasers': {
    'title': 'Lasers',
    'banner': '',
    'tech': ['Unreal Engine', 'Blender'],
    'sections': [
      {
        'text': 'This is a first person sci-fi puzzle game. The Player must solve puzzles using Lasers to power the essential systems ' +
          'of the Spaceship they are on. ' +
          '<br><br>This project is currently on hold while I finish school and work on Project: Night Shift. '
      },
      {
        'header': 'LASER REFLECTION',
        'image': 'media/lasers-01-reflection.png',
        'text': 'This image demonstrates the laser system. The cube to the left of the image is a Laser Emitter. ' +
          'This emitter draws a line trace directly in front of it, travelling a certain distance, checking for actors implementing ' +
          'a "Reflectable" interface. ' +
          'If it hits a reflectable actor, the hit point is stored and the Line Trace fires again from that point. ' +
          'It is fully dynamic, as it runs on Tick. I also created a "Beam Strength" variable that changes value based on ' +
          'the Actor hit. By default Actors decrease the Beam Strength, causing it to fizzle out, ' +
          'but some Actors can recharge the beam as they get hit. '
      },
      {
        'header': 'INSIDE THE SHIP',
        'image': 'media/lasers-02-hallway.png',
        'text': 'This is an early view of the first level of the game. I made some modular hallway pieces in Blender, ' +
          'and connected them together in engine. There are no textures yet, as I want to focus on learning Blender and creating the game mechanics first. ' +
          'In this scene, the Player has just started the game, and is making their way to the Ships Main Reactor. ' +
          'The lights on the ceiling rotate quickly, giving a sense of urgency as well as lighting the path for the Player. '
      },
      {
        'header': 'ITEMS',
        'link': '/projects/posh-framework/item-system',
        'linkInternal': true,
        'text': 'This is the first project where created my newest iteration of my item system. When making the laser gun, ' +
          'I decided to solve a lot of my long-standing problems with the old system I had. I then incorporated these changes into my framework. '
      }
    ]
  },

  'project-tappy': {
    'title': 'Tappy',
    'banner': '',
    'tech': ['Unity', 'Photoshop'],
    'sections': [
      {
        'header': 'GET IT ON ITCH.IO',
        'link': 'https://superslicestudios.itch.io/flappy-prototype',
        'text': 'This is a game inspired by the popular app Flappy Bird. I personally really enjoyed Flappy Bird, and I was disappointed ' +
          'when it was removed from the App Store and Google Play. I have searched for years for alternate versions to play instead, ' +
          'but none of them have the same signature feel of the original Flappy Birds physics. ' +
          '<br><br>Until now. <br><br>I found a research paper online which calculated the exact formula for the original Flappy Birds jumping, and I ' +
          'implemented that formula in this project. '
      },
      {
        'header': 'FEATURES',
        'text': 'The game includes most of the features from the original so far, besides leaderboards and score medals. ' +
          'In the future, I would like to add customization and difficulty settings, as well as implement the very specific obstacle spawning logic ' +
          'from the original game. ' +
          '<br><br>As one might expect, the pipes in Flappy Bird spawn in a random order. However, from my many hours of playing (high score: 1051), I can tell you that they are not entirely random. ' +
          'The pipes spawn in patterns of 4. These patterns are then strung together randomly. This is the next feature I plan to add to emulate the original game more faithfully. '
      }
    ]
  },

  'posh-framework': {
    'title': 'Posh Framework',
    'banner': '',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'The Posh Framework is a reusable Unreal Engine 5 plugin that provides common gameplay mechanics. ' +
          'I made it because as I made more games and prototypes, I kept finding myself remaking systems I had already created before, ' +
          'or going back to older projects to update them with improvements I made elsewhere. Also I just wanted to learn how to make a plugin. ' +
          'Now, whenever I make a new project, I immediately have mechanics that most games need, such as a player, items, or an inventory. ' +
          'Additionally, because it is shared between projects, when I improve an implementation in one project, the others benefit as well. '
      },
      {
        'text': 'A major goal of the framework is reducing the amount of code required to implement common gameplay features. ' +
          'Whenever possible, systems are designed so that new content can be created through inheritance, interfaces, data assets, or Blueprint ' +
          'configuration rather than modifying existing gameplay code. '
      },
      {
        'text': 'As of now, the framework is built for personal use only. Long-term, I have thought about the possibility of releasing the plugin either as a whole ' +
          'or as standalone mechanic plugins, but that would require a lot of refactoring. Additionally, this would potentially require time set aside to handle issues reported with it, which ' +
          'I do not have right now. '
      },
      {
        'text': 'Originally I called this plugin the \'Player System\' because it was supposed to be only that, and I wanted to make distinct plugins for the other mechanics. ' +
          'As I kept adding features I just decided to keep it all in one place because it made it easier to import it into projects and keep everything updated together. '
      },
      {
        'header': 'FEATURES',
        'hubSection': true,
        'hubLinks': [
          {
            'title': 'PLAYER',
            'link': 'player',
            'image': 'media/posh/player/PlayerBlueprint.png'
          },
          {
            'title': 'INTERACTION',
            'link': 'interaction-system',
            'image': 'media/posh/interaction/InteractionCover.png'
          },
          {
            'title': 'ITEMS',
            'link': 'item-system',
            'image': 'media/posh/items/ItemsCover.png'
          },
          {
            'title': 'INVENTORY',
            'link': 'inventory-system',
            'image': 'media/posh/inventory/InventoryCover.png'
          },
          {
            'title': 'ATTRIBUTES',
            'link': 'gameplay-attributes',
            'image': 'media/posh/attributes/AttributesCover.png'
          },
          {
            'title': 'TERRAIN',
            'link': 'terrain-gen',
            'image': 'media/posh/terrain/TerrainCover.png'
          },
        ]
      },
    ]
  }
} satisfies Record<string, IProjectData>;

export type ProjectID = keyof typeof ProjectPage;

export const FeaturePage = {
  'player': {
    'title': 'PLAYER',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'One of the first additions alongside the interaction system is the custom player pawn and controller. ' +
          'This base player pawn handles movement, camera, jumping, and sprinting functionality. The base controller ' +
          'handles some generic input like the pause menu, displaying other UI widgets, and implements the ControllerAuthority ' +
          'interface for the interaction system. '
      },
      {
        'header': 'GAMEPLAY ATTRIBUTES',
        'link': '/projects/posh-framework/gameplay-attributes',
        'linkInternal': true,
        'text': 'As of August 2026 ' +
          'I have updated the movement values to use attributes created with the Unreal Gameplay Ability System rather than hardcoding them. ' +
          'The reason for this update is not just simply to add GAS support, but because my current project needed easily modifiable attributes. ' +
          'I chose to implement GAS rather than roll my own system. ' +
          'WalkSpeed, SprintSpeed, CrouchSpeed, AirControl, and JumpZVelocity all read from this attribute set, and can be easily ' +
          'modified using Gameplay Effects, another of the Gameplay Ability Systems features. '
      },
      {
        'text': 'These Gameplay Effects can be applied by a number of things, but in my current project I have them applied when ' +
          'picking up certain items. '
      },
      {
        'header': 'GAMEPLAY TAGS',
        'text': 'Another feature of the Gameplay Ability System are Gameplay Tags. These tags can be used as logic gates or labels. ' +
          'For example, my player checks to see if itself contains a tag such as StatusEffect.State.Stunned, and if so, prevents movement code ' +
          'from running. The same tag can be checked against on enemies, allowing the player to disable their movement for a time as well. '
      },
      {
        'header': 'MOVEMENT',
        'text': 'Sprint and crouch both support toggle or hold inputs modes via a boolean flag and a \'gate\' to prevent duplicate inputs. ' +
          'Sprint is server-authoritative and replicated, allowing clients to sprint in a multiplayer game. '
      },
      {
        'text': 'Crouch was broken for a long time because I did not realize that the camera had to be directly attached to the capsule component,' +
          'or at least another basic scene component. I had mine attached to a mesh component and it did not work. ' +
          'After making that change, my crouch code which went unused for about a year finally worked flawlessly, with no other changes. ' +
          'I will look into ensuring this is server-authoritative soon now that I know it actually works. '
      },
      {
        'header': 'CAMERA',
        'text': 'Look input supports both mouse and controller. A data asset stores the values for the players selected sensitivity, dead-zones, and ' +
          'directional inversion settings. '
      },
      {
        'header': 'INPUT HELPER',
        'image': 'media/posh/player/PlayerInputHelper.png',
        'text': 'The input helper is a static function library designed to assist with assigning and removing enhanced input contexts ' +
          'from the player. It simplifies the syntax and makes it easy to add and remove input context from anywhere. I use this in ' +
          'both the player pawn and controller to assign the appropriate input context assets. '
      },
      {
        'header': 'IN THE FUTURE',
        'text': 'I have not added any support for giving the player a 3D model. I plan to add this eventually, however I am very ' +
          'particular about how I want it done. I do not want a simple set of floating arms, although the first iteration will ' +
          'likely be just that. Eventually I would like to implement a true first person system, allowing the player to see their ' +
          'legs when they look down. '
      },
      {
        'text': 'Sliding will be useful for faster paced games, ' +
          'as well as just giving the player some level of freedom that they expect. As for the method of sliding, I prefer physics/momentum ' +
          'based sliding in games - if you are sliding down a hill, you should reach the bottom of the hill before the slide cancels itself. ' +
          'This is the type of slide I plan to implement when I am making a game that needs it. '
      },
      {
        'text': 'The culmination of all the movement updates: wall-running. I am a big fan of the franchise Mirror\'s Edge, ' +
          'and I have wanted to make a parkour game for a long time. All of these features coming together would provide full ' +
          'flexibility within the framework, a grounded view of the players presence in the world, and enable the creation of parkour games. '
      },
    ]
  },
  'interaction-system': {
    'title': 'INTERACTION',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'The Interaction System is the oldest part of the framework. I first wrote the initial implementation in 2022, ' +
          'but it has seen small additions over time. Functionally, it has gotten easier to use while providing more mechanics for the developer to utilize. ',
      },
      {
        'header': 'INITIAL VERSION',
        'text': 'The original version of this system involved two functions. On Tick, the Player Pawn would get the Interaction Component and call its Trace() function. ' +
          'This function took several parameters, including the trace channel to use for interactable detection, the distance to trace, a camera to trace from, and a boolean to turn it on or off. ' +
          'The Trace function returned an Actor reference, which would be stored on the Player Pawn and passed to a function called TryInteract(), ' +
          'responsible for attempting the interaction when an input event occurred. ',
      },
      {
        'text': 'I originally designed the system this way because I wanted a simple function that could be called from anywhere ' +
          'while allowing the caller to provide whatever values it needed. Over time, I realized this flexibility was mostly ' +
          'unnecessary and actually made the system more difficult to use. Most of these values would never need to be set dynamically per function call, ' +
          'so I eventually turned them into properties on the component itself. This reduced the amount of setup and made the ' +
          'component easier to work with while still providing the same functionality.',
      },
      {
        'text': 'An Interactable Object was defined using an interface. This allowed any Actor to become interactable without ' +
          'requiring a specific inheritance hierarchy. Before the Player Pawn would store the hit actor, ' +
          'the Interaction Component verified that it implemented this interface. The interface provided events that the Player Pawn ' +
          'could call to run the interaction logic. ',
      },
      {
        'header': 'CURRENT VERSION',
        'image': 'media/posh/interaction/InteractionComponent.png',
        'text': 'The current version of the interaction system still utilizes a mostly property based approach. ' +
          'It still takes a camera input parameter, but the on/off toggle, distance, and trace channel are all properties. ' +
          'Additionally there is a debug toggle that will output some information about the interaction to the log when enabled. '
      },
      {
        'image': 'media/posh/interaction/InteractionTrace.png',
        'text': 'The Player Pawn still calls the Trace() function on Tick, but it no longer has an output. The Interaction Component itself ' +
          'stores the Actor, and the Player then uses that reference to try to initiate the interaction on the object. Because of this simplification, ' +
          'the Trace() function is easier to use in both C++ and Blueprints, relying on only a single function call with easily adjustable properties in the Unreal Editor. ',
      },
      {
        'image': 'media/posh/interaction/InteractionSettings.png',
        'text': 'Interactable Objects are now built around both an interface and an abstract base Actor. The interface defines the ' +
          'contract used by the Interaction Component, while the base Actor provides a default implementation of the functionality ' +
          'most Interactable Objects require. ' +
          'Because of this, most Interactable Objects can be created by simply inheriting from the provided base classes rather than reimplementing ' +
          'interaction logic from scratch. This can be done in C++ or in the Editor, as I have made all the necessary classes and functions Blueprint compatible. '
      },
      {
        'image': 'media/posh/interaction/InteractableData.png',
        'text': 'The abstract base Actor exists because I needed a place to store the name of the object. ' +
          'This class has since grown to also include interaction type routing, multiplayer support, collision configuration, and delegates.',
      },
      {
        'text': 'The Interactable interface is also responsible for providing the interaction paths for each object, ' +
          'including Primary and Secondary Interaction events, as well as a replication-related event for multiplayer. ' +
          'The base Actor implements these events, while the Player Pawn calls them using the Interactable Object reference ' +
          'stored on the Interaction Component. '
      },
      {
        'text': 'Primary and Secondary Interaction are functionally identical paths distinguished only by name. Either one can ' +
          'be assigned to either input type, Press or Hold. When the Player Pawn calls an Interaction event, the base Actor routes it ' +
          'to the correct path based on which input triggered it. This lets designers swap interaction functionality between input types simply ' +
          'in the Editor, as well as letting Interactable Objects support multiple input events.'
      },
      {
        'header': 'THE INTERACTION FLOW',
        'text': 'When Trace() is called, the component performs a Line Trace using the specified Trace Channel. ' +
          'Any object configured to Block that given channel will be seen by it when the Line Trace hits it. ' +
          'After hitting an object, if the object implements the Interactable interface, this object will be stored on ' +
          'the Interaction Component. From there, the Player Pawn can access the Interactable Object during an Interaction input event. ' +
          'Storing the object in such a way removes the need to keep the Interaction function within the same function scope, ' +
          'as well as making the Trace() call simpler to use. '
      },
      {
        'text': 'When an Interaction event occurs, the Player Pawn requests the currently targeted object from the Interaction Component. ' +
          'If there is a valid Interactable Object, the appropriate interaction event is executed through the Interactable interface. ' +
          'Because every Interactable implements the same interface, the Player Pawn does not need to know what type of object ' +
          'is being interacted with. Whether the object is a door, an item pickup, or a quest objective, the interaction logic never changes. ' +
          'Another benefit of this architecture is that new interactable objects can be created without ever touching code or modifying the Player or Interaction Component. ' +
          'As long as an object implements the interface, it can immediately be used as an Interactable. '
      },
      {
        'header': 'THE MULTIPLAYER HANDSHAKE',
        'text': 'After I made the initial version of the Interaction System, I wanted to make it multiplayer compatible. ' +
          'I have many ideas for multiplayer games, and I didn\'t want to have to redesign the system later to support it. ' +
          'One thing I wanted to guarantee is interactables owning their logic, not the Player. During testing, I tried marking ' +
          'each actor as replicated, using a replicated variable for state, and using a RepNotify function to sync state between clients. ' +
          'None of these tests worked on their own. Only when these steps were combined with the Player Controller handling the interaction state and logic did the interaction event work properly. ' +
          'This issue is likely something related to how the Server/Client authority model works in Unreal Engine, ' +
          'but I don\'t know enough about it to say definitively. '
      },
      {
        'text': 'In this initial testing version of my replicated interaction system, the Interactable Object needed to return data to the Player Controller and let it ' +
          'decide what happens to the Object. This worked, however, I did not like this, because it meant having to create entire sections of code within the Player Controller for every object type. ' +
          'This would have inflated the Controller for each game, made everything too dependent on each other, and been way more work than I was willing to do for such a system. '
      },
      {
        'text': 'My solution to this problem was to create an Interface that can be implemented on any Controller called \'ControllerAuthority\', which can be called from the Interactable to request ' +
          'authorization from the Controller. The Interaction System runs through a series of 5 functions, mostly running on the Interactable Object itself before calling the appropriate ' +
          'interaction event. The event that the Player Pawn executes on the Interactable Object during the interaction is the first step. This first function handles ' +
          'the Host Only restriction, which is necessary for interactions involving map transitions using Steam Multiplayer. For whatever reason, initiating a map transition as a Client disconnected them from the game. ' +
          'So I made that boolean so Clients wouldn\'t accidentally remove themselves. '
      },
      {
        'text': 'The second step in this process gets a reference to the Player Pawn and its Controller, and ensures that the ControllerAuthority exists. ' +
          'If successful, the interaction is temporarily passed to the Controller, which handles the third step. ' +
          'During this third step, the ControllerAuthority event then just simply calls the interaction event on the Interactable Object. ' +
          'This call counts as the Controller running the code, even though the logic lives on the Interactable Object. The fourth step is a routing step, ' +
          'determining which interaction event to run based on the input, either Primary or Secondary. The fifth and final step is the actual ' +
          'execution of the interaction event. '
      },
      {
        'text': 'This setup ensures that every single Interactable Object will run its logic in a multiplayer environment automatically. The only thing a designer must ' +
          'do differently than creating normal Blueprint logic is to use replicated variables and RepNotify events. '
      },
      {
        'header': 'PROBLEMS AND SOLUTIONS',
        'text': 'Throughout the development of this feature, I ran into a couple problems. The first issue was that the Interactable text ' +
          'was being requested every single frame, even when it had not changed, rather than running only when necessary. ' +
          'The second issue appeared when two Interactable Objects were touching. Looking between them without a gap would not update the text or the stored Actor ' +
          'because it never deleted the old Interactable from its cache. '
      },
      {
        'text': 'I solved the second problem first. I simply added a boolean check to see if the stored Actor was equal to the Actor that the ' +
          'Interaction Component was detecting with the Line Trace. If not, then I would swap the stored Actor. '
      },
      {
        'text': 'The solution to the second problem then gave me an easy way to solve the first problem: delegates. I created two new delegates, OnBeginInteractionText and OnEndInteractionText. ' +
          'Within that Actor change check, I call the appropriate delegate and pass the interaction text value. ' +
          'These events can then be hooked into by the UI, only firing the text update when necessary. '
      },
      {
        'header': 'IN THE FUTURE',
        'text': 'The next planned feature for the Interaction System is an Editor extensible system that lets designers ' +
          'define verbs for interactions, such as \'Search\' or \'Use\', rather than defaulting to the object name. ' +
          'This will allow Interactable Objects to support custom ' +
          'display text while allowing easy modification of several assets at once. I plan to use Data Assets, which are shared references to a single piece of data, to accomplish this. ' +
          'Each Interactable Object would store a reference to one, along with a function to combine the name and verb into the interaction text. '
      },
    ]
  },
  'item-system': {
    'title': 'ITEMS',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'Items in the framework are a subclass of the Interactable Base Object, inheriting all of its interaction functionality ' +
          'while adding an item interface that defines three usage events: Primary, Secondary, and Tertiary Use. '
      },
      {
        'header': 'CONTINUOUS STATE',
        'image': 'media/posh/items/ItemData.png',
        'text': 'The main feature of this Item System ' +
          'is that every item is the exact same object regardless of whether it is in your hand or on the floor in the world, there is no separate item pickup ' +
          'object. The reason I did this is because it is more immersive to be able to use item functions without necessarily equipping them, such as toggling a ' +
          'flashlight on or off without picking it up. The tradeoff with this functionality is that because the interaction interface only exposes two events, and ' +
          'the item interface exposes three, you only really have one event to work with when adding item functionality to an interaction event for use without equipping. ' +
          'This is because the other interaction event needs to be used for storing or equipping the item. '
      },
      {
        'text': 'Because each object is the same no matter where it is being represented, I needed a way to ensure that item state was ' +
          'carried through interaction events. To use the flashlight example again, if I turn the flashlight on, and then pick it up, it should stay on. ' +
          'To accomplish this, I use the same instanced data object approach as my interactable data. I inherit that class to create an item data class. ' +
          'This class then carries all of the information that an interactable would provide, like the name of the object, while adding in item specific variables as well, ' +
          'while still being able to be stored in an inventory with other items because of inheritance. '
      },
      {
        'text': 'These item specific variables are not created using Blueprint classes. They do not exist as assets. The data object is instanced, ' +
          'which means it lives, is created, and is edited exclusively within the object details panel. ' +
          'This simplifies asset creation because all of an item\'s configuration exists in one place. There are no separate Blueprint classes to edit. ' +
          'An item\'s data will only ever be separated from itself in game, so there is no need to require a workflow involving separate data assets. '
      },
      {
        'header': 'PROBLEMS AND SOLUTIONS',
        'text': 'An earlier version of this item system, built in 2022, took a different approach to data and state: the item data lived in a struct, while the item state ' +
          '(anything that needed to persist, like a flashlight\'s on/off status) lived in a separate object entirely. Because structs cannot safely inherit ' +
          'from one another in Unreal Engine, and state needed to exist independently as its own persistent object, the actor, its properties struct, and its state object, ' +
          'were never completely unified. The inventory instead tracked several parallel arrays, one for item classes, one for item properties, one for item counts, and one for ' +
          'item states, which were all kept connected together using a single index stored on the item properties struct. '
      },
      {
        'text': 'This worked, but it was very fragile. Removing an item required manually shifting every higher index item\'s stored state to account ' +
          'for the shrinking array. Any operation on one array that wasn\'t perfectly mirrored across the other three risked desyncing the items from ' +
          'their state. '
      },
      {
        'text': 'The current system solves this issue by combining everything into a single, instanced, inheritable UObject. ' +
          'Because the interactable data base object class supports proper inheritance (something the struct couldn\'t offer), ' +
          'item-specific data can extend it directly, carrying both its configuration and its persistent state in one object, ' +
          'with no external array, no manual index adjustments, and no possibility of desync between an item and its state. '
      },
      {
        'header': 'IN THE FUTURE',
        'text': 'The current item class has a toggle for enabling \'External Interaction\'. It does not function properly right now, ' +
          'but I want to get it functional soon. I have a few horror game ideas that would be more fun in theory with such a mechanic. ' +
          'This mechanic is meant to allow other players to use the items that you are holding in your hand. To bring the flashlight example back, ' +
          'imagine you are playing a horror game and you need to sneak around a map. A flashlight would give you away. But if this setting was enabled, ' +
          'a friend could come up and either help or hinder you in this moment, say if you don\'t hear a monster coming and forget to ' +
          'turn your light off, or they are messing with you by turning your light on. ' +
          'This mechanic is meant to be optional, but it enables largely unexplored types of cooperative gameplay regarding held items. '
      },
    ]
  },
  'inventory-system': {
    'title': 'INVENTORY',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'The Inventory System is a very barebones extensible template for creating simple storage. ' +
          'It is intentionally not very in depth, because every game has different requirements for inventory storage, ' +
          'and I did not want to try to account for every possibility. '
      },
      {
        'header': 'ORIGINAL VERSION',
        'image': 'media/posh/inventory/InventoryOld.png',
        'text': 'The original Inventory implementation from 2022 stored item data across many parallel arrays. ' +
          'It was also responsible for the spawning items into the player\'s hands, placing them in the world, ' +
          'managing the active item index and scrolling input, and handling state for items that needed it. ' +
          'This worked for the project I made it for, but it was very strict and inflexible. '
      },
      {
        'header': 'CURRENT VERSION',
        'image': 'media/posh/inventory/InventoryNew.png',
        'text': 'The new version of the Inventory System significantly simplifies the architecture. ' +
          'Items are stored as a singular data object, and the inventory provides a virtual RouteItem() function ' +
          'for the developer to override, letting you decide how individual items are stored in your game. ' +
          'The base class does basically nothing, and only exists to be overwritten. ' +
          'It is intended to be used as a template, while the game defines how the items and inventory interact. '
      },
      {
        'text': 'In the new version, the game-specific subclass that the developer makes is where most of the old logic should live. ' +
          'For example, in my current project, I override RouteItem() to insert items into different inventories ' +
          'based on the item type. This is fully extensible and only limited by the structure of your RouteItem() implementation. '
      },
      {
        'header': 'IN THE FUTURE',
        'text': 'The new version does not support item stacks, which is something I plan to add soon. ' +
          'Also, the overall structure is still not perfect, providing a singular array for storage, while some games may need more, ' +
          'and currently rely on creating new arrays in their subclass. This works but there may be a better way, which I am trying to figure out. ' +
          'I want to think of a way to convert it to a more hands-off, dynamic, but still structured architecture. ' +
          'The solution might be to remove storage altogether and convert it into an interface entirely, providing only overridable functions. ' +
          'Or it could be to store it as an instanced object rather than a component. Or to have configurable sub-inventory objects on a primary inventory. '
      },
    ]
  },
  'gameplay-attributes': {
    'title': 'GAMEPLAY ATTRIBUTES',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'Gameplay Attributes are a part of the Unreal Gameplay Ability System. I recently added this to the framework ' +
          'to support development of my current project, which requires hooks into a lot of attributes for items to modify. ' +
          'Rather than create my own attribute system (I tried and got nowhere) I decided to learn how to use GAS, and it has ' +
          'made my life much, much, much easier. It is a very powerful system and I highly recommend using it. '
      },
      {
        'image': 'media/posh/attributes/AttributesStats.png',
        'text': 'The Posh Attribute Set defines every stat the framework and its games can read from or modify through the Gameplay Ability System: health and regeneration, ' +
          'movement speeds, per-element damage resistances, crit chance and multiplier, bonus elemental damage, and three status effects (Bleed, Burn, Shock), each with ' +
          'its own Chance, Damage, Rate, and Duration. Corrode and Freeze are planned but not yet implemented. '
      },
      {
        'header': 'DIRECT DAMAGE MITIGATION',
        'text': 'Incoming damage arrives on a dedicated, transient meta-attribute per element (Kinetic, Fire, Electric). PostGameplayEffectExecute reads the value, ' +
          'resets the meta-attribute to zero, and converts it into mitigated damage using that element\'s resistance attribute as a percentage before subtracting it from Health. ' +
          'Resistance is intentionally clamped differently depending on context: direct damage resistance is capped at -2 to 1, allowing vulnerability but never more than full mitigation, ' +
          'while damage-over-time resistance is clamped -2 to 2, deliberately allowing a high enough resistance value to overshoot 100% mitigation and heal the target instead. ' +
          'That second case was a deliberate design choice, because I thought it would be funny. '
      },
      {
        'header': 'DAMAGE EXECUTION',
        'image': 'media/posh/attributes/AttributesDamage.png',
        'text': 'The actual damage calculation lives in a separate Gameplay Effect Execution Calculation, which captures crit, bonus damage, and status-effect attributes, ' +
          'then reads the base incoming damage per element from Set By Caller tags supplied by whatever weapon or ability triggered the effect. ' +
          'This keeps base damage numbers out of the attribute set entirely; they are provided at the moment of the hit rather than stored as persistent state. '
      },
      {
        'header': 'STATUS EFFECT PROCS',
        'text': 'For each damage type, if incoming damage is greater than zero, a random roll against that element\'s Chance attribute decides whether a status effect procs. ' +
          'If it does, a new Gameplay Effect Spec is built for the corresponding status, sourced from the attacker\'s Ability System Component rather than the victim\'s, ' +
          'so that any resistances or bonuses tied to dealing that status correctly belong to the attacker. ' +
          'The victim\'s target-side Damage, Rate, and Duration values for that status are then captured and pushed onto the new spec, and the spec\'s Period is set directly from ' +
          'the Rate attribute. Setting Period is the entire implementation needed for the effect to tick, as GAS Gameplay Effects handle periodic application automatically from there. '
      },
      {
        'header': 'IN THE FUTURE',
        'text': 'Corrode and Freeze status effects are planned but not yet implemented, following the same Chance/Damage/Rate/Duration pattern as Bleed, Burn, and Shock. ' +
          'Given that these could all be technically defined as game-specific, I should move them out of the framework. But seeing as I am the only one using it, ' +
          'they will probably stay for a while. '
      },
    ]
  },
  'terrain-gen': {
    'title': 'TERRAIN GENERATION',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'text': 'My terrain generation system, named Nysa, was built using a YouTube tutorial and lots of AI assisted coding. ' +
          'I watched the tutorial for a baseline understanding, and then used the AI to help me expand it with features I wanted. '
      },
      {
        'header': 'GENERATION',
        'image': 'media/posh/terrain/TerrainManager.png',
        'text': 'The terrain can be generated in editor or at runtime. I have a boolean on the actor that allows you to regenerate the ' +
          'terrain at will, optionally with a random seed. At runtime, the way I have it set up is that it will use whatever settings ' +
          'were assigned when the executable was built. A previous version of it supported menu settings, such as changing the size before ' +
          'loading the generator in-game, or toggling tree generation, but this iteration of the generator does not feature this yet, as it relies on ' +
          'the game instance to handle such a system, and I have not gotten around to making it easier to setup yet. '
      },
      {
        'text': 'There is also no save system yet, so every time you play the game the map will be regenerated fresh. '
      },
      {
        'header': 'NOISE',
        'image': 'media/posh/terrain/TerrainNoise.png',
        'text': 'The terrain height is build from four layered Perlin noise samples. I chose this amount because I didn\'t want ' +
          'the terrain to be noticeably repeating each time, and also because it allowed there to be landscape-wide elevation changes ' +
          'between generations. Each of the four layers is sampled at its own scale and multiplied by a unique Z-strength, then summed together at every vertex. ' +
          'Each layer has its own FRandomStream, seeded from a single master seed, plus a fixed offset per layer. '
      },
      {
        'header': 'LOW POLY',
        'text': 'Because I am a solo dev, I decided that I would make my games with a low poly art style to reduce the ' +
          'difficulty of asset creation as I work. Because of this, it does not make sense to try to create a high resolution terrain. ' +
          'The low poly aspect of this terrain is both a visual and performance based decision, providing a similar asset quality to ' +
          'my desired art style, as well as fast generation on low end hardware such as the Steam Deck. '
      },
      {
        'header': 'DISTANT TERRAIN',
        'image': 'media/posh/terrain/TerrainDistant.png',
        'text': 'I wanted to make the world outside of the main map look massive in order to give the player a sense of scale, ' +
          'as well as to ensure that if you were up high or near the map edge it did not look like the map was floating in space. ' +
          'To accomplish this, I created an outer ring mesh, following the exact same noise as the main terrain, but at a lower resolution ' +
          'to save processing power. I also set it to spawn slightly below the main terrain. This is because a lower resolution sample' +
          'would have a different edge shape, potentially allowing the player to see underneath the map. ' +
          'This outer mesh goes out far beyond the main mesh, and has an unnoticeable impact on performance from my testing. ' +
          'It can also be optionally disabled. '
      },
      {
        'header': 'LOCATIONS',
        'image': 'media/posh/terrain/TerrainLocations.png',
        'text': 'The terrain can accept a list of \'locations\' to spawn around itself using a grid-based rejection ' +
          'technique similar to Poisson Disc sampling. This method chooses a random vertex and places a location. ' +
          'Then, from that location a radius is defined, and a random angle is generated. The terrain then tries to place a location' +
          'at the intersection of the radius and this chosen angle. If it is within a certain radius of other chosen locations, then it is rejected. ' +
          'Otherwise, if it is in a clear area, it accepts the chosen spot and makes it a location. Each disc has a set amount of attempts it will ' +
          'iterate through to try to choose a valid angle. The amount of total locations can be limited as well, but there is no way to guarantee ' +
          'the minimum amount of locations. '
      },
      {
        'image': 'media/posh/terrain/TerrainFlat.png',
        'text': 'To ensure that any locations placed in the world are properly seated into the ground, I added a flattening pass to the terrain. ' +
          'This pass goes over every location and gets every vertex in a defined radius around it. It then sets the Z height of every one of those vertexes ' +
          'to be equal to the location Z height. Because this flattening step runs for every location, if the flatten radius and the location radius ' +
          'are too different, you may have an issue where one location alters the flat area of another location. The solution to this is to ' +
          'ensure that the location radius is always larger than the flattening radius. These values are set in the details panel on the generator. '
      },
      {
        'header': 'TREE SCATTERING',
        'text': 'The trees are spawned using bilinear interpolation across each quad of the mesh. There are configurable limits to how ' +
          'steep of a slope allows trees to spawn, how many trees to try to spawn per quad, and how close trees can spawn to a location. ' +
          'These settings allow the developer to ensure that trees do not spawn inside any locations or on cliffs. '
      },
      {
        'header': 'PLAYER SPAWN',
        'text': 'Because the terrain is randomly generated, I cannot predict where a valid location to spawn the player will be located at beforehand. ' +
          'To solve this, I made a system that would get a vertex near the middle of the map, and move the player spawn to slightly above that point after ' +
          'the terrain is done generating. '
      },
      {
        'header': 'BIOME PRESETS',
        'image': 'media/posh/terrain/TerrainProfile.png',
        'text': 'I created a data asset that contains many of the variables for generating the terrain. This asset includes ' +
          'settings for the noise scales and multipliers as well as the tree density and spawning settings. These ' +
          'data assets allow designers to create predefined terrain types and easily swap between them. '
      },
      {
        'header': 'PROBLEMS AND SOLUTIONS',
        'text': 'While testing the terrain generation, I noticed that some areas of the generated landscape would randomly be lit up, ' +
          'regardless of whether the levels directional light was actually hitting the mesh in that spot. This confused me for a long time. ' +
          'Initially I thought it was an issue with tangent generation, which is used for calculating light and shadows on the mesh faces, ' +
          'but the issue stayed even with tangents disabled. ' +
          'As I was looking around at one of the generated meshes, I noticed that the directional light was shining through the underside of the mesh, ' +
          'and lighting the top. To fix this, I made the very edge of the both terrain layers a flat height, far below the bottom of the map, ' +
          'to ensure that the directional light would never shine in such a way. '
      },
      {
        'header': 'IN THE FUTURE',
        'text': 'As of now, the terrain only supports one model of tree to be spawned at once. This is because I only use a single ' +
          'Hierarchical Instanced Static Mesh component on the terrain. This component only has one slot for the static mesh to render. ' +
          'A solution to this would likely involve multiple components like this, but I have not tested how to implement this into my generation code. '
      },
      {
        'text': 'The biome preset data assets are not very customizable right now. Because I designed the terrain to generate a forest, ' +
          'it is not really possible to include anything like ponds, lakes, streams, canyons, islands, caves, or any other special type of land formation. ' +
          'It is also not possible to change the terrain texture using this. In the future I would like to expand this ' +
          'feature to support more drastic changes to the terrain. '
      },
    ]
  },
} satisfies Record<string, IProjectData>

export type FeatureID = keyof typeof FeaturePage;

// export type ProjectData = (typeof ProjectPage)[ProjectID];
