import { ReactP5Wrapper, type P5CanvasInstance, type Sketch, type SketchProps } from "@p5-wrapper/react";
import useResizeObserver from "use-resize-observer";

/**
 * @see https://www.npmjs.com/package/react-p5-wrapper
 */

export type P5Props = React.HTMLAttributes<HTMLDivElement> & {
}

export const P5 = ({
  ...props
}: P5Props) => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  const sketch: Sketch = (p5: P5CanvasInstance<SketchProps>) => {
    p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);
  
    p5.draw = () => {
      p5.background(200);
      p5.normalMaterial();
      p5.noStroke();
      p5.push();
      p5.rotateY(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.001);
      p5.box(100);
      p5.pop();
    };
  }

  return (
    <div {...props} ref={ref}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  )
}