export interface IHubLink {
  title: string;
  link: string;
  image?: string;
}

export interface IProjectSection {
  header?: string;
  link?: string;
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
        'text': 'This website was originally made as an interview project, but I decided to clean it up and convert it to Angular ' +
          'as a form of practice. ' +
          '<br><br>' +
          'It is a simple game where you must guess a random number within a range. You can choose the range yourself, and even limit the ' +
          'amount of guesses you can take. ' +
          '<br><br>' +
          'I also added a set of predefined themes for you to choose from.',
      }
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
        'linkError': true,
        'errorMessage': 'I am not currently paying for Railway',
        'text': 'This website was a way for me to practice making a fully deployed CRUD app. It is extremely simple. I made ' +
          'it using Angular and Spring Boot. The front end is hosted on GitHub pages like all my other sites, and the backend is ' +
          'hosted on Railway. ',
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
          'It is a showcase of a fictional tropical island in the Pacific Ocean named Taniti. ' +
          '<br><br>' +
          'I used Firestore for the backend, as it is just a simple fake e-commerce app. ' +
          'You can \'buy\' fake tickets for activities and \'order\' them through the site. ' +
          '<br><br>' +
          'There is a 20 item cart limit, as well as a 5 order account limit. It is all fake, ' +
          'so please feel free to delete any orders if the limit is reached while you are testing it. ' +
          '<br><br>' +
          'It is fully responsive, and features a toggleble dark/light theme. You can find the theme toggle in the profile tab'
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
        'link': 'https://jakeebro.github.io/Portfolio/',
        'text': 'This is a website designed to show off some of my work. This is where you are right now.'
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
            'title': 'GAS',
            'link': 'gas',
            'image': 'media/posh/gas/GASCover.png'
          },
          {
            'title': 'TERRAIN',
            'link': 'terrain-gen',
            'image': 'media/posh/terrain/TerrainCover.png'
          },
        ]
      },
      {
        'header': 'TOPIC GUIDE (WRITING REFERENCE - IGNORE)',
        'text': 'Custom Player Pawn' +
          '<br>Custom Player Controller' +
          '<br>Interaction System' +
          '<br>Item System' +
          '<br>Inventory System' +
          '<br>Damage System' +
          '<br>Status Effects' +
          '<br>Gameplay Ability System Extensions' +
          '<br>Terrain Generation System'
      }
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
        'header': 'OVERVIEW',
        'text': 'The Player Pawn'
      }
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
        'header': 'OVERVIEW',
        'text': 'Item System'
      }
    ]
  },
  'inventory-system': {
    'title': 'INVENTORY',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'header': 'OVERVIEW',
        'text': 'Inventory System'
      }
    ]
  },
  'gas': {
    'title': 'GAMEPLAY ABILITY SYSTEM',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'header': 'OVERVIEW',
        'text': 'Gameplay Ability System'
      }
    ]
  },
  'terrain-gen': {
    'title': 'TERRAIN GENERATION',
    'tech': ['Unreal Engine'],
    'sections': [
      {
        'header': 'OVERVIEW',
        'text': 'Terrain Generation System'
      }
    ]
  },
} satisfies Record<string, IProjectData>

export type FeatureID = keyof typeof FeaturePage;

// export type ProjectData = (typeof ProjectPage)[ProjectID];
