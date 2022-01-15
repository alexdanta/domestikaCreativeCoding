const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'white'
    context.lineWidth = width * 0.004

    const w = width * 0.10
    const h = height * 0.10
    const gap = width * 0.03
    const ix = width * 0.17
    const iy = width * 0.17

    const c = w / 2
    const off = width * 0.02
    let x, y

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath()
        context.rect(x, y, w, h)
        context.moveTo(x + c, y + c)
        context.arc(x + c, y + c, h / 2, 0, 2 * Math.PI)
        context.lineTo(x + c, y)
        // context.lineTo(x, y + 60)
        context.stroke()

        if (Math.random() > 0.5) {
          context.beginPath()
          context.rect(x + off / 2, y + off / 2, w - off, h - off)
          context.moveTo(x + c, y + c)
          context.arc(x + c, y + c, h / 2.5, 0, 2 * Math.PI)
          // context.moveTo(x + 60, y + 60)
          // context.lineTo(x + 30, y)
          // context.lineTo(x, y + 60)
          context.stroke()
        }
      }
    }

  };
};

canvasSketch(sketch, settings);
