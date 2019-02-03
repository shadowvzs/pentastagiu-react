export const Orbit = data => {
    const circle = Math.PI * 2,
        speed = circle / 40;
    const { angle, ctx, cX, cY, radius } = data;
    let x, y, nX, nY, theta;
    ctx.beginPath();
    for(theta = 0; theta < circle; theta += speed ) { 
        x = radius * (Math.cos(theta) * 0.2);
        y = radius * (Math.sin(theta));    
        nX = x * Math.cos(angle) + y * Math.sin(angle);
        nY = -x * Math.sin(angle) + y * Math.cos(angle);
        ctx.lineTo(cX + ~~nX,cY + ~~nY);
    }
    ctx.closePath();    
    ctx.stroke();      
}