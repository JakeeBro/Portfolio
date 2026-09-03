export interface IToolData {
  id: string;
  name: string;
  src: string;
}

export const tools: IToolData[] = [
  { id: 'ue', name: 'Unreal Engine 5', src: 'icons/unreal-engine.svg'},
  { id: 'un', name: 'Unity', src: 'icons/unity.svg',},
  { id: 'bl', name: 'Blender', src: 'icons/blender.svg'},
  { id: 'ng', name: 'Angular', src: 'icons/angular.svg'},
  { id: 'sb', name: 'Spring Boot', src: 'icons/spring.svg',},
  { id: 'js', name: 'JavaScript', src: 'icons/javascript.svg'},
  { id: 'html', name: 'HTML5', src: 'icons/html.svg'},
  { id: 'css', name: 'CSS3', src: 'icons/css.svg'},
  { id: 'pr', name: 'Premiere Pro', src: 'icons/premiere.svg'},
  { id: 'ae', name: 'After Effects', src: 'icons/aftereffects.svg'}
]
