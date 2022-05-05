kaboom({
  background: [225,225,225],
  scale: 1,
  //scale: 0.15
})


scene("game", () => {
  const camX = 2152.5
  
    camPos(camX,350)
  
  //background for bed 
  add([
    rect(1435,700),
    pos(0,0),
    color(210, 255, 186)
  ])
    //background for window 
  add([
    rect(1435,700),
    pos(1435,0),
    color(121, 188, 242)
  ])
     //background for closet 
  add([
    rect(1435,700),
    pos(2870,0),
    color(252, 151, 212)
  ])
  
  //character
  let y = 300
  let x = 2050
 const player = add([
    rect(200,400),
    area(),
    color(100,20,20),
    pos(x,y),
  ])
  
  //left and right arrows
  
  function leftBtn(){
   const btn = add([
    rect(100,50),
    area(),
    pos(1535,600),
    color(255, 245, 186),
    scale(1),
     origin("center"),
    "left",
  ])
   btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.scale = vec2(1.2)
            btn.color = rgb(154, 255, 107)
		} else {
			btn.scale = vec2(1)
            btn.color = rgb(255, 245, 186)
		}
	})
  }
  leftBtn()
  
  function left2Btn(){
   const btn = add([
    rect(100,50),
    area(),
    pos(2970,600),
    color(255, 245, 186),
    origin("center"),
    "left2",
  ])
   btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.scale = vec2(1.2)
          btn.color = rgb(154, 255, 107)
		} else {
			btn.scale = vec2(1)
          btn.color = rgb(255, 245, 186)
		}
	})
  }
  left2Btn()
  
   function rightBtn(){
   const btn = add([
    rect(100,50),
    area(),
    pos(2770,600),
    color(255, 245, 186),
     origin("center"),
    "right",
  ])
   btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.scale = vec2(1.2)
          btn.color = rgb(154, 255, 107)
		} else {
			btn.scale = vec2(1)
          btn.color = rgb(255, 245, 186)
		}
	})
  }
  rightBtn() 
  
  function right2Btn(){
   const btn = add([
    rect(100,50),
    area(),
    pos(1335,600),
    color(255, 245, 186),
     origin("center"),
    "right2",
  ])
   btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.scale = vec2(1.2)
          btn.color = rgb(154, 255, 107)
		} else {
			btn.scale = vec2(1)
          btn.color = rgb(255, 245, 186)
		}
	})
  }
  right2Btn() 
  
  
  
  //button stuff
 
 
  
  //change cam pos on button click
  onClick("left", () => {
    camPos(camX-1435, 350)
    player.moveTo(900,300)
  })
  onClick("left2", () => {
    camPos(camX, 350)
    player.moveTo(x,y)
  })
  
  onClick("right", () => {
    camPos(camX+1435, 350)
    player.moveTo(3200,300)
  })
  onClick("right2", () => {
    camPos(camX, 350)
    player.moveTo(x,y)
  })
  

  
  //background covers
  add([
    rect(4305,50),
    pos(0,-50),
    color(38, 12, 7)
  ])
  add([
    rect(4305,50),
    pos(0,700),
    color(38, 12, 7)
  ])
  add([
    rect(50,800),
    pos(-50, -50),
    color(38, 12, 7)
  ])
  add([
    rect(50,800),
    pos(4305, -50),
    color(38, 12, 7)
  ])
  
  //end scene
})

scene("menu", () => {
  
})

scene("end", () => {
  
})

go("game")
