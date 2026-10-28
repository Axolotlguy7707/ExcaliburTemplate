import * as ex from 'excalibur';
import { ExampleScene } from './game/scenes/ExampleScene';

export const game = new ex.Engine({
  width: 1280,
  height: 720,
  backgroundColor: ex.Color.fromHex("#54C0CA"),
  pixelArt: true,
  pixelRatio: 2,
  displayMode: ex.DisplayMode.FitScreen
});

game.add('example', ExampleScene);
game.goToScene('example');

game.start();