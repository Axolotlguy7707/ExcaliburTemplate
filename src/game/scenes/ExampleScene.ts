import * as ex from 'excalibur';

export class ExampleScene extends ex.Scene
{
    override onInitialize(engine: ex.Engine): void {
        const exampleText = new ex.Label({
            text: "This is ExampleScene!",
            pos: ex.vec(100, 100),
            scale: ex.vec(5, 5)
        });

        this.add(exampleText);
    }
}