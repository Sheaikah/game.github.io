<!DOCTYPE html>
<html>

  <head>
  <meta charset="utf-8">
  <title>Asteroids</title>
  <style></style>
  </head>

  <body>
    <canvas id="gameCanvas" width= "700" height= "500"></canvas>
<script>
  
  const FPS= 30; //frames per second  
  /**@type {HTMLCanvasElement} */
    var canv = document.gwtElementById("gameCanvas");
    var ctx = canv.getContext("2d");
  
  //set up the game loop 
  setInterval(update, 1000 / FPS);
  
  function update(){
  //draw space
  ctx.fillStyle = "black"
  ctx.fillReact(0, 0, canv.width, canv.hieght);
    
  //draw ship

  
  //rotate ship


  //move the ship
}
</script>
  </body>
  
</html>
