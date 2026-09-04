export interface IProjectCard {
  id: string;
  title: string;
  image: string;
  desc: string;
  icon: string;
  toolID: string;
  specialColor?: string;
  featured?: boolean;
}

export const featured_projects: IProjectCard[] = [
  {
    id: 'posh-framework',
    title: 'Posh Framework',
    image: 'thumbnails/night-shift.png',
    desc: 'An Unreal Engine 5 Framework Plugin',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
    featured: true,
  }
]

export const projects: IProjectCard[] = [
  {
    id: 'project-night-shift',
    title: 'Night Shift',
    image: 'thumbnails/night-shift.png',
    desc: 'Restock the store shelves at your overnight job',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
  },
  {
    id: 'project-hunt',
    title: 'Hunt',
    image: 'thumbnails/terror.png',
    desc: 'Escape from a randomly generated forest',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
  },
  {
    id: 'project-lasers',
    title: 'Lasers',
    image: 'thumbnails/lasers.png',
    desc: 'FPS puzzle game featuring a laser gun',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
  },
  {
    id: 'project-tappy',
    title: 'Flappy',
    image: 'thumbnails/tap.png',
    desc: 'Flappy Bird-like project',
    icon: 'icons/unity.svg',
    toolID: 'un',
  },
  {
    id: 'taniti',
    title: 'Taniti',
    image: 'thumbnails/taniti.jpg',
    desc: 'A fake travel website for the Pacific island of Taniti',
    icon: 'icons/angular.svg',
    toolID: 'ng',
  },
  {
    id: 'higher-lower',
    title: 'Higher Lower',
    image: 'thumbnails/higher-lower.png',
    desc: 'Small Browser Game',
    icon: 'icons/angular.svg',
    toolID: 'ng',
  },
  {
    id: 'world-map',
    title: 'World Map',
    image: 'thumbnails/world-map.png',
    desc: 'School Project',
    icon: 'icons/angular.svg',
    toolID: 'ng',
    specialColor: 'white',
  },
  {
    id: 'boxes',
    title: 'Boxes',
    image: 'thumbnails/boxes.png',
    desc: 'Small CRUD App',
    icon: 'icons/spring.svg',
    toolID: 'ng',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    image: 'profile.jpg',
    desc: 'YOU 🫵 ARE HERE 📍',
    icon: 'icons/angular.svg',
    toolID: 'ng'
  }
]

// ###########
// ### OLD ###
// ###########

export const game_projects: IProjectCard[] = [
  {
    id: 'project-night-shift',
    title: 'Night Shift',
    image: 'thumbnails/night-shift.png',
    desc: 'Restock the store shelves at your overnight job',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
    featured: false,
  },
  {
    id: 'project-hunt',
    title: 'Hunt',
    image: 'thumbnails/terror.png',
    desc: 'Escape from a randomly generated forest',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
    featured: false,
  },
  {
    id: 'project-lasers',
    title: 'Lasers',
    image: 'thumbnails/lasers.png',
    desc: 'FPS puzzle game featuring a laser gun',
    icon: 'icons/unreal-engine.svg',
    toolID: 'ue',
    featured: false,
  },
  {
    id: 'project-tappy',
    title: 'Flappy',
    image: 'thumbnails/tap.png',
    desc: 'Flappy Bird-like project',
    icon: 'icons/unity.svg',
    toolID: 'un',
    featured: false,
  }
]

export const web_projects: IProjectCard[] = [
  {
    id: 'taniti',
    title: 'Taniti',
    image: 'thumbnails/taniti.jpg',
    desc: 'A fake travel website for the Pacific island of Taniti',
    icon: 'icons/angular.svg',
    toolID: 'ng',
    featured: false,
  },
  {
    id: 'higher-lower',
    title: 'Higher Lower',
    image: 'thumbnails/higher-lower.png',
    desc: 'Small Browser Game',
    icon: 'icons/angular.svg',
    toolID: 'ng',
    featured: false,
  },
  {
    id: 'world-map',
    title: 'World Map',
    image: 'thumbnails/world-map.png',
    desc: 'School Project',
    icon: 'icons/angular.svg',
    toolID: 'ng',
    featured: false,
  },
  {
    id: 'boxes',
    title: 'Boxes',
    image: 'thumbnails/boxes.png',
    desc: 'Small CRUD App',
    icon: 'icons/spring.svg',
    toolID: 'sb',
    featured: false,
  },
  {
    id: 'snippets',
    title: 'Code Snippets',
    image: 'thumbnails/matrix.png',
    desc: 'A Collection of various code snippets from my projects',
    icon: 'icons/git.svg',
    toolID: '',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    image: 'profile.jpg',
    desc: 'YOU 🫵 ARE HERE 📍',
    icon: 'icons/angular.svg',
    toolID: 'ng',
    featured: false,
  }
]
