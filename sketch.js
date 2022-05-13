kaboom({
  background: [225,225,225],
  scale: 1,
//  scale: 0.15
})

  loadSprite("background", "unbalanced bkg.jpg")
  loadSprite("pDefault", "playerDefault2.png")
  loadSprite("Aright", "rightarrow.png")
  loadSprite("Aleft", "leftarrow.png")


scene("game", () => {
  
  add([
    sprite("background",{
      width: 4305,
      height: 700
    }),
    pos(0, 0)
  ])

  
  const camX = 2152.5
  let playerHealth = 100
  
    camPos(camX,350)
  
  //menu button
   function addButton(txt, p, f) {
    const txtBtn = add([
      text(txt, {
      font: "sink",
      size: 30
    }),
      pos(p),
      area(),
      scale(1),
      origin("center"),
      color(163, 83, 100)
    ])
    
    txtBtn.onClick(f)
    
    txtBtn.onUpdate(() => {
      if (txtBtn.isHovering()) {
        const t = time() * 10
        txtBtn.color = rgb(204,120,138)
        txtBtn.scale = vec2(1.2)
      }
      else {
			txtBtn.scale = vec2(1)
			txtBtn.color = rgb(163, 83, 100)
		}
    })
  }
  
 //health bar
  const Phealthbar = add([
		rect(playerHealth * width(), 15),
		pos(0, 30),
		color(127, 255, 127),
		fixed(),
        "healthbar",
		{
			max: playerHealth,
			set(hp) {
				this.width = width() * hp / this.max
				this.flash = true
			},
		},
	])

	Phealthbar.onUpdate(() => {
		if (Phealthbar.flash) {
			Phealthbar.color = rgb(255, 255, 255)
			Phealthbar.flash = false
		} else {
			Phealthbar.color = rgb(127, 255, 127)
		}
	})
  
 
 
 let playerColor = add([
  "playerColor",
   rgb(),
 ])
 
  //rat cage
  function addRat() {
    const ratBtn = add([
      "ratBtn",
      rect(100,100),
      pos(2500,300),
      area(),
      scale(1),
      origin("center"),
      color(2, 91, 245),
      onClick("ratBtn",()=>{
        destroy(ratBtn)
        playerColor = rgb(7,71,180)
        player.color = rgb(playerColor)
        debug.log("What.. did you do?")
      })
    ])
    
    ratBtn.onUpdate(() => {
      if (ratBtn.isHovering()) {
        const t = time() * 10
        ratBtn.color = rgb(76, 135, 237)
        ratBtn.scale = vec2(1.2)
      }
      else {
			ratBtn.scale = vec2(1)
			ratBtn.color = rgb(2, 91, 245)
		}
    })
  }

  addRat(() => {})
  
  onClick("ratBtn",() => {
    playerHealth--
    Phealthbar.width = playerHealth * 10
  })
  
  //poster 
  function addpot() {
    const potBtn = add([
      "potBtn",
      rect(250,450),
      pos(3100,300),
      area(),
      scale(1),
      origin("center"),
      color(100, 158, 90),
      onClick("potBtn",()=>{
        destroy(potBtn)
        playerColor = rgb(100, 158, 90)
        player.color = rgb(playerColor)
        debug.log("I can still hear it at night...")
      })
    ])
    
    potBtn.onUpdate(() => {
      if (potBtn.isHovering()) {
        const t = time() * 10
        potBtn.color = rgb(154, 217, 143)
        potBtn.scale = vec2(1.2)
      }
      else {
			potBtn.scale = vec2(1)
			potBtn.color = rgb(100, 158, 90)
		}
    })
  }

  addpot(() => {})
  
  onClick("potBtn",() => {
    playerHealth--
    Phealthbar.width = playerHealth * 10
  })
  
  
  //Diary
  function addDiary() {
    const dBtn = add([
      "dBtn",
      rect(70,90),
      pos(2280,170),
      area(),
      scale(1),
      origin("center"),
      color(2, 91, 245),
      onClick("dBtn",()=>{
        go("end2")
        debug.log("You weren't supposed to look...")
        
      })
    ])
    
    dBtn.onUpdate(() => {
      if (dBtn.isHovering()) {
        const t = time() * 10
        dBtn.color = rgb(254,222,255)
        dBtn.scale = vec2(1.2)
        player.color = rgb(101,102,105)
        debug.log("...")
      }
      else {
			dBtn.scale = vec2(1)
			dBtn.color = rgb(254,126,255)
            player.color = playerColor
		}
    })
  }

  addDiary(() => {})
  
  onClick("dBtn",() => {
    playerHealth--
    Phealthbar.width = playerHealth * 10
  })
  
   //character
  let y = 200
  let x = 2050
 const player = add([
    sprite("pDefault", {
      width: 250,
      height: 550
    }),
    area(),
    pos(x,y),
    health(playerHealth),
   "player",
   
  ])
  
  //menu buttons
   addButton("Menu", vec2(717.5, 50), () =>  {
    go("menu")
    debug.log("Bye")
  })
  addButton("Menu", vec2(2152.5, 50), () =>  {
    go("menu")
    debug.log("Bye")
  })
  addButton("Menu", vec2(3587.5, 50), () =>  {
    go("menu")
    debug.log("Bye")
  })
  
  //left and right arrows
  
  function leftBtn(){
   const btn = add([
    sprite("Aleft", {
      width: 100,
      height: 50
    }),
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
            btn.color = rgb(255,225,210)
		} else {
			btn.scale = vec2(1)
            btn.color = rgb(255, 245, 186)
		}
	})
  }
  leftBtn()
  
  function left2Btn(){
   const btn = add([
     sprite("Aleft", {
      width: 100,
      height: 50
    }),
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
          btn.color = rgb(255,225,210)
		} else {
			btn.scale = vec2(1)
          btn.color = rgb(255, 245, 186)
		}
	})
  }
  left2Btn()
  
   function rightBtn(){
   const btn = add([
     sprite("Aright", {
      width: 100,
      height: 50
    }),
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
          btn.color = rgb(255,225,210)
		} else {
			btn.scale = vec2(1)
          btn.color = rgb(255, 245, 186)
		}
	})
  }
  rightBtn() 
  
  function right2Btn(){
   const btn = add([
     sprite("Aright", {
      width: 100,
      height: 50
    }),
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
          btn.color = rgb(255,225,210)
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
    player.moveTo(900,200)
  })
  onClick("left2", () => {
    camPos(camX, 350)
    player.moveTo(x,y)
  })
  
  onClick("right", () => {
    camPos(camX+1435, 350)
    player.moveTo(3200,200)
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
  
  function addButton(txt, p, f) {
    const txtBtn = add([
      text(txt, {
      font: "sinko",
      size: 50
    }),
      pos(p),
      area(),
      scale(1),
      origin("center")    
    ])
    
    txtBtn.onClick(f)
    
    txtBtn.onUpdate(() => {
      if (txtBtn.isHovering()) {
        const t = time() * 10
        txtBtn.color = rgb(239, 207, 255)
        txtBtn.scale = vec2(1.2)
      }
      else {
			txtBtn.scale = vec2(1)
			txtBtn.color = rgb()
		}
    })
  }
  
  const dialogs = [
	["" ],
    ["..." ],
    ["Hello?" ],
	["Yes? Hello?" ],
    ["One second!" ],
    ["Who's knocking?" ],
	["You can come in." ],
	["What is it?" ],
	["Is it time for dinner?" ],
	["I'm not hungry.." ],
	["...Yes?" ],
	["Hm?" ],
    ["Really, What is it?" ],
    ["Do you need something?" ],  
    ["I'll be out later." ],
    ["I need to find my socks first..." ],
    ["Now where are they...." ],
    ["..." ],
    ["...." ],
    ["....." ],
    ["......" ],
    ["......." ],
]

let curDialog = 0
  
  //buttons and title
  addButton("Go in", vec2(width()/2, height()/2), () =>  {
    go("game")
    debug.log("Oh, hello")
  })
  
  const txt = add([
	text("",{
      size: 30,
      font: "sink"
    }),
    pos(width()/2, height()/2+200),
    origin("center"),
    color(133, 134, 153)
])
  
  addButton("Knock", vec2(width()/2, height()/2+100), () =>  {
        curDialog = (curDialog + 1) % dialogs.length
	updateDialog()
  })
  
  function updateDialog() {

	const dialog = dialogs[curDialog]

	txt.text = dialog

}
  updateDialog()
  
  add([
    text("Unbalanced",{
      font: "sinko",
      size: 100,
      transform: (idx, ch) => ({
			color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
		}),
    }),
    origin("center"),
    pos(width()/2, height()/2-200)
  ])
  
})

//death end
scene("end1", () => {
  
   function addButton(txt, p, f) {
    const txtBtn = add([
      text(txt, {
      font: "sink",
      size: 30
    }),
      pos(p),
      area(),
      scale(1),
      origin("center"),
      color(163, 83, 100)
    ])
    
    txtBtn.onClick(f)
    
    txtBtn.onUpdate(() => {
      if (txtBtn.isHovering()) {
        const t = time() * 10
        txtBtn.color = rgb(204,120,138)
        txtBtn.scale = vec2(1.2)
      }
      else {
			txtBtn.scale = vec2(1)
			txtBtn.color = rgb(163, 83, 100)
		}
    })
  }
  add([
    text("How cruel",{
      font: "sink",
      size: 100
    }),
    pos(width()/2, height()/2-100),
    origin("center"),
    color(92, 11, 6)
  ])
  add([
    text("Ending 1/4",{
      font: "sink",
      size: 30
    }),
    pos(width()/2, height()/2),
    origin("center"),
    color(110, 91, 90)
  ])
  
  addButton("Menu", vec2(width()/2, height()/2+200), () =>  {
    go("menu")
  })
})

//diary end
scene("end2", () => {
  
   function addButton(txt, p, f) {
    const txtBtn = add([
      text(txt, {
      font: "sink",
      size: 30
    }),
      pos(p),
      area(),
      scale(1),
      origin("center"),
      color(163, 83, 100)
    ])
    
    txtBtn.onClick(f)
    
    txtBtn.onUpdate(() => {
      if (txtBtn.isHovering()) {
        const t = time() * 10
        txtBtn.color = rgb(204,120,138)
        txtBtn.scale = vec2(1.2)
      }
      else {
			txtBtn.scale = vec2(1)
			txtBtn.color = rgb(163, 83, 100)
		}
    })
  }
  add([
    text("Stop being nosy.",{
      font: "sink",
      size: 100
    }),
    pos(width()/2, height()/2-100),
    origin("center"),
    color(92, 11, 6)
  ])
  add([
    text("Ending 2/4",{
      font: "sink",
      size: 30
    }),
    pos(width()/2, height()/2),
    origin("center"),
    color(110, 91, 90)
  ])
  
  addButton("Menu", vec2(width()/2, height()/2+200), () =>  {
    go("menu")
  })
})

//pill end
scene("end3", () => {
  
   function addButton(txt, p, f) {
    const txtBtn = add([
      text(txt, {
      font: "sink",
      size: 30
    }),
      pos(p),
      area(),
      scale(1),
      origin("center"),
      color(163, 83, 100)
    ])
    
    txtBtn.onClick(f)
    
    txtBtn.onUpdate(() => {
      if (txtBtn.isHovering()) {
        const t = time() * 10
        txtBtn.color = rgb(204,120,138)
        txtBtn.scale = vec2(1.2)
      }
      else {
			txtBtn.scale = vec2(1)
			txtBtn.color = rgb(163, 83, 100)
		}
    })
  }
  add([
    text("Sweet dreams",{
      font: "sink",
      size: 100
    }),
    pos(width()/2, height()/2-100),
    origin("center"),
    color(92, 11, 6)
  ])
  add([
    text("Ending 3/4",{
      font: "sink",
      size: 30
    }),
    pos(width()/2, height()/2),
    origin("center"),
    color(110, 91, 90)
  ])
  
  addButton("Menu", vec2(width()/2, height()/2+200), () =>  {
    go("menu")
  })
})

//sock end
scene("end4", () => {
  
   function addButton(txt, p, f) {
    const txtBtn = add([
      text(txt, {
      font: "sink",
      size: 30
    }),
      pos(p),
      area(),
      scale(1),
      origin("center"),
      color(163, 83, 100)
    ])
    
    txtBtn.onClick(f)
    
    txtBtn.onUpdate(() => {
      if (txtBtn.isHovering()) {
        const t = time() * 10
        txtBtn.color = rgb(204,120,138)
        txtBtn.scale = vec2(1.2)
      }
      else {
			txtBtn.scale = vec2(1)
			txtBtn.color = rgb(163, 83, 100)
		}
    })
  }
  add([
    text("Oh! You found my socks!",{
      font: "sink",
      size: 80
    }),
    pos(width()/2, height()/2-100),
    origin("center"),
    color(92, 11, 6)
  ])
  add([
    text("Ending 4/4",{
      font: "sink",
      size: 30
    }),
    pos(width()/2, height()/2),
    origin("center"),
    color(110, 91, 90)
  ])
  
  addButton("Menu", vec2(width()/2, height()/2+200), () =>  {
    go("menu")
  }) 
})

go("game")
